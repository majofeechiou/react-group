'use strict';

/* 3D旋轉選項 */

export default class Setting {

	// display排版方式
	static DISPLAY_BLOCK = 'block' ;
	static DISPLAY_INBLOCK = 'inline-block' ;

	// padding的大小
	static PADDING_TINY = 'tiny'; // 0.2em
	static PADDING_SMALL = 'small'; // 0.5em
	static PADDING_LITTLE = 'little'; // 0.8em
	static PADDING_BASE = 'base'; // 1em
	static PADDING_MIDDLE = 'middle'; // 1.2em
	static PADDING_BIG = 'big'; // 1.5em
	static PADDING_LARGE = 'large'; // 2em
	static PADDING_HUGE = 'huge'; // 2.5em

	// 圓角
	static FILLET_NONE = 'none'; // 0px
	static FILLET_TINY = 'tiny'; // 2px
	static FILLET_BASE = 'base'; // 5px
	static FILLET_CIRCLE = 'circle'; // 50%

	// ICON位置或不顯示：
	static ICON_POSTION_TOP = 'top';
	static ICON_POSTION_BOTTOM = 'bottom';
	static ICON_POSTION_LEFT = 'left';
	static ICON_POSTION_RIGHT = 'right';
	static ICON_POSTION_NONE = 'none'; // 確保真的不會有icon的出現

	// ICON類型：
	static ICON_SHOW_HEART = 'heart'; // 實的愛心
	static ICON_SHOW_EMPTY_HEART = 'empty-heart'; // 空的愛心
	static ICON_SHOW_CHECKED = 'checked'; // 純勾勾
	static ICON_SHOW_SQUARE_CHECKED = 'square-checked'; // 方框中有勾勾
	static ICON_SHOW_SQUARE = 'square'; // 純方框
	static ICON_SHOW_CLOSE = 'close'; // 純叉叉
	static ICON_SHOW_LINE = 'line'; // 純橫線

	// 清單位置
	static LIST_POSITION_OUTER = 'outer'; // 左外
	static LIST_POSITION_INNER = 'inner'; // 左內

	// 清單類型
	static LIST_STYLE_DISC = 'disc'; // 實心圓
	static LIST_STYLE_CIRCLE = 'circle'; // 空心圓
	static LIST_STYLE_DECIMAL = 'decimal'; // 阿拉伯數字
	static LIST_STYLE_SQUARE = 'square'; // 方形
	static LIST_STYLE_DECIMAL_LEADING_ZERO = 'decimal-leading-zero'; // 帶有0的阿拉伯數字
	static LIST_STYLE_LOWER_ROMAN = 'lower-roman'; // 小寫的羅馬文字
	static LIST_STYLE_UPPER_ROMAN = 'upper-roman'; // 大寫的羅馬文字
	static LIST_STYLE_LOWER_GREEK = 'lower-greek'; // 小寫的希臘文
	static LIST_STYLE_LOWER_LATIN = 'lower-latin'; // 小寫的拉丁字母
	static LIST_STYLE_UPPER_LATIN = 'upper-latin'; // 大寫的拉丁字母

	// 色彩風格
	static STYLE_NAME_RESURGENCE = 'resurgence'; // 死灰復燃
	static STYLE_NAME_SPRING = 'spring'; // 春天
	static STYLE_NAME_WINE = 'wine'; // 紅酒
	static STYLE_NAME_BLUESKY = 'bluesky'; // 藍天
	static STYLE_NAME_LOVELY = 'lovely'; // 可愛
	static STYLE_NAME_LUXURY = 'luxury'; // 華貴
	static STYLE_NAME_FANTASY = 'fantasy'; // 奇幻

	// 能不能作用（disabled）
	static DISABLED_TRUE = true;
	static DISABLED_FALSE = false;

}


		/*
			有哪些排版：
			BLOCK - block
			INBLOCK - inline-block
		*/
		/*
			padding:
			tiny - 0.2em
			small - 0.5em
			little - 0.8em
			base - 1em
			middle - 1.2em
			big - 1.5em
			large - 2em
			huge - 2.5em
		*/
		/*
			色彩風格：
			resurgence - 死灰復燃
			spring - 春天
			wine - 紅酒
			bluesky - 藍天
			lovely - 可愛
		 */
/*
	spacing:
	tiny - 0.2em
	small - 0.5em
	little - 0.8em
	base - 1em
	middle - 1.2em
	big - 1.5em
	large - 2em
*/
/* ?????????
	有哪些類型：
	原版 - clean
	方框 - rectangle
	按鈕 - button
	膠囊 - capsule
	圓形 - circle
*/
		/*
			圓角：
			無
			tiny - 2px
			base - 5px
			circle - 50%
		*/
/*
	轉變動畫：
	rotate-旋轉
	rotate-翻轉
	rotate-3d上下翻轉
	rotate-3d左右翻轉
	opacity
	scale-心臟跳動
	filter-模糊
	translateY-雨滴落下
*/
		/*
			ICON位置或不顯示：
			上 - top
			下 - bottom
			左 - left
			右 - right
			不要 - none
		*/
		/*
			ICON類型：
			實的愛心
			純勾勾
			方框
			方框中有勾勾
			純叉叉
			方根中有叉叉
			純橫線
			方框中有橫線
		*/
		/*
			ICON類型（已選-若沒寫的話，將和未選是一樣的）：
		*/
		/*
			清單位置：
			左外 - outer
			左內 - inner
		*/
		/*
			清單類型：
			實心圓 - disc
			空心圓 - circle
			阿拉伯數字 - decimal
			方形 - square
			帶有0的阿拉伯數字 - decimal-leading-zero
			小寫的羅馬文字 - lower-roman
			大寫的羅馬文字 - upper-roman
			小寫的希臘文 - lower-greek
			小寫的拉丁字母 - lower-latin
			大寫的拉丁字母 - upper-latin
		*/
		/*
			能不能作用（disabled）：
			能作用 - false
			不能作用 - true
		*/