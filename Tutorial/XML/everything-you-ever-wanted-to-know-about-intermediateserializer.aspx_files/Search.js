var Core_Search_CurrentSearch = null;

function Core_Search_Register(context) {
    var textBox = $('#' + context.parameter.textBoxId, context.wrapperElement);
    textBox.attr("autocomplete", "off");
    context.parameter.lastKeyCode = null;
    context.parameter.timeout = null;
    context.parameter.hasFocus = false;
    context.parameter.lastContent = "";
    context.parameter.searchOptionsOpen = false;
    textBox
    .keydown(function(e) {
        if (e.keyCode == 13) {
            e.returnValue = false;
            e.cancel = true;

            if (context.parameter.timeout) clearTimeout(context.parameter.timeout);

            Core_Search_HideSearchList(context);
            textBox.get(0).blur();

            Core_Search_RedirectToSearch(context);

            return false;
        }
    })
    .keyup(function(e) {
        context.parameter.lastKeyCode = e.keyCode;

        if (context.parameter.timeout) clearTimeout(context.parameter.timeout);
        context.parameter.timeout = setTimeout(function() { Core_Search_OnChange(context); }, 500);

        if (context.parameter.lastKeyCode > 8 && context.parameter.lastKeyCode < 46) return;
        if (textBox.val().length > 0)
            Core_Search_ShowSearchList(context, context.parameter.searchSearchingHtmlBlock);
        else
            Core_Search_HideSearchList(context);
    })
    .focus(function() {
        context.parameter.hasFocus = true;
        if (!$(this).hasClass('empty')) {
            context.parameter.lastKeyCode = -1;
            if (context.parameter.timeout) clearTimeout(context.parameter.timeout);
            Core_Search_OnChange(context);
        }
    })
    .blur(function() {
        context.parameter.hasFocus = false;
        if (context.parameter.timeout) clearTimeout(context.parameter.timeout);
    });

    $('.internal-link.search-options', context.wrapperElement)
    .click(function() {
        if (context.parameter.searchOptionsOpen == false) {
            context.parameter.searchOptionsOpen = true;
            Core_Search_HideSearchList(context);
            eval(context.parameter.searchOptionsPopup).ShowAtElement(this);
            $(this).addClass('active active__internal-link active__internal-link__search-options active__search-options');
        }

        return false;
    });
    $('input[name=' + context.parameter.searchOptionName + ']').click(function() {
        context.parameter.searchOptionsOpen = false;
        eval(Core_Search_CurrentSearch.parameter.searchOptionsPopup).Hide();
        $('.internal-link.search-options', context.wrapperElement).removeClass('active active__internal-link active__internal-link__search-options active__search-options');
        Core_Search_CurrentSearch = null;
        Core_Search_FilterChanged(context);
    });
}

function Core_Search_FilterChanged(context) {
    $('#' + context.parameter.textBoxId, context.wrapperElement).focus();
}

function Core_Search_RedirectToSearch(context) {
    var textBox = $('#' + context.parameter.textBoxId, context.wrapperElement);
    var searchQuery = textBox.val();

    if (searchQuery.length <= 0)
        return;

    var filterOption = $('input[name=' + context.parameter.searchOptionName + ']:checked');
    var filterKeyValue = '';

    if (filterOption.length > 0)
        filterKeyValue = filterOption.attr('value').split(':');

    if (filterKeyValue.length != 2)
        filterKeyValue = ['', 0];

    var message = '{"queryText":"' + searchQuery.replace(/\"/g, "\\\"") + '","filterType":"' + filterKeyValue[0] + '","filterId":' + filterKeyValue[1] + '}';

    $.ajax({
        type: "POST",
        url: Core_Search_AjaxEndpoint + "/GetSearchRedirect",
        data: message,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function(xhr) {
            TelligentUtility.WriteAuthorizationHeader(xhr);
        },
        success: function(response) {
            window.location = response.d.SearchLink;
        }
    });
}

function Core_Search_OnChange(context) {
    if (context.parameter.lastKeyCode > 8 && context.parameter.lastKeyCode < 46) return;
    var textBox = $('#' + context.parameter.textBoxId, context.wrapperElement);
    var searchQuery = textBox.val();

    if (searchQuery.length > 0) {
        textBox.removeClass('empty');
    }
    else {
        textBox.addClass('empty');
    }

    if (searchQuery.length > 0) {

        var filterOption = $('input[name=' + context.parameter.searchOptionName + ']:checked');
        var filterKeyValue = '';

        if (filterOption.length > 0)
            filterKeyValue = filterOption.attr('value').split(':');

        if (filterKeyValue.length != 2)
            filterKeyValue = ['', 0];

        var message = '{"queryText":"' + searchQuery.replace(/\"/g, "\\\"") + '","filterType":"' + filterKeyValue[0] + '","filterId":' + filterKeyValue[1] + '}';

        $.ajax({
            type: "POST",
            url: Core_Search_AjaxEndpoint + "/Search",
            data: message,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function(xhr) {
                TelligentUtility.WriteAuthorizationHeader(xhr);
            },
            success: function(response) {
                if (context.parameter.hasFocus == false) return;
                var objs = response.d;

                if (objs.length > 0) {
                    content = context.parameter.showAllHtmlBlock.replace(/{ShowAllLink}/g, objs[0].SearchLink);
                    $.each(objs, function() {
                        var groupHtml = context.parameter.searchGroupHtmlBlock.replace(/{ContentName}/g, this.ContentName);
                        var itemHtml = "";

                        $.each(this.Documents, function() {
                            var item = context.parameter.searchItemHtmlBlock.replace(/{Link}/g, this.Link);
                            item = item.replace(/{Title}/g, this.Title);
                            item = item.replace(/{LinkType}/g, this.LinkType);
                            itemHtml += item;
                        });

                        groupHtml = groupHtml.replace(/{ContentItems}/g, itemHtml);

                        content += groupHtml;
                    });

                    content = context.parameter.searchResultWrapperHtmlBlock.replace(/{SearchResults}/g, content);
                }
                else {
                    content = context.parameter.searchNoResultsHtmlBlock;
                }

                Core_Search_ShowSearchList(context, content);
            },
            error: function(xhr, desc, ex) {
                if (context.parameter.hasFocus == false) return;
                content = context.parameter.searchErrorHtmlBlock;
                var t = setTimeout(function() { Core_Search_ShowSearchList(context, content); }, 100);
            }
        });


    } else {
        Core_Search_HideSearchList(context);
    }
};

function Core_Search_ShowSearchList(context, content) {
    if (context.parameter.lastKeyCode != 13) {
        var popup = eval(context.parameter.popupId);
        if (context.parameter.lastContent != content) {
            context.parameter.lastContent = content;
            popup.SetPanelContent(content);
            popup.Refresh();
        }
        if (!popup.IsShown()) {
            var e = $('#' + context.parameter.textBoxId, context.wrapperElement).get(0);
            popup.ShowAtElement(e);
        }
    }
}

function Core_Search_HideSearchList(context) {
    var popup = eval(context.parameter.popupId);
    popup.Hide();
}

function Core_Search_MouseOverSearchOptions(context)
{
    context.parameter.mouseInPopup = true;
}

function Core_Search_MouseOutSearchOptions(context)
{
    context.parameter.mouseInPopup = false;
}

function Core_Search_DocumentClick()
{
    if (Core_Search_CurrentSearch && !Core_Search_CurrentSearch.parameter.mouseInPopup)
    {
        Core_Search_CurrentSearch.parameter.searchOptionsOpen = false;
        eval(Core_Search_CurrentSearch.parameter.searchOptionsPopup).Hide();
        $('.internal-link.search-options', Core_Search_CurrentSearch.wrapperElement).removeClass('active active__internal-link active__internal-link__search-options active__search-options');
        Core_Search_CurrentSearch = null;
    }
}

function Core_Search_SearchOptionsOpened(context)
{
    Core_Search_CurrentSearch = context;
}

$(function()
{
    $(document).bind('click', Core_Search_DocumentClick);
});
