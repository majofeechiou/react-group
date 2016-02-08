'use strict';

import React from 'react';
import classnames from 'classnames';

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
		const prefixCls = props.prefixCls;
		let checked = this.state.checked;
		if (typeof checked === 'boolean') {
			checked = checked ? 1 : 0;
		}
		const className = classnames({
			[props.className]: !!props.className,
			[prefixCls]: 1,
			[`${prefixCls}-checked`]: checked,
			[`${prefixCls}-checked-${checked}`]: !!checked,
			[`${prefixCls}-disabled`]: props.disabled,
		});
		return (
			<span className={className}
				style={props.style}>
				<span className={`${prefixCls}-inner`}></span>
				<input {...props}
					defaultChecked={!!props.defaultChecked}
					className={`${prefixCls}-input`}
					checked={!!checked}
					onChange={this.handleChange}
				/>
				--{JSON.stringify(!!checked)}--
			</span>
		);
	}
}

ItemBase.propTypes = {
	prefixCls: React.PropTypes.string,
	style: React.PropTypes.object,
	type: React.PropTypes.string,
	className: React.PropTypes.string,
	defaultChecked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
	checked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
	onChange: React.PropTypes.func,
};

ItemBase.defaultProps = {
	prefixCls: 'rc-checkbox', // 這東西的使用方法可再想想
	style: {},
	type: 'checkbox',
	className: '',
	defaultChecked: 0,
	onChange: () => {
	},
};
