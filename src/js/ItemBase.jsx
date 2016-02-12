'use strict';

import React from 'react';

export default class ItemBase extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		let _bln_checked = false;
		if ('checked' in props) {
			_bln_checked = props.checked;
		} else {
			_bln_checked = props.defaultChecked;
		}
		this.state = {checked:_bln_checked};
	}

	componentWillReceiveProps(json_nextProps) {
		if ('checked' in json_nextProps) {
			this.setState({
				checked: json_nextProps.checked,
			});
		}
	}

	handleChange(e) {
		const checked = e.target.checked;
		if (!('checked' in this.props)) {
			this.setState({
				checked: checked ? 1 : 0,
			});
		}
		this.props.onChange(e, this.state.checked);
	}

	render() {
		const props = this.props;
		let checked = this.state.checked;
		if (typeof checked === 'boolean') {
			checked = checked ? 1 : 0;
		}
		return (
			<span>
				<span></span>
				<input {...props}
					defaultChecked={!!props.defaultChecked}
					checked={!!checked}
					onChange={this.handleChange}
				/>
				--{JSON.stringify(!!checked)}--
			</span>
		);
	}
}

ItemBase.propTypes = {
	style: React.PropTypes.object,
	defaultChecked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
	checked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
	onChange: React.PropTypes.func,
};

ItemBase.defaultProps = {
	style: {},
	defaultChecked: 0,
	onChange: () => {
	},
};
