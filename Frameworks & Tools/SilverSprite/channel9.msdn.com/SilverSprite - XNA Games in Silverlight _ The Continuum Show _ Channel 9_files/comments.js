$(function () {
	var commentFormName = '.commentform';
	var jumpToName = 'videoJumpTo';

	var getSlug = function ($el) {
		var url = $el.attr("href");
		var index = url.indexOf("#");
		var commentSlug;

		if (index > 0) {
			commentSlug = url.substring(index + 1);
		}

		return commentSlug;
	}

	// if the user is editing a comment, scroll down to the form
	if ((typeof $.scrollTo !== "undefined") && (location.href.indexOf("/Edit") > 0))
		$(window).scrollTo(commentFormName);

	$(".post .post-header .attachments a").bind("click", function () {
		return confirm("Files available on Channel9.msdn.com have been contributed by both Microsoft and Channel9/msdn users. Files have not been tested or screened in any manner (e.g., for viruses) by Microsoft. Microsoft makes no claims and implies no warranties regarding title or non-infringement of the content.");
	});

	// When a user clicks the reply link, An auto-
	// generated link should appear in the comment box.
	$(".post .reply.button").bind("click", function () {
		var $this = $(this);
		var url = $this.attr("href");
		var textToInclude = $this.attr("title");
		tinyMCE.activeEditor.execCommand("mceInsertContent", false, "\@<a href=\"" + url + "\">" + textToInclude + "</a>:", true);

		// if the user is replying to a comment, scroll down to the form
		if (typeof $.scrollTo !== "undefined")
			$(window).scrollTo(commentFormName);

		return false;
	});

	// When a user clicks the quote link
	// contents of current comment should be inserted into the comment input box
	$(".post .quote.button").bind("click", function () {
		var snipText = '*snip*';

		var a = [];
		var $this = $(this);

		var commentSlug = getSlug($this);
		if (!commentSlug) {
			return true;
		}
		var $thePost = $('#' + commentSlug);

		var $thePermalink = $thePost.find('.post-header .permalink').wrap('<div>');
		var thePermalinkStr = $thePermalink.parent().html();
		$thePermalink.unwrap();

		var $author = $thePost.siblings('.author');
		var theNameStr = $author.find('.name').html();
		var theNameHref = $author.find('a').attr('href');

		var $theContent = $thePost.find('.post-content').clone();
		$theContent.find('blockquote').replaceWith(snipText);
		$theContent.find('p:empty').remove();
		var theContent = $theContent.html();

		if (theContent && theContent.length > 0) {
			a.push('[quote]');

			if (thePermalinkStr && thePermalinkStr.length > 0) {
				a.push('<p>', thePermalinkStr);

				if ((theNameStr && theNameStr.length > 0) && (theNameHref && theNameHref.length > 0)) {
					a.push(
						', <a href="', theNameHref, '">',
							theNameStr,
						'</a> wrote'
					);
				}
				a.push('</p>');
			}
			a.push(
				theContent,
				'[/quote]'
			);

			tinyMCE.activeEditor.execCommand("mceInsertContent", false, a.join(''), true);

			// if the user is replying to a comment, scroll down to the form
			if (typeof $.scrollTo !== "undefined")
				$(window).scrollTo(commentFormName);
		}

		return false;
	});

	// When a user clicks on a Mark as Spam link,
	// send an Ajax call to the route and update the UI.
	$("form.spam input.submit").bind("click", function () {
		var form = $(this).parents("form");
		var route = $(form).attr("action");
		var d = $(form).serialize();
		$.ajax({
			type: "POST",
			url: route,
			data: d,
			dataType: "json",
			success: function (response) {
				$(form).before("<span class=\"markedSpam\">marked as spam</span>");
				$(form).remove();
			},
			error: function (response) {
				//alert("Error\nRoute: " + this.url);
				//alert("Response:\n" + response.responseText);
			}
		});

		return false;
	});

	$(commentFormName).lald("submit", function (event) {
		try {
			var theTime = ch9.functions.getVideoPosition();
			if (theTime) {
				$(event.target).attr('action', $.setURLParam(jumpToName, theTime));
			}
		} catch (e) { }
	});
});