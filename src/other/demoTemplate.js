'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';
import RadioGroup from './../js/RadioGroup';
import Setting from './../js/Setting';

// import ClassNames from 'classnames';
import DeepExtend from 'DeepExtend';

export default class demoTemplate extends React.Component {

    constructor(props) {
        super(props);

        let _scope = this;

        _scope.arrangeProps( props );

        _scope.handleChangeDisplay = _scope.handleChangeDisplay.bind(_scope);
        _scope.handleChangePadding = _scope.handleChangePadding.bind(_scope);
        _scope.handleChangeFillet = _scope.handleChangeFillet.bind(_scope);
        _scope.handleChangeIconPosition = _scope.handleChangeIconPosition.bind(_scope);
        _scope.handleChangeIconShow01 = _scope.handleChangeIconShow01.bind(_scope);
        _scope.handleChangeIconShow02 = _scope.handleChangeIconShow02.bind(_scope);
        _scope.handleChangeListPosition = _scope.handleChangeListPosition.bind(_scope);
        _scope.handleChangeListStyle = _scope.handleChangeListStyle.bind(_scope);
        _scope.handleChangeStyleName = _scope.handleChangeStyleName.bind(_scope);
        _scope.handleChangeComposition = _scope.handleChangeComposition.bind(_scope);
        _scope.handleChangeDisabled = _scope.handleChangeDisabled.bind(_scope);
        _scope.handleChangeOffBack = _scope.handleChangeOffBack.bind(_scope);
        _scope.handleChangeStyleBorder = _scope.handleChangeStyleBorder.bind(_scope);
        _scope.handleChangeStyleIcon = _scope.handleChangeStyleIcon.bind(_scope);
        _scope.handleChangeStyleIconBack = _scope.handleChangeStyleIconBack.bind(_scope);
        _scope.handleChangeStyleList = _scope.handleChangeStyleList.bind(_scope);

        _scope.handleChangeStringValue = _scope.handleChangeStringValue.bind(_scope);
        _scope.handleChangeJsonValue = _scope.handleChangeJsonValue.bind(_scope);
        _scope.handleChangeArrayValue = _scope.handleChangeArrayValue.bind(_scope);
        _scope.handleChangeSarrayValue = _scope.handleChangeSarrayValue.bind(_scope);
    }

    getSelectKey(){
        return ['value'];
    }

    getShowKey(){
        return ['name'];
    }

    getOptionDisplay(){
        return [{
            name: Setting.DISPLAY_BLOCK,
            value: Setting.DISPLAY_BLOCK
        }, {
            name: Setting.DISPLAY_INBLOCK,
            value: Setting.DISPLAY_INBLOCK
        }];
    }

    getOptionPadding(){
        return [{
            name: ' 〔不使用〕',
            value: ''
        }, {
            name: Setting.PADDING_TINY + ' 〔0.2em〕',
            value: Setting.PADDING_TINY
        }, {
            name: Setting.PADDING_SMALL + ' 〔0.5em〕',
            value: Setting.PADDING_SMALL
        }, {
            name: Setting.PADDING_LITTLE + ' 〔0.8em〕',
            value: Setting.PADDING_LITTLE
        }, {
            name: Setting.PADDING_BASE + ' 〔1em〕',
            value: Setting.PADDING_BASE
        }, {
            name: Setting.PADDING_MIDDLE + ' 〔1.2em〕',
            value: Setting.PADDING_MIDDLE
        }, {
            name: Setting.PADDING_BIG + ' 〔1.5em〕',
            value: Setting.PADDING_BIG
        }, {
            name: Setting.PADDING_LARGE + ' 〔2em〕',
            value: Setting.PADDING_LARGE
        }, {
            name: Setting.PADDING_HUGE + ' 〔2.5em〕',
            value: Setting.PADDING_HUGE
        }];
    }

    getOptionFillet(){
        return [{
            name: Setting.FILLET_NONE,
            value: Setting.FILLET_NONE
        }, {
            name: Setting.FILLET_TINY,
            value: Setting.FILLET_TINY
        }, {
            name: Setting.FILLET_BASE,
            value: Setting.FILLET_BASE
        }, {
            name: Setting.FILLET_CIRCLE,
            value: Setting.FILLET_CIRCLE
        }];
    }

    getOptionIconPosition(){
        return [{
            name: Setting.ICON_POSITION_TOP,
            value: Setting.ICON_POSITION_TOP
        }, {
            name: Setting.ICON_POSITION_BOTTOM,
            value: Setting.ICON_POSITION_BOTTOM
        }, {
            name: Setting.ICON_POSITION_LEFT,
            value: Setting.ICON_POSITION_LEFT
        }, {
            name: Setting.ICON_POSITION_RIGHT,
            value: Setting.ICON_POSITION_RIGHT
        }, {
            name: Setting.ICON_POSITION_NONE,
            value: Setting.ICON_POSITION_NONE
        }];
    }

    getOptionIconShow(){
        return [{
            name: Setting.ICON_SHOW_HEART + ' 〔實的愛心〕',
            value: Setting.ICON_SHOW_HEART
        }, {
            name: Setting.ICON_SHOW_EMPTY_HEART + ' 〔空的愛心〕',
            value: Setting.ICON_SHOW_EMPTY_HEART
        }, {
            name: Setting.ICON_SHOW_CHECKED + ' 〔純勾勾〕',
            value: Setting.ICON_SHOW_CHECKED
        }, {
        //     name: Setting.ICON_SHOW_SQUARE_CHECKED + ' 〔方框中有勾勾〕',
        //     value: Setting.ICON_SHOW_SQUARE_CHECKED
        // }, {
            name: Setting.ICON_SHOW_SQUARE + ' 〔純方形〕',
            value: Setting.ICON_SHOW_SQUARE
        }, {
            name: Setting.ICON_SHOW_CLOSE + ' 〔純叉叉〕',
            value: Setting.ICON_SHOW_CLOSE
        }, {
            name: Setting.ICON_SHOW_LINE + ' 〔純橫線〕',
            value: Setting.ICON_SHOW_LINE
        }, {
            name: Setting.ICON_SHOW_EMPTY_SQUARE + ' 〔純方框〕',
            value: Setting.ICON_SHOW_EMPTY_SQUARE
        }, {
            name: Setting.ICON_SHOW_RHOMBUS + ' 〔菱形〕',
            value: Setting.ICON_SHOW_RHOMBUS
        }, {
            name: Setting.ICON_SHOW_STAR + ' 〔星形〕',
            value: Setting.ICON_SHOW_STAR
        }, {
            name: Setting.ICON_SHOW_EMPTY_STAR + ' 〔空心星形〕',
            value: Setting.ICON_SHOW_EMPTY_STAR
        }, {
            name: Setting.ICON_SHOW_CIRCLE + ' 〔圓形〕',
            value: Setting.ICON_SHOW_CIRCLE
        }, {
            name: Setting.ICON_SHOW_EMPTY_CIRCLE + ' 〔空心圓形〕',
            value: Setting.ICON_SHOW_EMPTY_CIRCLE
        }];
    }

    getOptionListPosition(){
        return [{
            name: Setting.LIST_POSITION_OUTER + ' 〔外〕',
            value: Setting.LIST_POSITION_OUTER
        }, {
            name: Setting.LIST_POSITION_INNER + ' 〔內〕',
            value: Setting.LIST_POSITION_INNER
        }];
    }

    getOptionListStyle(){
        return [{
            name: ' 〔不使用〕',
            value: ''
        }, {
            name: Setting.LIST_STYLE_DISC + ' 〔實心圓〕',
            value: Setting.LIST_STYLE_DISC
        }, {
            name: Setting.LIST_STYLE_CIRCLE + ' 〔空心圓〕',
            value: Setting.LIST_STYLE_CIRCLE
        }, {
            name: Setting.LIST_STYLE_DECIMAL + ' 〔阿拉伯數字〕',
            value: Setting.LIST_STYLE_DECIMAL
        }, {
            name: Setting.LIST_STYLE_SQUARE + ' 〔方形〕',
            value: Setting.LIST_STYLE_SQUARE
        }, {
            name: Setting.LIST_STYLE_DECIMAL_LEADING_ZERO + ' 〔帶有0的阿拉伯數字〕',
            value: Setting.LIST_STYLE_DECIMAL_LEADING_ZERO
        }, {
            name: Setting.LIST_STYLE_LOWER_ROMAN + ' 〔小寫的羅馬文字〕',
            value: Setting.LIST_STYLE_LOWER_ROMAN
        }, {
            name: Setting.LIST_STYLE_UPPER_ROMAN + ' 〔大寫的羅馬文字〕',
            value: Setting.LIST_STYLE_UPPER_ROMAN
        }, {
            name: Setting.LIST_STYLE_LOWER_GREEK + ' 〔小寫的希臘文〕',
            value: Setting.LIST_STYLE_LOWER_GREEK
        }, {
            name: Setting.LIST_STYLE_LOWER_LATIN + ' 〔小寫的拉丁字母〕',
            value: Setting.LIST_STYLE_LOWER_LATIN
        }, {
            name: Setting.LIST_STYLE_UPPER_LATIN + ' 〔大寫的拉丁字母〕',
            value: Setting.LIST_STYLE_UPPER_LATIN
        }];
    }

    getOptionStyleName(){
        return [{
            name: ' 〔不使用〕',
            value: ''
        }, {
            // name: Setting.STYLE_NAME_RESURGENCE + ' 〔死灰復燃〕',
            name: Setting.STYLE_NAME_RESURGENCE,
            value: Setting.STYLE_NAME_RESURGENCE
        }, {
            // name: Setting.STYLE_NAME_SPRING + ' 〔春天〕',
            name: Setting.STYLE_NAME_SPRING,
            value: Setting.STYLE_NAME_SPRING
        }, {
            // name: Setting.STYLE_NAME_WINE + ' 〔紅酒〕',
            name: Setting.STYLE_NAME_WINE,
            value: Setting.STYLE_NAME_WINE
        }, {
            // name: Setting.STYLE_NAME_BLUESKY + ' 〔藍天〕',
            name: Setting.STYLE_NAME_BLUESKY,
            value: Setting.STYLE_NAME_BLUESKY
        }, {
            // name: Setting.STYLE_NAME_LOVELY + ' 〔可愛〕',
            name: Setting.STYLE_NAME_LOVELY,
            value: Setting.STYLE_NAME_LOVELY
        }, {
            // name: Setting.STYLE_NAME_LUXURY + ' 〔華貴〕',
            name: Setting.STYLE_NAME_LUXURY,
            value: Setting.STYLE_NAME_LUXURY
        }, {
            // name: Setting.STYLE_NAME_FANTASY + ' 〔奇幻〕',
            name: Setting.STYLE_NAME_FANTASY,
            value: Setting.STYLE_NAME_FANTASY
        }, {
            // name: Setting.STYLE_NAME_RIGID + ' 〔鋼硬〕',
            name: Setting.STYLE_NAME_RIGID,
            value: Setting.STYLE_NAME_RIGID
        }, {
            // name: Setting.STYLE_NAME_WATERSIDE + ' 〔水畔〕',
            name: Setting.STYLE_NAME_WATERSIDE,
            value: Setting.STYLE_NAME_WATERSIDE
        }];
    }

    getOptionComposition(){
        return [{
            name: ' 〔不設定，隨本身內容長度變化〕',
            value: ''
        }, {
            name: Setting.COMPOSITION_WHOLE + ' 〔百分百〕',
            value: Setting.COMPOSITION_WHOLE
        }, {
            name: Setting.COMPOSITION_HALF + ' 〔一半（1/2）〕',
            value: Setting.COMPOSITION_HALF
        }, {
            name: Setting.COMPOSITION_THIRD + ' 〔三分之一（1/3）〕',
            value: Setting.COMPOSITION_THIRD
        }, {
            name: Setting.COMPOSITION_QUARTER + ' 〔四分之一（1/4）〕',
            value: Setting.COMPOSITION_QUARTER
        }, {
            name: Setting.COMPOSITION_FIFTH + ' 〔五分之一（1/5）〕',
            value: Setting.COMPOSITION_FIFTH
        }, {
            name: Setting.COMPOSITION_SIXTH + ' 〔六分之一（1/6）〕',
            value: Setting.COMPOSITION_SIXTH
        }, {
            name: Setting.COMPOSITION_EIGHTH + ' 〔八分之一（1/8）〕',
            value: Setting.COMPOSITION_EIGHTH
        }, {
            name: Setting.COMPOSITION_TENTH + ' 〔十分之一（1/10）〕',
            value: Setting.COMPOSITION_TENTH
        }, {
            name: Setting.COMPOSITION_TWELFTH + ' 〔十二分之一（1/12）〕',
            value: Setting.COMPOSITION_TWELFTH
        }, {
            name: Setting.COMPOSITION_TINYEM + ' 〔0.2em〕',
            value: Setting.COMPOSITION_TINYEM
        }, {
            name: Setting.COMPOSITION_SMALLEM + ' 〔0.5em〕',
            value: Setting.COMPOSITION_SMALLEM
        }, {
            name: Setting.COMPOSITION_LITTLEEM + ' 〔0.8em〕',
            value: Setting.COMPOSITION_LITTLEEM
        }, {
            name: Setting.COMPOSITION_BASEEM + ' 〔1em〕',
            value: Setting.COMPOSITION_BASEEM
        }, {
            name: Setting.COMPOSITION_MIDDLEEM + ' 〔1.2em〕',
            value: Setting.COMPOSITION_MIDDLEEM
        }, {
            name: Setting.COMPOSITION_BIGEM + ' 〔1.5em〕',
            value: Setting.COMPOSITION_BIGEM
        }, {
            name: Setting.COMPOSITION_LARGEEM + ' 〔2em〕',
            value: Setting.COMPOSITION_LARGEEM
        }, {
            name: Setting.COMPOSITION_TINYPERCENT + ' 〔1%〕',
            value: Setting.COMPOSITION_TINYPERCENT
        }, {
            name: Setting.COMPOSITION_SMALLPERCENT + ' 〔2.5%〕',
            value: Setting.COMPOSITION_SMALLPERCENT
        }, {
            name: Setting.COMPOSITION_LITTLEPERCENT + ' 〔4%〕',
            value: Setting.COMPOSITION_LITTLEPERCENT
        }, {
            name: Setting.COMPOSITION_BASEPERCENT + ' 〔5%〕',
            value: Setting.COMPOSITION_BASEPERCENT
        }, {
            name: Setting.COMPOSITION_MIDDLEPERCENT + ' 〔7.5%〕',
            value: Setting.COMPOSITION_MIDDLEPERCENT
        }, {
            name: Setting.COMPOSITION_BIGPERCENT + ' 〔10%〕',
            value: Setting.COMPOSITION_BIGPERCENT
        }, {
            name: Setting.COMPOSITION_LARGEPERCENT + ' 〔15%〕',
            value: Setting.COMPOSITION_LARGEPERCENT
        }, {
            name: Setting.COMPOSITION_TINY + ' 〔1px〕',
            value: Setting.COMPOSITION_TINY
        }, {
            name: Setting.COMPOSITION_SMALL + ' 〔2px〕',
            value: Setting.COMPOSITION_SMALL
        }, {
            name: Setting.COMPOSITION_LITTLE + ' 〔5px〕',
            value: Setting.COMPOSITION_LITTLE
        }, {
            name: Setting.COMPOSITION_BASE + ' 〔10px〕',
            value: Setting.COMPOSITION_BASE
        }, {
            name: Setting.COMPOSITION_MIDDLE + ' 〔15px〕',
            value: Setting.COMPOSITION_MIDDLE
        }, {
            name: Setting.COMPOSITION_BIG + ' 〔20px〕',
            value: Setting.COMPOSITION_BIG
        }, {
            name: Setting.COMPOSITION_LARGE + ' 〔30px〕',
            value: Setting.COMPOSITION_LARGE
        }];
    }

    getOptionBoolean(){
        return [{
            name: 'true',
            value: 'true'
        }];
    }

    getOptions(){
        return [{
            name: 'A',
            name2: 'A2',
            value: 'a',
            value2: 'a2'
        }, {
            name: 'B',
            name2: 'B2',
            value: 'b',
            value2: 'b2'
        }, {
            name: 'C',
            name2: 'C2',
            value: 'c',
            value2: 'c2'
        }, {
            name: 'D',
            name2: 'D2',
            value: 'd',
            value2: 'd2'
        }, {
            name: 'E',
            name2: 'E2',
            value: 'e',
            value2: 'e2'
        }, {
            name: 'F',
            name2: 'F2',
            value: 'f',
            value2: 'f2'
        }, {
            name: 'G',
            name2: 'G2',
            value: 'g',
            value2: 'g2'
        }, {
            name: 'H',
            name2: 'H2',
            value: 'h',
            value2: 'h2'
        }, {
            name: 'I',
            name2: 'I2',
            value: 'i',
            value2: 'i2'
        }, {
            name: 'J',
            name2: 'J2',
            value: 'j',
            value2: 'j2'
        }, {
            name: 'K',
            name2: 'K2',
            value: 'k',
            value2: 'k2'
        }, {
            name: 'L',
            name2: 'L2',
            value: 'l',
            value2: 'l2'
        }, {
            name: 'M',
            name2: 'M2',
            value: 'm',
            value2: 'm2'
        }];
    }

    // componentWillReceiveProps(nextProps){
    //     this.arrangeProps(nextProps);
    // }

    handleChangeDisplay( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {display: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangePadding( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {padding: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeFillet( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {fillet: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeIconPosition( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {iconPosition: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeIconShow01( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {iconShow01: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeIconShow02( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {iconShow02: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeListPosition( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {listPosition: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeListStyle( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {listStyle: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStyleName( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {styleName: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeComposition( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {composition: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeDisabled( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {disabled: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeOffBack( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {offBack: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStyleBorder( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {styleBorder: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStyleIcon( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {styleIcon: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStyleIconBack( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {styleIconBack: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStyleList( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {styleList: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeStringValue( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {preview: {stringValue: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeJsonValue( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {preview: {jsonValue: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeArrayValue( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {preview: {arrayValue: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    handleChangeSarrayValue( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {preview: {sarrayValue: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    arrangeProps(json_next, callback){

        let _json_next = {...json_next} || {} ;

        _json_next.style = _json_next.style || {} ;

        _json_next.style.display = _json_next.style.display || Setting.DISPLAY_INBLOCK ;
        _json_next.style.padding = _json_next.style.padding || Setting.PADDING_TINY ;
        _json_next.style.fillet = _json_next.style.fillet || Setting.FILLET_TINY ;
        _json_next.style.iconPosition = _json_next.style.iconPosition || Setting.ICON_POSITION_LEFT ;
        _json_next.style.iconShow01 = _json_next.style.iconShow01 || Setting.ICON_SHOW_EMPTY_SQUARE ;
        _json_next.style.iconShow02 = _json_next.style.iconShow02 || Setting.ICON_SHOW_CHECKED ;
        _json_next.style.listPosition = _json_next.style.listPosition || Setting.LIST_POSITION_INNER ;
        _json_next.style.listStyle = _json_next.style.listStyle || Setting.LIST_STYLE_LOWER_ROMAN ;
        _json_next.style.styleName = _json_next.style.styleName || Setting.STYLE_NAME_RESURGENCE ;
        _json_next.style.composition = _json_next.style.composition || Setting.COMPOSITION_LITTLE ;
        _json_next.style.disabled = ( _json_next.style.disabled===undefined )? [] : _json_next.style.disabled ;
        _json_next.style.offBack = ( _json_next.style.offBack===undefined )? [] : _json_next.style.offBack ;
        _json_next.style.styleBorder = ( _json_next.style.styleBorder===undefined )? ['true'] : _json_next.style.styleBorder ;
        _json_next.style.styleIcon = ( _json_next.style.styleIcon===undefined )? ['true'] : _json_next.style.styleIcon ;
        _json_next.style.styleIconBack = ( _json_next.style.styleIconBack===undefined )? ['true'] : _json_next.style.styleIconBack ;
        _json_next.style.styleList = ( _json_next.style.styleList===undefined )? ['true'] : _json_next.style.styleList ;

        _json_next.preview = _json_next.preview || {} ;
        _json_next.preview.stringValue = ( _json_next.preview.stringValue===undefined )? '' : _json_next.preview.stringValue ;
        _json_next.preview.jsonValue = ( _json_next.preview.jsonValue===undefined )? {} : _json_next.preview.jsonValue ;
        _json_next.preview.arrayValue = ( _json_next.preview.arrayValue===undefined )? [] : _json_next.preview.arrayValue ;
        _json_next.preview.sarrayValue = ( _json_next.preview.sarrayValue===undefined )? [] : _json_next.preview.sarrayValue ;

        if( this.state ){
            this.setState( {
                style: _json_next.style,
                preview: _json_next.preview
            } );
        }else{
            this.state = {
                style: _json_next.style,
                preview: _json_next.preview
            };
        }
        if( callback ){
            callback();
        }
    }

    arrangeState( json ){
        json = json || {} ;
        let _json_output = DeepExtend( 
            {},
            { style: this.props.style }, 
            this.state
        );
        return DeepExtend( _json_output, json );
    }

    judgeTF( ary ){
        if( (ary instanceof Array === true) && (ary.length>0) ){
            if( ary[0]==='true' ){
                return true;
            }
        }
        return false;
    }

    render() {
        let _scope = this;
        let _sary_iconshow02 = (_scope.getOptionIconShow()).concat([{
                name: ' 〔不設定〕',
                value: ''
            }]),
            _ary_showkey_string = ['name'],
            _ary_showkey_json = ['name','name2'],
            _ary_showkey_array = ['name','name2'],
            _ary_showkey_sarray = ['name','name2','value'],
            _ary_selectkey_string = ['value'],
            _ary_selectkey_json = ['value','value2'],
            _ary_selectkey_array = ['value'],
            _ary_selectkey_sarray = ['value','value2','name'];
        return (
            <div className="pkg-tmp">
                <div className="pkg-tmp-preview">
                    <h4 className="ui-bigtitle">資料格式設定 與 外觀預覽</h4>
                    <div className="pkg-tmp-block pkg-tmp-block_header">
                        <h5 className="ui-title">
                            <span>可選選項</span>
                        </h5>
                        <div>
                            {JSON.stringify(_scope.getOptions())}
                        </div>
                    </div>
                    
                    <div className="pkg-tmp-block">
                        <RadioGroup 
                            onChange={_scope.handleChangeStringValue}
                            outputFormat="string"
                            name="previewStyleString"
                            selectKey={_ary_selectkey_string}
                            inputOption={_scope.getOptions()}
                            outputResult={_scope.state.preview.stringValue}
                            showKey={_ary_showkey_string}
                            between="~"
                            display={_scope.state.style.display}
                            padding={_scope.state.style.padding}
                            fillet={_scope.state.style.fillet}
                            listStyle={_scope.state.style.listStyle}
                            listPosition={_scope.state.style.listPosition}
                            iconPosition={_scope.state.style.iconPosition}
                            iconShow={[_scope.state.style.iconShow01, _scope.state.style.iconShow02]}
                            styleName={_scope.state.style.styleName}
                            composition={_scope.state.style.composition}
                            disabled={_scope.judgeTF(_scope.state.style.disabled)}
                            offBack={_scope.judgeTF(_scope.state.style.offBack)}
                            styleBorder={_scope.judgeTF(_scope.state.style.styleBorder)}
                            styleIcon={_scope.judgeTF(_scope.state.style.styleIcon)}
                            styleIconBack={_scope.judgeTF(_scope.state.style.styleIconBack)}
                            styleList={_scope.judgeTF(_scope.state.style.styleList)} />
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>設定選項</span>
                            </h5>
                            <div className="ui-description">
                                var _ary_selectkey = ["value"];<br />
                                var _ary_showkey = ["name"];<br />
                                outputFormat="string"<span className="ui-note">// 決定輸出的格式</span><br />
                                name="previewStyleString"<span className="ui-note">// 自訂，會成為input中name="previewStyleString"</span><br />
                                selectKey=｛_ary_selectkey｝<span className="ui-note">// 輸出會用到的選項key</span><br />
                                showKey=｛_ary_showkey｝<span className="ui-note">// 顯示於頁面上的選項key</span><br />
                                between="~"<span className="ui-note">// 當showKey為2個以上時，做為分割用的字串</span>
                            </div>
                        </div>
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>輸出結果〔格式：String〕</span>
                            </h5>
                            <div>
                                {JSON.stringify(_scope.state.preview.stringValue)}
                            </div>
                        </div>
                    </div>
                    
                    <div className="pkg-tmp-block">
                        <RadioGroup 
                            onChange={_scope.handleChangeJsonValue}
                            outputFormat="json"
                            name="previewStyleJson"
                            selectKey={_ary_selectkey_json}
                            inputOption={_scope.getOptions()}
                            outputResult={_scope.state.preview.jsonValue}
                            showKey={_ary_showkey_json}
                            between="~"
                            display={_scope.state.style.display}
                            padding={_scope.state.style.padding}
                            fillet={_scope.state.style.fillet}
                            listStyle={_scope.state.style.listStyle}
                            listPosition={_scope.state.style.listPosition}
                            iconPosition={_scope.state.style.iconPosition}
                            iconShow={[_scope.state.style.iconShow01, _scope.state.style.iconShow02]}
                            styleName={_scope.state.style.styleName}
                            composition={_scope.state.style.composition}
                            disabled={_scope.judgeTF(_scope.state.style.disabled)}
                            offBack={_scope.judgeTF(_scope.state.style.offBack)}
                            styleBorder={_scope.judgeTF(_scope.state.style.styleBorder)}
                            styleIcon={_scope.judgeTF(_scope.state.style.styleIcon)}
                            styleIconBack={_scope.judgeTF(_scope.state.style.styleIconBack)}
                            styleList={_scope.judgeTF(_scope.state.style.styleList)} />
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>設定選項</span>
                            </h5>
                            <div className="ui-description">
                                var _ary_selectkey = ["value","value2"];<br />
                                var _ary_showkey = ["name","name2"];<br />
                                outputFormat="json"<span className="ui-note">// 決定輸出的格式</span><br />
                                name="previewStyleJson"<span className="ui-note">// 自訂，會成為input中name="previewStyleJson"</span><br />
                                selectKey=｛_ary_selectkey｝<span className="ui-note">// 輸出會用到的選項key</span><br />
                                showKey=｛_ary_showkey｝<span className="ui-note">// 顯示於頁面上的選項key</span><br />
                                between="~"<span className="ui-note">// 當showKey為2個以上時，做為分割用的字串</span>
                            </div>
                        </div>
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>輸出結果〔格式：Json〕</span>
                            </h5>
                            <div>
                                {JSON.stringify(_scope.state.preview.jsonValue)}
                            </div>
                        </div>
                    </div>
                    
                    <div className="pkg-tmp-block">
                        <RadioGroup 
                            onChange={_scope.handleChangeArrayValue}
                            outputFormat="array"
                            name="previewStyleArray"
                            selectKey={_ary_selectkey_array}
                            inputOption={_scope.getOptions()}
                            outputResult={_scope.state.preview.arrayValue}
                            showKey={_ary_showkey_array}
                            between="/"
                            display={_scope.state.style.display}
                            padding={_scope.state.style.padding}
                            fillet={_scope.state.style.fillet}
                            listStyle={_scope.state.style.listStyle}
                            listPosition={_scope.state.style.listPosition}
                            iconPosition={_scope.state.style.iconPosition}
                            iconShow={[_scope.state.style.iconShow01, _scope.state.style.iconShow02]}
                            styleName={_scope.state.style.styleName}
                            composition={_scope.state.style.composition}
                            disabled={_scope.judgeTF(_scope.state.style.disabled)}
                            offBack={_scope.judgeTF(_scope.state.style.offBack)}
                            styleBorder={_scope.judgeTF(_scope.state.style.styleBorder)}
                            styleIcon={_scope.judgeTF(_scope.state.style.styleIcon)}
                            styleIconBack={_scope.judgeTF(_scope.state.style.styleIconBack)}
                            styleList={_scope.judgeTF(_scope.state.style.styleList)} />
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>設定選項</span>
                            </h5>
                            <div className="ui-description">
                                var _ary_selectkey = ["value"];<br />
                                var _ary_showkey = ["name","name2"];<br />
                                outputFormat="array"<span className="ui-note">// 決定輸出的格式</span><br />
                                name="previewStyleArray"<span className="ui-note">// 自訂，會成為input中name="previewStyleArray"</span><br />
                                selectKey=｛_ary_selectkey｝<span className="ui-note">// 輸出會用到的選項key</span><br />
                                showKey=｛_ary_showkey｝<span className="ui-note">// 顯示於頁面上的選項key</span><br />
                                between="/"<span className="ui-note">// 當showKey為2個以上時，做為分割用的字串</span>
                            </div>
                        </div>
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>輸出結果〔格式：Array〕</span>
                            </h5>
                            <div>
                                {JSON.stringify(_scope.state.preview.arrayValue)}
                            </div>
                        </div>
                    </div>

                    <div className="pkg-tmp-block">
                        <RadioGroup 
                            onChange={_scope.handleChangeSarrayValue}
                            outputFormat="sarray"
                            name="previewStyleSarray"
                            selectKey={_ary_selectkey_sarray}
                            inputOption={_scope.getOptions()}
                            outputResult={_scope.state.preview.sarrayValue}
                            showKey={_ary_showkey_sarray}
                            between="."
                            display={_scope.state.style.display}
                            padding={_scope.state.style.padding}
                            fillet={_scope.state.style.fillet}
                            listStyle={_scope.state.style.listStyle}
                            listPosition={_scope.state.style.listPosition}
                            iconPosition={_scope.state.style.iconPosition}
                            iconShow={[_scope.state.style.iconShow01, _scope.state.style.iconShow02]}
                            styleName={_scope.state.style.styleName}
                            composition={_scope.state.style.composition}
                            disabled={_scope.judgeTF(_scope.state.style.disabled)}
                            offBack={_scope.judgeTF(_scope.state.style.offBack)}
                            styleBorder={_scope.judgeTF(_scope.state.style.styleBorder)}
                            styleIcon={_scope.judgeTF(_scope.state.style.styleIcon)}
                            styleIconBack={_scope.judgeTF(_scope.state.style.styleIconBack)}
                            styleList={_scope.judgeTF(_scope.state.style.styleList)} />
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>設定選項</span>
                            </h5>
                            <div className="ui-description">
                                var _ary_selectkey = ["value","value2","name"];<br />
                                var _ary_showkey = ["name","name2","value"];<br />
                                outputFormat="sarray"<span className="ui-note">// 決定輸出的格式</span><br />
                                name="previewStyleSarray"<span className="ui-note">// 自訂，會成為input中name="previewStyleSarray"</span><br />
                                selectKey=｛_ary_selectkey｝<span className="ui-note">// 輸出會用到的選項key</span><br />
                                showKey=｛_ary_showkey｝<span className="ui-note">// 顯示於頁面上的選項key</span><br />
                                between="."<span className="ui-note">// 當showKey為2個以上時，做為分割用的字串</span>
                            </div>
                        </div>
                        <div className="pkg-tmp-subblock">
                            <h5 className="ui-title">
                                <span>輸出結果〔格式：Serialize Array〕</span>
                            </h5>
                            <div>
                                {JSON.stringify(_scope.state.preview.sarrayValue)}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pkg-tmp-control">
                    <h4 className="ui-bigtitle">外觀設定</h4>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">display<span className="pkg-table-name-note">〔display排版方式〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.display}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeDisplay}
                                    outputFormat="string"
                                    name="display"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionDisplay()}
                                    outputResult={_scope.state.style.display}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">styleName<span className="pkg-table-name-note">〔色彩風格〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.styleName}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeStyleName}
                                    outputFormat="string"
                                    name="styleName"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionStyleName()}
                                    outputResult={_scope.state.style.styleName}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">padding<span className="pkg-table-name-note">〔padding的大小〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.padding}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangePadding}
                                    outputFormat="string"
                                    name="padding"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionPadding()}
                                    outputResult={_scope.state.style.padding}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>  
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">fillet<span className="pkg-table-name-note">〔圓角〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.fillet}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeFillet}
                                    outputFormat="string"
                                    name="fillet"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionFillet()}
                                    outputResult={_scope.state.style.fillet}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>   
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">iconPostion<span className="pkg-table-name-note">〔ICON位置或不顯示〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.iconPosition}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeIconPosition}
                                    outputFormat="string"
                                    name="iconPosition"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionIconPosition()}
                                    outputResult={_scope.state.style.iconPosition}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>    
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">iconShow<span className="pkg-table-name-note">〔ICON類型〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={ (_scope.state.style.iconShow02 !== undefined) && (_scope.state.style.iconShow02 !== '') }>
                                        ["{_scope.state.style.iconShow01}","{_scope.state.style.iconShow02}"]
                                    </If>
                                    <If condition={ !( (_scope.state.style.iconShow02 !== undefined) && (_scope.state.style.iconShow02 !== '') ) }>
                                        ["{_scope.state.style.iconShow01}"]
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="ui-title"><span>原始icon圖</span></h5>
                                <RadioGroup 
                                    onChange={_scope.handleChangeIconShow01}
                                    outputFormat="string"
                                    name="iconShow01"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionIconShow()}
                                    outputResult={_scope.state.style.iconShow01}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                                <div className="ui-seperate"></div>
                                <h5 className="ui-title"><span>項目被選後的icon圖</span></h5>
                                <RadioGroup 
                                    onChange={_scope.handleChangeIconShow02}
                                    outputFormat="string"
                                    name="iconShow02"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_sary_iconshow02}
                                    outputResult={_scope.state.style.iconShow02}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">listPosition<span className="pkg-table-name-note">〔清單位置〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.listPosition}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeListPosition}
                                    outputFormat="string"
                                    name="listPosition"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionListPosition()}
                                    outputResult={_scope.state.style.listPosition}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">listStyle<span className="pkg-table-name-note">〔清單類型〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.listStyle}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeListStyle}
                                    outputFormat="string"
                                    name="listStyle"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionListStyle()}
                                    outputResult={_scope.state.style.listStyle}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">composition<span className="pkg-table-name-note">〔佈局〕</span></span>
                                <span className="ui-oneline pkg-table-result">"{_scope.state.style.composition}"</span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeComposition}
                                    outputFormat="string"
                                    name="composition"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionComposition()}
                                    outputResult={_scope.state.style.composition}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">disabled<span className="pkg-table-name-note">〔能不能作用〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.disabled)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.disabled)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeDisabled}
                                    outputFormat="array"
                                    name="disabled"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.disabled}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">offBack<span className="pkg-table-name-note">〔不加底色〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.offBack)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.offBack)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeOffBack}
                                    outputFormat="array"
                                    name="offBack"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.offBack}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">styleBorder<span className="pkg-table-name-note">〔加邊框〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.styleBorder)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.styleBorder)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeStyleBorder}
                                    outputFormat="array"
                                    name="styleBorder"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.styleBorder}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">styleIcon<span className="pkg-table-name-note">〔變icon的顏色〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.styleIcon)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.styleIcon)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeStyleIcon}
                                    outputFormat="array"
                                    name="styleIcon"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.styleIcon}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">styleIconBack<span className="pkg-table-name-note">〔變icon的底色〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.styleIconBack)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.styleIconBack)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeStyleIconBack}
                                    outputFormat="array"
                                    name="styleIconBack"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.styleIconBack}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                    <table className="pkg-table">
                        <tr>
                            <th>
                                <span className="ui-oneline pkg-table-name">styleList<span className="pkg-table-name-note">〔變列點文字的顏色〕</span></span>
                                <span className="ui-oneline pkg-table-result">
                                    <If condition={_scope.judgeTF(_scope.state.style.styleList)}>
                                        true
                                    </If>
                                    <If condition={!_scope.judgeTF(_scope.state.style.styleList)}>
                                        false
                                    </If>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <RadioGroup 
                                    onChange={_scope.handleChangeStyleList}
                                    outputFormat="array"
                                    name="styleList"
                                    selectKey={_scope.getSelectKey()}
                                    inputOption={_scope.getOptionBoolean()}
                                    outputResult={_scope.state.style.styleList}
                                    showKey={_scope.getShowKey()}
                                    display={Setting.DISPLAY_INBLOCK}
                                    padding={Setting.PADDING_TINY}
                                    fillet={Setting.FILLET_TINY}
                                    listPosition={Setting.ICON_POSITION_INNER}
                                    styleName={Setting.STYLE_NAME_RESURGENCE}
                                    composition={Setting.COMPOSITION_TINYEM}
                                    iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]}
                                    styleIcon={true} 
                                    styleBorder={true} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

};
