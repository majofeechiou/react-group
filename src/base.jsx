'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from './RadioGroup';

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

let _ary_showkey = ['text'];

ReactDOM.render(
	<RadioGroup 
		inputoption={_sary_options}
		selectkey={_ary_selectkey}
		outputresult={_json_checked}
		showkey={_ary_showkey} />, 
	document.getElementById("content")
);