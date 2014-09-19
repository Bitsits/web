jQuery(document).ready(function() {
	$("#twitter li:eq(0)").attr('class', 'first');
	$("#twitter li:eq(1)").attr('class', 'second');
	$("#twitter li:eq(2)").attr('class', 'third');
});

jQuery(document).ready(function(){
	$("#article-nav li").click(function(){
	    $("#article-nav li").removeClass("current").addClass("");
	    $(this).addClass("current");
	});
});