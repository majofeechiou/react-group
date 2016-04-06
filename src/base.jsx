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
	uuid: 'c',
	text: 'C'
},{
	uuid: 'd',
	text: 'D'
},{
	uuid: 'e',
	text: 'E'
},{
	uuid: 'f',
	text: 'F'
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
},{
	uuid: 'ooxx-006',
	text: 'text-006'
},{
	uuid: 'ooxx-007',
	text: 'text-007'
},{
	uuid: 'ooxx-008',
	text: 'text-008'
},{
	uuid: 'ooxx-009',
	text: 'text-009'
},{
	uuid: 'ooxx-010',
	text: 'text-010'
}];

let _ary_selectkey = ['uuid'];
let _data_checked;
// let _data_checked = [{
// 	uuid: 'd',
// 	text: 'D'
// }];

let _ary_showkey = ['text','uuid'];

let _bln_iconback_01 = false;
let _bln_iconback_02 = true;

// let _str_style = Setting.STYLE_NAME_RESURGENCE;
// let _str_style = Setting.STYLE_NAME_SPRING;
// let _str_style = Setting.STYLE_NAME_WINE;
// let _str_style = Setting.STYLE_NAME_BLUESKY;
// let _str_style = Setting.STYLE_NAME_LOVELY;
// let _str_style = Setting.STYLE_NAME_LUXURY;
// let _str_style = Setting.STYLE_NAME_FANTASY;
// let _str_style = Setting.STYLE_NAME_RIGID;
let _str_style = Setting.STYLE_NAME_WATERSIDE;

// let _str_composition = Setting.COMPOSITION_HALF;
// let _str_composition = Setting.COMPOSITION_THIRD;
// let _str_composition = Setting.COMPOSITION_QUARTER;
// let _str_composition = Setting.COMPOSITION_FIFTH;
// let _str_composition = Setting.COMPOSITION_SIXTH;
// let _str_composition = Setting.COMPOSITION_EIGHTH;
// let _str_composition = Setting.COMPOSITION_TENTH;
// let _str_composition = Setting.COMPOSITION_TWELFTH;

// let _str_composition = Setting.COMPOSITION_TINYEM;
// let _str_composition = Setting.COMPOSITION_SMALLEM;
// let _str_composition = Setting.COMPOSITION_LITTLEEM;
// let _str_composition = Setting.COMPOSITION_BASEEM;
// let _str_composition = Setting.COMPOSITION_MIDDLEEM;
// let _str_composition = Setting.COMPOSITION_BIGEM;
// let _str_composition = Setting.COMPOSITION_LARGEEM;

// let _str_composition = Setting.COMPOSITION_TINYPERCENT;
// let _str_composition = Setting.COMPOSITION_SMALLPERCENT;
// let _str_composition = Setting.COMPOSITION_LITTLEPERCENT;
// let _str_composition = Setting.COMPOSITION_BASEPERCENT;
// let _str_composition = Setting.COMPOSITION_MIDDLEPERCENT;
// let _str_composition = Setting.COMPOSITION_BIGPERCENT;
// let _str_composition = Setting.COMPOSITION_LARGEPERCENT;

let _str_composition = Setting.COMPOSITION_TINY;
// let _str_composition = Setting.COMPOSITION_SMALL;
// let _str_composition = Setting.COMPOSITION_LITTLE;
// let _str_composition = Setting.COMPOSITION_BASE;
// let _str_composition = Setting.COMPOSITION_MIDDLE;
// let _str_composition = Setting.COMPOSITION_BIG;
// let _str_composition = Setting.COMPOSITION_LARGE;

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_LEFT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content1")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_LEFT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content2")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_TOP}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content3")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_TOP}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content4")
	);
	
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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_LEFT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content5")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_LEFT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content6")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_TOP}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content7")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_TOP}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_01}
			styleList={true} />, 
		document.getElementById("content8")
	);

	// ==================


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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_RIGHT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct1")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_RIGHT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct2")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_BOTTOM}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct3")
	);

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
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_BOTTOM}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct4")
	);
	
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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_RIGHT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct5")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_RIGHT}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct6")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_OUTER}
			iconPosition={Setting.ICON_POSTION_BOTTOM}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct7")
	);

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
			display={Setting.DISPLAY_BLOCK}
			padding={Setting.PADDING_BASE}
			fillet={Setting.FILLET_BASE}
			listStyle={Setting.LIST_STYLE_CIRCLE}
			listPosition={Setting.LIST_POSITION_INNER}
			iconPosition={Setting.ICON_POSTION_BOTTOM}
			iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
			styleName={_str_style}
			composition={_str_composition}
			styleBorder={true}
			styleIcon={true}
			styleIconBack={_bln_iconback_02}
			styleList={true} />, 
		document.getElementById("ct8")
	);

};

render();

// iconShow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
// iconPosition={Setting.ICON_POSTION_TOP}
// display={Setting.DISPLAY_BLOCK}
// padding={Setting.PADDING_BASE}
// listStyle={Setting.LIST_STYLE_CIRCLE}
// listPosition={Setting.LIST_POSITION_INNER}