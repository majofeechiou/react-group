'use strict';
import Setting from './Setting';

export default class CheckedUI {

	static getDisabled( str_display ){
		let _str_return = '';
		str_display = str_display || Setting.DISPLAY_INBLOCK ;
		switch ( str_display ){
			case Setting.DISPLAY_INBLOCK:
			case Setting.DISPLAY_BLOCK:
				_str_return = 'pkg-checked_display-'+str_display;
				break;
		}
		return _str_return ;
	};

	static getPadding( str_padding ){
		let _str_return = '';
		str_padding = str_padding || Setting.DISPLAY_INBLOCK ;
		switch ( str_padding ){
			case Setting.PADDING_TINY:
			case Setting.PADDING_SMALL:
			case Setting.PADDING_LITTLE:
			case Setting.PADDING_BASE:
			case Setting.PADDING_MIDDLE:
			case Setting.PADDING_BIG:
			case Setting.PADDING_LARGE:
			case Setting.PADDING_HUGE:
				_str_return = 'pkg-checked_padding-'+str_padding;
				break;
		}
		return _str_return ;
	};

	static getIconPosition( str_position ){
		let _str_return = '';
		// str_position = str_position || Setting.ICON_POSTION_LEFT ;
		switch (str_position){
			case Setting.ICON_POSTION_TOP:
			case Setting.ICON_POSTION_BOTTOM:
			case Setting.ICON_POSTION_LEFT:
			case Setting.ICON_POSTION_RIGHT:
			case Setting.ICON_POSTION_NONE:
				_str_return = 'pkg-checked_iconposition-'+str_position;
				break;
		}
		return _str_return;
	};

	static getListStyle( str_style ){
		let _str_return = '';
		switch (str_style){
			case Setting.LIST_STYLE_DISC:
			case Setting.LIST_STYLE_CIRCLE:
			case Setting.LIST_STYLE_DECIMAL:
			case Setting.LIST_STYLE_SQUARE:
			case Setting.LIST_STYLE_DECIMAL_LEADING_ZERO:
			case Setting.LIST_STYLE_LOWER_ROMAN:
			case Setting.LIST_STYLE_UPPER_ROMAN:
			case Setting.LIST_STYLE_LOWER_GREEK:
			case Setting.LIST_STYLE_LOWER_LATIN:
			case Setting.LIST_STYLE_UPPER_LATIN:
				_str_return = 'pkg-list_style-'+str_style;
				break;
		}
		return _str_return;
	};

}
