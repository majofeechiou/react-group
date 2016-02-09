'use strict';

/*
	這些系列參考了：
	"homepage": "http://github.com/react-component/checkbox",
	"homepage": "http://github.com/react-component/radio",
*/

import React from 'react';
import RadioBase from './RadioBase';

export default class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			disabled: false,
			checked: null,
			outputresult: props.outputresult || {}
		};
	}

	handleChange(e) {
		let _scope = this;
		(this.props.inputoption).filter(function(json){
			let _str_selectkey = _scope.props.selectkey[0];

			if( json[_str_selectkey]===e.target.value ){
				console.log( 'json :: ', json );
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
	toggle() {
		this.setState({
			disabled: !this.state.disabled
		});
	}
	render() {
		return <div style={{margin: 20}}>
		{JSON.stringify(this.state.outputresult)}<br />
		{JSON.stringify(this.props.selectkey[0])}<br />
			<div>
				<p>
					<label>
						<RadioBase value="a"
							checked = {this.state.outputresult[this.props.selectkey[0]] === 'a'}
							onChange={this.handleChange}
							disabled={this.state.disabled}/>
					&nbsp; rc-radio
					</label>
					&nbsp;&nbsp;
					<label>
						<RadioBase value="b"
							checked = {this.state.outputresult[this.props.selectkey[0]] === 'b'}
							onChange={this.handleChange}
							disabled={this.state.disabled}/>
					&nbsp; rc-radio
					</label>
					&nbsp;&nbsp;
				</p>
				<p>
					<label>
						<input type='radio' name="radio"
							defaultChecked={true}
							disabled={this.state.disabled}/>
					&nbsp; native
					</label>
					&nbsp;&nbsp;
					<label>
						<input type='radio' name="radio"
							disabled={this.state.disabled}/>
					&nbsp; native
					</label>
					&nbsp;&nbsp;
				</p>
			</div>

			<button onClick={this.toggle}>toggle disabled</button>

		</div>;
	}
}

	RadioGroup.propTypes = {
        inputoption: React.PropTypes.array,
        selectkey: React.PropTypes.array,
        outputresult: React.PropTypes.object
    },
    RadioGroup.defaultProps = {
    	inputoption: [],
    	selectkey: [],
    	outputresult: {}
    };