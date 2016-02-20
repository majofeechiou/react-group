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
		let _str_format = 'string' ; 
		if( typeof props.outputFormat === 'string' && (props.outputFormat).match(/^((string)|(json)|(array)|(sarry))$/i)!==null ){
			_str_format = props.outputFormat ;
		}
		this.state = {
			type: (_str_format==='array' || _str_format==='sarry')? 'checkbox' : 'radio' ,
			format: _str_format,
			disabled: false,
			outputResult: props.outputResult || {}
		};
	}

	componentWillReceiveProps(json_next_rops) {
		if ('checked' in json_next_rops) {
			this.setState({
				disabled: json_next_rops.disabled,
				outputResult: json_next_rops.outputResult || {}
			});
		}
	}

	handleChange(e) {
		let _scope = this;
		let _bln_changed = false;
		(this.props.inputoption).find(function(json){
			let _str_selectkey = _scope.props.selectkey[0];

			if( json[_str_selectkey]===e.target.value ){
				let _json_args = {
					outputResult: json 
				};
				_scope.setState(_json_args);

				if( _scope.props.onChange && (_scope.props.onChange instanceof Function===true) ){
					let _json_ouput = {
						value: e.target.value,
						item: json
					};
					_bln_changed = true;
					_scope.props.onChange(_bln_changed, _json_ouput );
				}
				return false;
			}

		});

		if( _bln_changed===false ){
			_scope.props.onChange( _bln_changed, _json_ouput );
		}
	}
	toggleDisabled() {
		this.setState({
			disabled: !this.state.disabled
		});
	}
	render() {
		let _str_classname_all = ClassNames({
			[this.props.className]: !!this.props.className,
			'pkg-checked': true,
			'pkg-checked_disabled': (this.state.disabled===Setting.DISABLED_TRUE),
			'pkg-list': true,
			[CheckedUI.getDisabled( this.props.display )]: true,
			[CheckedUI.getPadding( this.props.padding )]: true,
			[CheckedUI.getListStyle( this.props.listStyle )]: true,
			[CheckedUI.getIconPosition( this.props.iconPosition )]: true,
			[CheckedUI.getIconShow( this.props.iconShow )]: true
		});
		let _str_classname_inner = ClassNames({
			'pkg-list-option': (this.props.listPosition===Setting.LIST_POSITION_INNER),
			'pkg-checked-icon': (this.props.listPosition!==Setting.LIST_POSITION_INNER)
		});
		return <div>
			<div className={_str_classname_all}>
				{this.props.inputoption.map((json_item)=>{

					let _str_classname_outer = ClassNames({
						'pkg-checked-option': true,
						'pkg-list-option': (this.props.listPosition===Setting.LIST_POSITION_OUTER),
						'pkg-checked-icon': (this.props.listPosition!==Setting.LIST_POSITION_OUTER),
						'pkg-checked-option_checked': (this.state.outputResult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]])
					});

					return (
						<label key={this.props.name+'-'+json_item[this.props.selectkey[0]]+Date.now()+'-'+Math.floor(Math.random()*1000)}
							className={_str_classname_outer}>
							<span className={_str_classname_inner}>
								<ItemBase value={json_item[this.props.selectkey[0]]}
									checked={this.state.outputResult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]]}
									onChange={this.handleChange}
									disabled={this.state.disabled}
									type={ (this.props.type==='checkbox')? 'checkbox' : 'radio' }
									name={this.props.name}
									showKey={this.props.showKey}
									between={this.props.between}
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
	onChange: React.PropTypes.func,
	// type: React.PropTypes.string,
	className: React.PropTypes.string,
    inputoption: React.PropTypes.array,
    selectkey: React.PropTypes.array,
    showKey: React.PropTypes.array,
    between: React.PropTypes.string,
    outputFormat: React.PropTypes.string,
    outputResult: React.PropTypes.object,
    display: React.PropTypes.string,
    listStyle: React.PropTypes.string,
    listPosition: React.PropTypes.string,
    iconPosition: React.PropTypes.string,
    iconShow: React.PropTypes.array
},
RadioGroup.defaultProps = {
	// type: 'radio',
	className: '',
	inputoption: [],
	selectkey: [],
	showKey: [],
	between: '',
	outputResult: {},
	display: Setting.DISPLAY_INBLOCK,
    listStyle: '',
    listPosition: Setting.LIST_POSITION_INNER,
    iconPosition: Setting.ICON_POSTION_LEFT,
    iconShow: []
};