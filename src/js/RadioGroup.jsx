'use strict';

/*
	這些系列參考了：
	"homepage": "http://github.com/react-component/checkbox",
	"homepage": "http://github.com/react-component/radio",
*/

import React from 'react';
import ItemBase from './ItemBase';
import ClassNames from 'classnames';
import Setting from './Setting';
import CheckedUI from './CheckedUI';

export default class RadioGroup extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleDisabled = this.toggleDisabled.bind(this);
		this.state = {
			disabled: false,
			checked: null,
			outputresult: props.outputresult || {}
		};
	}

	handleChange(e) {
		let _scope = this;
		(this.props.inputoption).find(function(json){
			let _str_selectkey = _scope.props.selectkey[0];

			if( json[_str_selectkey]===e.target.value ){
				_scope.setState({
					r: e.target.value,
					outputresult: json 
				});
				return false;
			}

			// let _json_output = {};
			// _json_output[_str_selectkey] = null;
			// _scope.setState({
			// 	r: e.target.value,
			// 	outputresult: _json_output 
			// });
		});
	}
	toggleDisabled() {
		this.setState({
			disabled: !this.state.disabled
		});
	}
	render() {
		let _str_classname_all = ClassNames({
			[this.props.classname]: !!this.props.classname,
			'pkg-checked': true,
			'pkg-checked_disabled': (this.state.disabled===Setting.DISABLED_TRUE),
			'pkg-list': true,
			[CheckedUI.getDisabled( this.props.display )]: true,
			[CheckedUI.getPadding( this.props.padding )]: true,
			[CheckedUI.getListStyle( this.props.liststyle )]: true,
			[CheckedUI.getIconPosition( this.props.iconposition )]: true
		});
		let _str_classname_inner = ClassNames({
			'pkg-list-option': (this.props.listposition===Setting.LIST_POSITION_INNER),
			'pkg-checked-icon': (this.props.listposition!==Setting.LIST_POSITION_INNER)
		});
		return <div>
			<div className={_str_classname_all}>
				{this.props.inputoption.map((json_item)=>{

					let _str_classname_outer = ClassNames({
						'pkg-checked-option': true,
						'pkg-list-option': (this.props.listposition===Setting.LIST_POSITION_OUTER),
						'pkg-checked-icon': (this.props.listposition!==Setting.LIST_POSITION_OUTER),
						'pkg-checked-option_checked': (this.state.outputresult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]])
					});

					return (
						<label key={this.props.name+'-'+json_item[this.props.selectkey[0]]+'-'+Math.floor(Math.random()*1000)}
							className={_str_classname_outer}>
							<span className={_str_classname_inner}>
								<ItemBase value={json_item[this.props.selectkey[0]]}
									checked={this.state.outputresult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]]}
									onChange={this.handleChange}
									disabled={this.state.disabled}
									type={ (this.props.type==='checkbox')? 'checkbox' : 'radio' }
									name={this.props.name}
									showkey={this.props.showkey}
									item={json_item} />
							</span>
						</label> 
					);
				})}
			</div>

			<button onClick={this.toggleDisabled}>toggle disabled</button>

		</div>;
	}
}

RadioGroup.propTypes = {
	type: React.PropTypes.string,
	classname: React.PropTypes.string,
    inputoption: React.PropTypes.array,
    selectkey: React.PropTypes.array,
    showkey: React.PropTypes.array,
    outputresult: React.PropTypes.object,
    display: React.PropTypes.string,
    liststyle: React.PropTypes.string,
    listposition: React.PropTypes.string,
    iconposition: React.PropTypes.string
},
RadioGroup.defaultProps = {
	type: 'radio',
	classname: '',
	inputoption: [],
	selectkey: [],
	showkey: [],
	outputresult: {},
	display: Setting.DISPLAY_INBLOCK,
    liststyle: '',
    listposition: Setting.LIST_POSITION_INNER,
    iconposition: Setting.ICON_POSTION_LEFT
};