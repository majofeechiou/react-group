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
let _data_checked;

let _ary_showkey = ['text','uuid'];

function handleChange( bln_change, json_return ){
	if( bln_change===true ){
		_data_checked = json_return.result;
		render();
	}
}

function render(){
	ReactDOM.render(
		<RadioGroup 
			onChange={handleChange}
			outputFormat="array"
			name="name1"
			selectKey={_ary_selectkey}
			inputoption={_sary_options}
			outputResult={_data_checked}
			showKey={_ary_showkey}
			between="~"
			display={Setting.DISPLAY_INBLOCK}
			padding={Setting.PADDING_TINY}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_TOP}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
		document.getElementById("content1")
	);
};

render();

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name2"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_TOP}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content2")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name3"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_BOTTOM}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content3")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name4"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_BOTTOM}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content4")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name5"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_LEFT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content5")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name6"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_LEFT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content6")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name7"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_RIGHT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content7")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name8"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_RIGHT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("content8")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_1"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_TOP}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct1")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_2"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_TOP}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct2")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_3"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_BOTTOM}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct3")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_4"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_BOTTOM}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct4")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_5"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_LEFT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct5")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_6"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_LEFT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct6")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_7"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_TINY}
// 		listPosition={Setting.LIST_POSITION_OUTER}
// 		iconPosition={Setting.ICON_POSTION_RIGHT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct7")
// );

// ReactDOM.render(
// 	<RadioGroup 
// 		name="name_8"
// 		selectKey={_ary_selectkey}
// 		inputoption={_sary_options}
// 		outputResult={_data_checked}
// 		showKey={_ary_showkey}
// 		between="~"
// 		display={Setting.DISPLAY_INBLOCK}
// 		padding={Setting.PADDING_BASE}
// 		listPosition={Setting.LIST_POSITION_INNER}
// 		iconPosition={Setting.ICON_POSTION_RIGHT}
// 		iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]} />, 
// 	document.getElementById("ct8")
// );

// iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
// iconPosition={Setting.ICON_POSTION_TOP}
// display={Setting.DISPLAY_BLOCK}
// padding={Setting.PADDING_BASE}
// listStyle={Setting.LIST_STYLE_CIRCLE}
// listPosition={Setting.LIST_POSITION_INNER}