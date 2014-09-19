tinymce.PluginManager.load('codeblock', '/scripts/tiny_mce/plugins/codeblock/editor_plugin.js');
tinymce.ThemeManager.load('c9', '/scripts/tiny_mce/themes/c9/editor_template.js');

tinyMCE.init({
	editor_selector: "html",
	mode: "textareas",
	theme:"c9",
	content_css: "/styles/global.css",
	popup_css: "/scripts/tiny_mce/themes/c9/skins/default/dialog.css",
	convert_urls: false,
	relative_urls: false,
	remove_script_host: false,
	inline_styles: false,
	remove_linebreaks: false,
	convert_newlines_to_brs: true,  
	dialog_type: "modal",
	plugins: "searchreplace,paste,inlinepopups",
	theme_advanced_resizing: false,
	theme_advanced_buttons1: "cut,copy,paste,|,undo,redo,|,image,|,link,unlink,charmap,codeblock,|,bold,italic,|,numlist,bullist,formatselect",
	theme_advanced_buttons2: "",
	theme_advanced_buttons3: "",
	theme_advanced_blockformats: "p,pre"
});

tinyMCE.init({
	editor_selector: "non-html",
	mode: "textareas",
	content_css: "/styles/global.css",
	popup_css: "/scripts/tiny_mce/themes/c9/skins/default/dialog.css",
	convert_urls: false,
	relative_urls: false,
	dialog_type: "modal",
    convert_newlines_to_brs : true,
	plugins: "searchreplace,paste,inlinepopups",
	theme: "c9",
	theme_advanced_resizing: false,
	theme_advanced_buttons1: "cut,copy,paste,pastetext,pasteword,selectall,|,search,replace,|,undo,redo",
	theme_advanced_buttons2: "",
	theme_advanced_buttons3: ""
});

tinyMCE.init({
	editor_selector: "tmcecomment",
	mode: "textareas",
	theme: "c9",
	content_css: "/styles/global.css",
	popup_css: "/scripts/tiny_mce/themes/c9/skins/default/dialog.css",
	convert_urls: false,
	relative_urls: false,
	remove_script_host: false,
	inline_styles: false,
	remove_linebreaks: false,
	convert_newlines_to_brs: true,
	dialog_type: "modal",
	plugins: "searchreplace,paste,inlinepopups,codeblock",
	theme_advanced_buttons1: "cut,copy,paste,|,undo,redo,|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,code",
	theme_advanced_buttons2: "",
	theme_advanced_buttons3: "",
	theme_advanced_resizing: false,
	theme_advanced_resizing_min_height: 140,
	theme_advanced_blockformats: "p,pre",
	codeblock_colorizeUrl: "/services/colorcode",
	codeblock_langs: [
        { name: "Unspecified", value: "" },
        { name: "C#", value: "csharp" },
        { name: "VB.NET", value: "vb" },
        { name: "HTML", value: "html" },
        { name: "JavaScript", value: "js" },
        { name: "SQL", value: "sql" },
        { name: "XML", value: "xml" },
        { name: "C++", value: "cpp" },
        { name: "CSS", value: "css" },
        { name: "PHP", value: "php" },
        { name: "PowerShell", value: "psh" }
    ],
	setup: function (ed) {
		ed.onExecCommand.add(function (ed, cmd, ui, val) {
			try{
				if (cmd === 'mceInsertContent') {
					//in FF, blockquotes get inserted into p tags, which is a no-no
					if (ed.getContent().indexOf('<p>\n<blockquote>') === 0) {
						//so re-set the content, plus an extra p tag + a span to set the caret
						ed.setContent(val + '<p><span id="tinyMCE_temp_remove_me"></span></p>');
						//these two lines remove the extra span and leave the caret in the right spot 
						ed.selection.select(ed.dom.select('span#tinyMCE_temp_remove_me')[0]);
						ed.dom.remove(ed.dom.select('span#tinyMCE_temp_remove_me')[0]);
					}
				}
			}catch(e){/*well, we tried*/}
		});
	}
});

tinyMCE.init({
	editor_selector: "tmceforum",
	mode: "textareas",
	theme: "c9",
	content_css: "/styles/global.css",
	popup_css: "/scripts/tiny_mce/themes/c9/skins/default/dialog.css",
	convert_urls: false,
	relative_urls: false,
	remove_script_host: false,
	inline_styles: false,
	remove_linebreaks: false,
	convert_newlines_to_brs: true,
	dialog_type: "modal",
	plugins: "searchreplace,paste,inlinepopups,codeblock",
	theme_advanced_resizing: false,
	theme_advanced_buttons1: "cut,copy,paste,|,undo,redo,|,image,video,|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,code",
	theme_advanced_buttons2: "",
	theme_advanced_buttons3: "",
	theme_advanced_blockformats: "p,pre",
	codeblock_colorizeUrl: "/services/colorcode",
	codeblock_langs: [
        { name: "Unspecified", value: "" },
        { name: "C#", value: "csharp" },
        { name: "VB.NET", value: "vb" },
        { name: "HTML", value: "html" },
        { name: "JavaScript", value: "js" },
        { name: "SQL", value: "sql" },
        { name: "XML", value: "xml" },
        { name: "C++", value: "cpp" },
        { name: "CSS", value: "css" },
        { name: "PHP", value: "php" },
        { name: "PowerShell", value: "psh" }
    ]
});