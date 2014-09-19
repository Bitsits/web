$(function () {
	var theframes = document.getElementsByTagName('iframe');
	for (var i = 0; i < theframes.length; i++) {
		theframes[i].setAttribute('allowTransparency', 'true');
	}
});

$(function () {
    var text = encodeURI($('title').html());
    var lang = 'en';
    var url = encodeURI($('li.sharelinks div.retweet').attr('data-tweet_url'));
    var related = $('li.sharelinks div.retweet').attr('data-tweet_related');
    var count = 'horizontal';
    var via = 'ch9';
    var unique = new Date().getTime();

    var src = [
		'http://platform.twitter.com/widgets/tweet_button.html?',
		'_=', unique,
		'&count=', count,
		'&lang=', lang,
		'&text=', text,
		'&url=', url,
		'&via=', via,
        '&related=', related
	];



    $('li.sharelinks div.retweet').replaceWith('<iframe scrolling="no" height="20" frameborder="0" width="110" src="' + src.join('') + '" allowtransparency="true" class="twitter-share-button twitter-count-horizontal" tabindex="0" style="width: 110px; height: 20px;" title="Twitter For Websites: Tweet Button"></iframe>');
});

$(function () {
	var $fb_share = $('li.sharelinks a.fb_share');
	var data_share_url = $fb_share.attr('data-share_url');

	if(data_share_url && (data_share_url.length > 0)){
		$fb_share.attr({
			'share_url': data_share_url,
			'type': 'button_count',
			'name': 'fb_share' 
		});

		$.getScript("http://static.ak.fbcdn.net/connect.php/js/FB.Loader", function () {
			$.getScript("http://static.ak.fbcdn.net/connect.php/js/FB.Share");
		});
	}else{
		$fb_share.remove();
	}
});