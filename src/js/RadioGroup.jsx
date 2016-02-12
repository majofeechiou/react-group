'use strict';

/*
	這些系列參考了：
	"homepage": "http://github.com/react-component/checkbox",
	"homepage": "http://github.com/react-component/radio",
*/

import React from 'react';
import ItemBase from './ItemBase';
import ClassNames from 'classnames';

// const prefixCls = props.prefixCls;
// className={`${prefixCls}-input`}
// const className = ClassNames({
// 	[props.className]: !!props.className
// });

export default class RadioGroup extends React.Component {
	constructor(props) {
		console.log( 'props :: ', props );
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
		const CPT_CLASSNAME = 'pkg-checked';
		return <div>
			{JSON.stringify(this.state.outputresult)}<br />
			{JSON.stringify(this.props.selectkey[0])}<br />
			<ul className={CPT_CLASSNAME}>
				{this.props.inputoption.map((json_item)=>{
					return (
						<li key={this.props.name+'-'+json_item[this.props.selectkey[0]]+'-'+Math.floor(Math.random()*1000)}
							className={(this.state.outputresult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]])? 'pkg-checked-option_checked' : 'pkg-checked-option'}>
							<label>
								<ItemBase value={json_item[this.props.selectkey[0]]}
									checked={this.state.outputresult[this.props.selectkey[0]] === json_item[this.props.selectkey[0]]}
									onChange={this.handleChange}
									disabled={this.state.disabled}
									type={ (this.props.type==='checkbox')? 'checkbox' : 'radio' }
									name={this.props.name} />
								{json_item[this.props.showkey[0]]}
							</label>
						</li> 
					);
				})}
			</ul>

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
    outputresult: React.PropTypes.object
},
RadioGroup.defaultProps = {
	type: 'radio',
	classname: '',
	inputoption: [],
	selectkey: [],
	showkey: [],
	outputresult: {}
};