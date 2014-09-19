var Core_GroupNavigation_CurrentGroupNavigation = null;

function Core_GroupNavigation_ShowNav(context, parentGroupId, e) {

    Core_GroupNavigation_HidePopup(context);

    if (e && context.parameter.currentGroupId != parentGroupId) {
        if (context.parameter.showTimer) {
            clearTimeout(context.parameter.showTimer);
        }

        if (context.parameter.currentMenuElement)
            $($(context.parameter.currentMenuElement).parent().get(0)).removeClass("active");

        var wrapper = $('#' + context.parameter.popupWrapperID);

        context.parameter.currentGroupId = parentGroupId;
        context.parameter.currentMenuElement = e;

        context.parameter.showTimer = setTimeout(function() { Core_GroupNavigation_GetChildGroups(context); }, 499);
    }

    if (!Core_GroupNavigation_CurrentGroupNavigation)
        setTimeout(function() { Core_GroupNavigation_CurrentGroupNavigation = context; }, 19);
}

function Core_GroupNavigation_MoreShowNav(context, isParent, e) {
    if (isParent == true)
        Core_GroupNavigation_ShowNav(context, -1, e);
    else
        Core_GroupNavigation_ShowNav(context, -2, e);
}

function Core_GroupNavigation_HideNav(context, parentGroupId, e) {
    if (e && context.parameter.currentGroupId == parentGroupId) {
        if (context.parameter.hideTimer) {
            clearTimeout(context.parameter.hideTimer);
        }
        context.parameter.hideTimer = setTimeout(function() { Core_GroupNavigation_HidePopup(context); }, 249);
    }
}

function Core_GroupNavigation_MoreMouseOutPopup(context, isParent, e) {
    if (isParent == true)
        Core_GroupNavigation_HideNav(context, -1, e);
    else
        Core_GroupNavigation_HideNav(context, -2, e);
}

function Core_GroupNavigation_RenderGroups(context, groupsArray) {

}

function Core_GroupNavigation_GetChildGroups(context) {
    var popupPanel = eval(context.parameter.popupMenuId);
    var wrapper = $('#' + context.parameter.popupWrapperID);
    $('.multiple-column-list', wrapper).hide();
    $('.internal-link.view-all-groups', wrapper).hide();

    var parentElement = $(context.parameter.currentMenuElement).parent().get(0);
    if (!parentElement)
        return;
    
    $(parentElement).addClass("active");

    var groupId = context.parameter.currentGroupId;

    if (groupId > 0 || groupId < -2) {

        var content = Core_GroupNavigation_LoadFromCache(context, groupId);
        if (content) {
            popupPanel.SetPanelContent(content);
            popupPanel.ShowAtElement(parentElement);
        }
        else {
            content = context.parameter.loadingHtml
            popupPanel.SetPanelContent(content);
            popupPanel.ShowAtElement(parentElement);
            // var elementInfo = Telligent_Common.GetElementInfo(parentElement);
            // popupPanel.Show(elementInfo.Left, elementInfo.Top, elementInfo.Width, elementInfo.Height);
            var message = '{"parentGroupId":"' + groupId + '"}';
            $.ajax({
                type: "POST",
                url: Core_GroupNavigation_AjaxEndpoint + "/GetChildren",
                contentType: "application/json; charset=utf-8",
                data: message,
                dataType: "json",
                beforeSend: function(xhr) {
                    TelligentUtility.WriteAuthorizationHeader(xhr);
                },
                success: function(msg) {
                    var objs = msg.d;
                    var content = "";

                    if (objs.Groups.length > 0) {

                        var hasChildGroups = false;
                        $.each(objs.Groups, function() {
                            if (this.Groups.length > 0) {
                                hasChildGroups = true;
                                return;
                            }
                        });
                        if (hasChildGroups == true)
                            content += Core_GroupNavigation_RenderGroupsWithChildren(context, objs);
                        else
                            content += Core_GroupNavigation_RenderGroups(context, objs);
                    }
                    content = context.parameter.groupNavigationContentWrapperHtmlBlock.replace(/{GroupNavigationContent}/g, content);

                    var popupPanel = eval(context.parameter.popupMenuId);
                    popupPanel.Hide();
                    popupPanel.SetPanelContent(content);
                    popupPanel.ShowAtElement(parentElement);

                    Core_GroupNavigation_AddToCache(context, groupId, content);

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    var popupPanel = eval(context.parameter.popupMenuId);
                    popupPanel.SetPanelContent(context.parameter.errorHtml);
                }
            });
        }
    }
    else {
        var moreContent = "";
        if (groupId == -1)
            moreContent = $('#' + context.parameter.popupParentMoreId).html();
        else if (groupId == -2)
            moreContent = $('#' + context.parameter.popupChildMoreId).html();

        var popupPanel = eval(context.parameter.popupMenuId);
        popupPanel.Hide();
        popupPanel.SetPanelContent(moreContent);
        popupPanel.ShowAtElement(parentElement);
    }
}

function Core_GroupNavigation_RenderGroupsWithChildren(context, groupsObj) {
    var t1Groups = "";
    var columnsMarkup = "";
    var columnsCount = 0;
    var columnGroups = 0;
    var groupsArray = groupsObj.Groups;
    var t1GroupCount = 0;

    var listContent = context.parameter.groupNavigationListHtmlBlock;

    columnsCount = 1;

    // t1 Groups
    $.each(groupsArray, function() {
        if (columnsCount > 3) { return; }
        if (this.Groups.length + 2 + columnGroups > 21) {
            columnsMarkup += context.parameter.columnWrapperHtmlBlock.replace(/{ColumnId}/g, columnsCount).replace(/{T1GroupsData}/g, t1Groups);
            t1Groups = "";
            columnsCount++;
            columnGroups = 0;
            if (columnsCount > 3) { return; }
        }
        columnGroups += this.Groups.length + 2;

        var t2Groups = "";
        // t2 Groups
        var groupCount = this.Groups.length;
        var itemCount = 0;
        if (this.Groups.length > 0) {
            $.each(this.Groups, function() {
                itemCount++;
                var itemClass = "";
                if (itemCount == 1)
                    itemClass = " first";
                else if (itemCount == groupCount)
                    itemClass = " last";

                t2Groups += context.parameter.t2GroupHtmlBlock.replace(/{ItemClass}/g, itemClass).replace(/{Item}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, this.Name).replace(/{Url}/g, this.Url));

                if (this.IsAndMoreLink) {
                    t2Groups = t2Groups.replace(/{MoreClass}/g, "internal-link view-more");
                }
                else
                    t2Groups = t2Groups.replace(/{MoreClass}/g, "internal-link view-group");
            });
            t1Groups += context.parameter.t1GroupHtmlBlock.replace(/{NameClass}/g, " with-children").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, this.Name).replace(/{Url}/g, this.Url).replace(/{MoreClass}/g, "internal-link view-group"));
        }
        else {
            t1Groups += context.parameter.t1GroupHtmlBlock.replace(/{NameClass}/g, "").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, this.Name).replace(/{Url}/g, this.Url).replace(/{MoreClass}/g, "internal-link view-group"));
        }
        t1Groups = t1Groups.replace(/{Groups}/g, t2Groups);
        t1GroupCount++;
    });

    if (groupsObj.IsMore == true) {
        if (t1GroupCount == groupsArray.length) {
            t1Groups += context.parameter.t1GroupHtmlBlock.replace(/{Groups}/g, "").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, groupsObj.ViewAll.Text).replace(/{Url}/g, groupsObj.ViewAll.Url).replace(/{MoreClass}/g, "internal-link view-group")).replace(/{NameClass}/g, " no-children last");
        }
        else {
            var moreCount = groupsObj.MoreTotal + (groupsArray.length - t1GroupCount);
            var moreText = context.parameter.viewMoreText.replace(/{MoreText}/g, moreCount);
            t1Groups += context.parameter.t1GroupHtmlBlock.replace(/{Groups}/g, "").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, moreText).replace(/{Url}/g, groupsObj.ViewAll.Url).replace(/{MoreClass}/g, "internal-link view-group")).replace(/{NameClass}/g, " no-children last");
        }
    }

    if (t1Groups != "") {
        columnsMarkup += context.parameter.columnWrapperHtmlBlock.replace(/{ColumnId}/g, columnsCount).replace(/{T1GroupsData}/g, t1Groups);
    }

    listContent = listContent.replace(/{Columns}/g, columnsMarkup);
    listContent = listContent.replace(/{ColumnsCount}/g, columnsCount > 3 ? 3 : columnsCount);

    return listContent;
}

function Core_GroupNavigation_RenderGroups(context, groupsObj) {
    var t1Groups = "";
    var columnsMarkup = "";
    var columnsCount = 0;
    var columnGroups = 0;
    var groupsArray = groupsObj.Groups;

    var listContent = context.parameter.groupNavigationListHtmlBlock;

    columnsCount = 1;
    var itemCount = 0;
    
    for (var i = 0; i < groupsArray.length; i++) {
        itemCount++;
        var groupHtml = context.parameter.t1GroupHtmlBlock.replace(/{Groups}/g, "").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, groupsArray[i].Name).replace(/{Url}/g, groupsArray[i].Url).replace(/{MoreClass}/g, "internal-link view-group"));

        if (itemCount < 10 && (i < (groupsArray.length - 1) || groupsObj.IsMore == true))
            groupHtml = groupHtml.replace(/{NameClass}/g, " no-children");
        else
            groupHtml = groupHtml.replace(/{NameClass}/g, " no-children last");

        t1Groups += groupHtml;
        
        if (itemCount >= 10) {
            columnsMarkup += context.parameter.columnWrapperHtmlBlock.replace(/{ColumnId}/g, columnsCount).replace(/{T1GroupsData}/g, t1Groups);
            t1Groups = "";
            columnsCount++;
            itemCount = 0;
        }
    }

    if (groupsObj.IsMore == true) {
        t1Groups += context.parameter.t1GroupHtmlBlock.replace(/{Groups}/g, "").replace(/{Name}/g, context.parameter.linkHtmlBlock.replace(/{Name}/g, groupsObj.ViewAll.Text).replace(/{Url}/g, groupsObj.ViewAll.Url).replace(/{MoreClass}/g, "internal-link view-group")).replace(/{NameClass}/g, " no-children last");
    }

    if (t1Groups != "") {
        columnsMarkup += context.parameter.columnWrapperHtmlBlock.replace(/{ColumnId}/g, columnsCount).replace(/{T1GroupsData}/g, t1Groups);
    }

    listContent = listContent.replace(/{Columns}/g, columnsMarkup);
    listContent = listContent.replace(/{ColumnsCount}/g, columnsCount > 3 ? 3 : columnsCount);

    return listContent;
}

function Core_GroupNavigation_LoadFromCache(context, parentGroupId) {
    if (context.parameter.cache) {
        if (context.parameter.cache[parentGroupId]) return context.parameter.cache[parentGroupId];
    }
    return null;
}

function Core_GroupNavigation_AddToCache(context, parentGroupId, content) {
    if (!context.parameter.cache) {
        context.parameter.cache = {};
    }
    context.parameter.cache[parentGroupId] = content;
}

function Core_GroupNavigation_MouseOverPopup(context) {
    if (context.parameter.hideTimer) {
        clearTimeout(context.parameter.hideTimer);
    }
}

function Core_GroupNavigation_MouseOutPopup(context) {
    if (context.parameter.hideTimer) {
        clearTimeout(context.parameter.hideTimer);
    }
    context.parameter.hideTimer = setTimeout(function() { Core_GroupNavigation_HidePopup(context); }, 150);
}

function Core_GroupNavigation_HidePopup(context) {
    if (context.parameter.hideTimer) {
        clearTimeout(context.parameter.hideTimer);
    }
    eval(context.parameter.popupMenuId).Hide();
    $($(context.parameter.currentMenuElement).parent().get(0)).removeClass("active");
    context.parameter.currentGroupId = 0;
    context.parameter.currentMenuElement = null;
}

function Core_GroupNavigation_SetMenuItems(container, isParent, listId) {
    $('#' + listId).html("");

    var totalItems = $('.navigation-item.entry', $(container)).length;
    var itemCount = 0;

    $('.navigation-item.entry', $(container)).css("display", "none");

    var totalWidth = $(container).width() - $('#MoreLink', $(container)).outerWidth();

    if (isParent)
        totalWidth = totalWidth - 60;
    else {
        var leading = $(container + ' .leading-child');
        if (leading)
            totalWidth = totalWidth - leading.outerWidth(true);

        totalWidth = totalWidth - 100;
    }
    var currentWidth = 0;

    var hasMore = false;

    $(container + ' .entry').each(function() {
        itemCount++;
        var thisWidth = $(this).outerWidth(true);

        if ((currentWidth + thisWidth < totalWidth) && hasMore == false) {
            $(this).show();

            currentWidth = currentWidth + thisWidth;
        }
        else {
            hasMore = true;
            var e = $(this).clone();
            if (itemCount == totalItems)
                e.addClass("last");
            $(".internal-link", e).removeAttr("onmouseover").removeAttr("onmouseout");
            $('#' + listId).append(e.show());
        }
    });

    if (hasMore) {
        $('#MoreLink', $(container)).show();
    }
    else
        $('#MoreLink', $(container)).hide();
}