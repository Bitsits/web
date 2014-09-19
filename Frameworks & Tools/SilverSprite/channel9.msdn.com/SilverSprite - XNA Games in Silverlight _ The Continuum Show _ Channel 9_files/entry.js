ch9.data.videoInfo = {
	getPlayer$Holder: function () {
		return $("#video");
	},

	getVideoHref: function () {
		var silverlightVideo = this.getPlayer$Holder().find("ul.silverlight a:first").attr("href");
		if (silverlightVideo === undefined || silverlightVideo == '')
			return this.getPlayer$Holder().find("a:first").attr("href");

		return silverlightVideo;
	},

	getHtml5Preference: function () {
		return this.getPlayer$Holder().find("a:first").hasClass("html5");
	},

	getHtml5Videos: function () {
		var html5videos = new Array();
		this.getPlayer$Holder().find("ul.html5 a").each(function (index) {
			html5videos[index] = { url: $(this).attr("href"), type: $(this).attr("rel") };
		});
		return html5videos;
	},

	getThumbUrl: function () {
		return this.getPlayer$Holder().find("a:first").css("background-image");
	}
};

// When a user clicks on a video play the video.
ch9.data.videoInfo.getPlayer$Holder().find("a:first").lald("click", function () {
    return ch9.functions.playvideo();
});

$(function () {
    $(".admin .status").bind("click", function () {
        $(".admin .content-status").show();
        return false;
    });

    // hide it if they click the close icon
    $(".admin .content-status").find("a.close").click(function () {
        $(this).parent().hide();
        return false;
    });
});