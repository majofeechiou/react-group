'use strict';

import React from 'react';
import ItemBase from './ItemBase';

var RadioBase = React.createClass({
	getDefaultProps() {
		return {
			prefixCls: 'pkg-radio',
			type: 'radio'
		};
	},

	render() {
		return <ItemBase {...this.props} ref="checkbox"/>;
	}
});

module.exports = RadioBase;
