$(document).ready(function () {
	$('#comment_form input, #comment_form textarea').each(function () {
		if ($(this).val() == '') {
			$(this).val($(this).attr('defaultvalue'));
		}
	}).focus(function () {
		$(this).removeClass('inputerror');
		if ($(this).val() == $(this).attr('defaultvalue')) {
			$(this).val('');
		}
	}).blur(function () {
		if ($(this).val() == '') {
			$(this).val($(this).attr('defaultvalue'));
		}
	});
	$('#comment_form').submit(function () {
		$('#submiterror').remove();
		var errors = 0;
		$(this).find('textarea, input').each(function () {
			if ($(this).val() == $(this).attr('defaultvalue')) {
				$(this).val('');
			}
			if ($(this).hasClass('required') && $(this).val() == '') {
				$(this).addClass('inputerror');
				errors++;
			}
		});

		if (errors > 0) {
			$(this).find('textarea, input').each(function () {
				if ($(this).val() == '') {
					$(this).val($(this).attr('defaultvalue'));
				}
			});
			$(this).prepend('<div id="submiterror">Please complete the highlighted fields.</div>');
			return false;
		}
		return true;
	});
});
