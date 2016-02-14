'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from './js/RadioGroup';
import Setting from './js/Setting';

let _sary_options = [{
	uuid: 'a',
	text: 'A'
},{
	uuid: 'b',
	text: 'B'
},{
	uuid: 'ooxx-001',
	text: 'text-001'
},{
	uuid: 'ooxx-002',
	text: 'text-002'
},{
	uuid: 'ooxx-003',
	text: 'text-003'
},{
	uuid: 'ooxx-004',
	text: 'text-004'
},{
	uuid: 'ooxx-005',
	text: 'text-005'
}];

let _ary_selectkey = ['uuid'];
let _json_checked = {
	uuid: 'ooxx-002'
};

let _ary_showkey = ['text','uuid'];

ReactDOM.render(
	<RadioGroup 
		name="name1"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_TOP}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content1")
);

ReactDOM.render(
	<RadioGroup 
		name="name2"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_TOP}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content2")
);

ReactDOM.render(
	<RadioGroup 
		name="name3"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_BOTTOM}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content3")
);

ReactDOM.render(
	<RadioGroup 
		name="name4"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_BOTTOM}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content4")
);

ReactDOM.render(
	<RadioGroup 
		name="name5"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_LEFT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content5")
);

ReactDOM.render(
	<RadioGroup 
		name="name6"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_LEFT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content6")
);

ReactDOM.render(
	<RadioGroup 
		name="name7"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_RIGHT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content7")
);

ReactDOM.render(
	<RadioGroup 
		name="name8"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_RIGHT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("content8")
);

ReactDOM.render(
	<RadioGroup 
		name="name_1"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_TOP}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct1")
);

ReactDOM.render(
	<RadioGroup 
		name="name_2"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_TOP}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct2")
);

ReactDOM.render(
	<RadioGroup 
		name="name_3"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_BOTTOM}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct3")
);

ReactDOM.render(
	<RadioGroup 
		name="name_4"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_BOTTOM}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct4")
);

ReactDOM.render(
	<RadioGroup 
		name="name_5"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_LEFT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct5")
);

ReactDOM.render(
	<RadioGroup 
		name="name_6"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_LEFT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct6")
);

ReactDOM.render(
	<RadioGroup 
		name="name_7"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		listposition={Setting.LIST_POSITION_OUTER}
		iconposition={Setting.ICON_POSTION_RIGHT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct7")
);

ReactDOM.render(
	<RadioGroup 
		name="name_8"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		between="~"
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		listposition={Setting.LIST_POSITION_INNER}
		iconposition={Setting.ICON_POSTION_RIGHT}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
	document.getElementById("ct8")
);

// iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
// iconposition={Setting.ICON_POSTION_TOP}
// display={Setting.DISPLAY_BLOCK}
// padding={Setting.PADDING_BASE}
// liststyle={Setting.LIST_STYLE_CIRCLE}
// listposition={Setting.LIST_POSITION_INNER}