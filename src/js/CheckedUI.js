'use strict';
import Setting from './Setting';

export default class CheckedUI {

	static getDisabled( str_display ){
		let _str_return = '';
		str_display = str_display || Setting.DISPLAY_INBLOCK ;
		let _ary_display = [
			Setting.DISPLAY_INBLOCK,
			Setting.DISPLAY_BLOCK
		];
		if( _ary_display.indexOf(str_display)>=0 ){
			_str_return = 'pkg-checked_display-'+str_display;
		}
		return _str_return ;
	};

	static getPadding( str_padding ){
		let _str_return = '';
		str_padding = str_padding || Setting.DISPLAY_INBLOCK ;
		let _ary_padding = [
			Setting.PADDING_TINY,
			Setting.PADDING_SMALL,
			Setting.PADDING_LITTLE,
			Setting.PADDING_BASE,
			Setting.PADDING_MIDDLE,
			Setting.PADDING_BIG,
			Setting.PADDING_LARGE,
			Setting.PADDING_HUGE
		];
		if( _ary_padding.indexOf(str_padding)>=0 ){
			_str_return = 'pkg-checked_padding-'+str_padding;
		}
		return _str_return ;
	};

	static getFillte( str_fillet ){
		let _str_return = '';
		let _ary_fillet = [
			Setting.FILLET_NONE,
			Setting.FILLET_TINY,
			Setting.FILLET_BASE,
			Setting.FILLET_CIRCLE
		];
		if( _ary_fillet.indexOf(str_fillet)>=0 ){
			_str_return = 'pkg-checked_fillet-'+str_fillet;
		}
		return _str_return ;
	};

	static getIconPosition( str_position ){
		let _str_return = '';
		// str_position = str_position || Setting.ICON_POSTION_LEFT ;
		let _ary_position = [
			Setting.ICON_POSTION_TOP,
			Setting.ICON_POSTION_BOTTOM,
			Setting.ICON_POSTION_LEFT,
			Setting.ICON_POSTION_RIGHT,
			Setting.ICON_POSTION_NONE
		];
		if( _ary_position.indexOf(str_position)>=0 ){
			_str_return = 'pkg-checked_iconposition-'+str_position;
		}
		return _str_return;
	};

	static getIconShowCN( str_icon, num_index ){
		let _str_return = '';
		let _str_cname = ( num_index===1 )? 'pkg-checked_iconchecked-' : 'pkg-checked_iconshow-' ;
		let _ary_icon = [
			Setting.ICON_SHOW_HEART,
			Setting.ICON_SHOW_EMPTY_HEART,
			Setting.ICON_SHOW_CHECKED,
			Setting.ICON_SHOW_SQUARE_CHECKED,
			Setting.ICON_SHOW_SQUARE,
			Setting.ICON_SHOW_CLOSE,
			Setting.ICON_SHOW_LINE
		];
		if( _ary_icon.indexOf(str_icon)>=0 ){
			_str_return = _str_cname+str_icon.replace('-','');
		}
		return _str_return;
	}

	static getIconShow( ary_icon ){
		let _scope = this ;
		let _str_return = '';

		if( ary_icon.length>0 ){
			let _ary_return = [] ;
			ary_icon.map(function (str, num_index) {
				_ary_return.push( _scope.getIconShowCN(str, num_index) );
			});
			_str_return = _ary_return.join( ' ' );
		}
		return _str_return;
	};

	static getListStyle( str_style ){
		let _str_return = '';
		let _ary_style = [
			Setting.LIST_STYLE_DISC,
			Setting.LIST_STYLE_CIRCLE,
			Setting.LIST_STYLE_DECIMAL,
			Setting.LIST_STYLE_SQUARE,
			Setting.LIST_STYLE_DECIMAL_LEADING_ZERO,
			Setting.LIST_STYLE_LOWER_ROMAN,
			Setting.LIST_STYLE_UPPER_ROMAN,
			Setting.LIST_STYLE_LOWER_GREEK,
			Setting.LIST_STYLE_LOWER_LATIN,
			Setting.LIST_STYLE_UPPER_LATI,
		];
		if( _ary_style.indexOf(str_style)>=0 ){
			_str_return = 'pkg-list_style-'+str_style;
		}
		return _str_return;
	};

	static getListPosition( str_position ){
		let _str_return = '';
		let _ary_position = [
			Setting.LIST_POSITION_OUTER,
			Setting.LIST_POSITION_INNER
		];
		if( _ary_position.indexOf(str_position)>=0 ){
			_str_return = 'pkg-checked_listposition-'+str_position;
		}
		return _str_return ;
	};

	static getStyleName( str_style ){
		str_style = str_style || '' ;
		let _ary_style = [
			Setting.STYLE_NAME_RESURGENCE,
			Setting.STYLE_NAME_SPRING,
			Setting.STYLE_NAME_WINE,
			Setting.STYLE_NAME_BLUESKY,
			Setting.STYLE_NAME_LOVELY,
			Setting.STYLE_NAME_LUXURY,
			Setting.STYLE_NAME_FANTASY,
			Setting.STYLE_NAME_RIGID,
			Setting.STYLE_NAME_WATERSIDE
		];
		if( _ary_style.indexOf(str_style)>=0 ){
			return 'pkg-style pkg-style_on pkg-style_'+str_style;
		}else{
			return 'pkg-style';
		}
	}

}
