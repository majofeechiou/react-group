'use strict';
import Setting from './Setting';

export default class CheckedUI {

	static getListStyle( str_style ){
		let _str_return = '';
		switch (str_style){
			case Setting.LIST_STYLE_DISC:
				_str_return = 'pkg-list_style-disc';
				break;
			case Setting.LIST_STYLE_CIRCLE:
				_str_return = 'pkg-list_style-circle';
				break;
			case Setting.LIST_STYLE_DECIMAL:
				_str_return = 'pkg-list_style-decimal';
				break;
			case Setting.LIST_STYLE_SQUARE:
				_str_return = 'pkg-list_style-square';
				break;
			case Setting.LIST_STYLE_DECIMAL_LEADING_ZERO:
				_str_return = 'pkg-list_style-decimallz';
				break;
			case Setting.LIST_STYLE_LOWER_ROMAN:
				_str_return = 'pkg-list_style-lroman';
				break;
			case Setting.LIST_STYLE_UPPER_ROMAN:
				_str_return = 'pkg-list_style-uroman';
				break;
			case Setting.LIST_STYLE_LOWER_GREEK:
				_str_return = 'pkg-list_style-lgreek';
				break;
			case Setting.LIST_STYLE_LOWER_LATIN:
				_str_return = 'pkg-list_style-llatin';
				break;
			case Setting.LIST_STYLE_UPPER_LATIN:
				_str_return = 'pkg-list_style-ulatin';
				break;
		}
		return _str_return;
	};

}
