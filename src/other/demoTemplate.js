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

    componentWillReceiveProps(nextProps){
        this.arrangeProps(nextProps);
    }

    handleChangeDisplay( bln_change, json_return ){
        let _scope = this ;
        if( bln_change===true ){
            let _json_new = _scope.arrangeState( {style: {display: json_return.result}} );
            _scope.setState( _json_new );
        }
    }

    arrangeProps(json_next, callback){

        let _json_next = {...json_next} || {} ;
        _json_next.style = _json_next.style || {} ;
        _json_next.style.display = _json_next.style.display || Setting.DISPLAY_INBLOCK ;

        if( this.state ){
            this.setState( {
                style: _json_next.style
            } );
        }else{
            this.state = {
                style: _json_next.style
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

    render() {
        let _scope = this;
        return (
            <table>
                <tr>
                    <th>display 〔display排版方式〕</th>
                    <td>
                        <label><input type="radio" name="display" value="block" />block</label>
                        <label><input type="radio" name="display" value="inline-block" />inline-block</label>
                        <RadioGroup 
                            onChange={_scope.handleChangeDisplay}
                            outputFormat="string"
                            name="display"
                            selectKey={_scope.getSelectKey()}
                            inputOption={_scope.getOptionDisplay()}
                            outputResult={_scope.state.style.display}
                            showKey={_scope.getShowKey()}
                            display={Setting.DISPLAY_INBLOCK}
                            padding={Setting.PADDING_SMALL}
                            fillet={Setting.FILLET_TINY}
                            listPosition={Setting.ICON_POSITION_INNER}
                            styleName={Setting.STYLE_NAME_RESURGENCE}
                            composition={Setting.COMPOSITION_BASEEM}
                            iconShow={[Setting.ICON_SHOW_EMPTY_SQUARE, Setting.ICON_SHOW_CHECKED]} />
                    </td>
                </tr>
                <tr>
                    <th>padding 〔padding的大小〕</th>
                    <td>
                        <label><input type="radio" name="padding" value="tiny" />tiny 〔0.2em〕</label>
                        <label><input type="radio" name="padding" value="small" />small 〔0.5em〕</label>
                        <label><input type="radio" name="padding" value="little" />little 〔0.8em〕</label>
                        <label><input type="radio" name="padding" value="base" />base 〔1em〕</label>
                        <label><input type="radio" name="padding" value="middle" />middle 〔1.2em〕</label>
                        <label><input type="radio" name="padding" value="big" />big 〔1.5em〕</label>
                        <label><input type="radio" name="padding" value="large" />large 〔2em〕</label>
                        <label><input type="radio" name="padding" value="huge" />huge 〔2.5em〕</label>
                    </td>
                </tr>  
                <tr>
                    <th>fillet 〔圓角〕</th>
                    <td>
                        <label><input type="radio" name="fillet" value="none" />none</label>
                        <label><input type="radio" name="fillet" value="tiny" />tiny</label>
                        <label><input type="radio" name="fillet" value="base" />base</label>
                        <label><input type="radio" name="fillet" value="circle" />circle</label>
                    </td>
                </tr>   
                <tr>
                    <th>iconPostion 〔ICON位置或不顯示〕</th>
                    <td>
                        <label><input type="radio" name="iconPosition" value="top" />top</label>
                        <label><input type="radio" name="iconPosition" value="bottom" />bottom</label>
                        <label><input type="radio" name="iconPosition" value="left" />left</label>
                        <label><input type="radio" name="iconPosition" value="right" />right</label>
                        <label><input type="radio" name="iconPosition" value="none" />none</label>
                    </td>
                </tr>    
                <tr>
                    <th>iconShow 〔ICON類型〕</th>
                    <td>
                        <label><input type="radio" name="iconShow" value="heart" />heart 〔實的愛心〕</label>
                        <label><input type="radio" name="iconShow" value="empty-heart" />empty-heart 〔空的愛心〕</label>
                        <label><input type="radio" name="iconShow" value="checked" />checked 〔純勾勾〕</label>
                        <label><input type="radio" name="iconShow" value="square-checked" />square-checked 〔方框中有勾勾〕</label>
                        <label><input type="radio" name="iconShow" value="square" />square 〔純方形〕</label>
                        <label><input type="radio" name="iconShow" value="close" />close 〔純叉叉〕</label>
                        <label><input type="radio" name="iconShow" value="line" />line 〔純橫線〕</label>
                        <label><input type="radio" name="iconShow" value="empty-square" />empty-square 〔純方框〕</label>
                        <label><input type="radio" name="iconShow" value="rhombus" />rhombus 〔菱形〕</label>
                        <label><input type="radio" name="iconShow" value="star" />star 〔星形〕</label>
                        <label><input type="radio" name="iconShow" value="empty-star" />empty-star 〔空心星形〕</label>
                        <label><input type="radio" name="iconShow" value="circle" />circle 〔圓形〕</label>
                        <label><input type="radio" name="iconShow" value="empty-circle" />empty-circle 〔空心圓形〕</label>
                    </td>
                </tr>
                <tr>
                    <th>listPosition 〔清單位置〕</th>
                    <td>
                        <label><input type="radio" name="listPosition" value="outer" />outer 〔左外〕</label>
                        <label><input type="radio" name="listPosition" value="inner" />inner 〔左內〕</label>
                    </td>
                </tr>
                <tr>
                    <th>listStyle 〔清單類型〕</th>
                    <td>
                        <label><input type="radio" name="listStyle" value="disc" />disc 〔實心圓〕</label>
                        <label><input type="radio" name="listStyle" value="circle" />circle 〔空心圓〕</label>
                        <label><input type="radio" name="listStyle" value="decimal" />decimal 〔阿拉伯數字〕</label>
                        <label><input type="radio" name="listStyle" value="square" />square 〔方形〕</label>
                        <label><input type="radio" name="listStyle" value="decimal-leading-zero" />decimal-leading-zero 〔帶有0的阿拉伯數字〕</label>
                        <label><input type="radio" name="listStyle" value="lower-roman" />lower-roman 〔小寫的羅馬文字〕</label>
                        <label><input type="radio" name="listStyle" value="upper-roman" />upper-roman 〔大寫的羅馬文字〕</label>
                        <label><input type="radio" name="listStyle" value="lower-greek" />lower-greek 〔小寫的希臘文〕</label>
                        <label><input type="radio" name="listStyle" value="lower-latin" />lower-latin 〔小寫的拉丁字母〕</label>
                        <label><input type="radio" name="listStyle" value="upper-latin" />upper-latin 〔大寫的拉丁字母〕</label>
                    </td>
                </tr>
                <tr>
                    <th>styleName 〔色彩風格〕</th>
                    <td>
                        <label><input type="radio" name="styleName" value="resurgence" />resurgence 〔死灰復燃〕</label>
                        <label><input type="radio" name="styleName" value="spring" />spring 〔春天〕</label>
                        <label><input type="radio" name="styleName" value="wine" />wine 〔紅酒〕</label>
                        <label><input type="radio" name="styleName" value="bluesky" />bluesky 〔藍天〕</label>
                        <label><input type="radio" name="styleName" value="lovely" />lovely 〔可愛〕</label>
                        <label><input type="radio" name="styleName" value="luxury" />luxury 〔華貴〕</label>
                        <label><input type="radio" name="styleName" value="fantasy" />fantasy 〔奇幻〕</label>
                        <label><input type="radio" name="styleName" value="rigid" />rigid 〔鋼硬〕</label>
                        <label><input type="radio" name="styleName" value="waterside" />waterside 〔水畔〕</label>
                    </td>
                </tr>
                <tr>
                    <th>composition 〔佈局〕</th>
                    <td>
                        <label><input type="radio" name="composition" value="" /> 〔隨本身內容長度變化〕</label>
                        <label><input type="radio" name="composition" value="whole" />whole 〔百分百〕</label>
                        <label><input type="radio" name="composition" value="half" />half 〔一半（1/2）〕</label>
                        <label><input type="radio" name="composition" value="third" />third 〔三分之一（1/3）〕</label>
                        <label><input type="radio" name="composition" value="quarter" />quarter 〔四分之一（1/4）〕</label>
                        <label><input type="radio" name="composition" value="fifth" />fifth 〔五分之一（1/5）〕</label>
                        <label><input type="radio" name="composition" value="sixth" />sixth 〔六分之一（1/6）〕</label>
                        <label><input type="radio" name="composition" value="eighth" />eighth 〔八分之一（1/8）〕</label>
                        <label><input type="radio" name="composition" value="tenth" />tenth 〔十分之一（1/10）〕</label>
                        <label><input type="radio" name="composition" value="twelfth" />twelfth 〔十二分之一（1/12）〕</label>
                        <label><input type="radio" name="composition" value="tiny-em" />tiny-em 〔0.2em〕</label>
                        <label><input type="radio" name="composition" value="small-em" />small-em 〔0.5em〕</label>
                        <label><input type="radio" name="composition" value="little-em" />little-em 〔0.8em〕</label>
                        <label><input type="radio" name="composition" value="base-em" />base-em 〔1em〕</label>
                        <label><input type="radio" name="composition" value="middle-em" />middle-em 〔1.2em〕</label>
                        <label><input type="radio" name="composition" value="big-em" />big-em 〔1.5em〕</label>
                        <label><input type="radio" name="composition" value="large-em" />large-em 〔2em〕</label>
                        <label><input type="radio" name="composition" value="tiny-percent" />tiny-percent 〔1%〕</label>
                        <label><input type="radio" name="composition" value="small-percent" />small-percent 〔2.5%〕</label>
                        <label><input type="radio" name="composition" value="little-percent" />little-percent 〔4%〕</label>
                        <label><input type="radio" name="composition" value="base-percent" />base-percent 〔5%〕</label>
                        <label><input type="radio" name="composition" value="middle-percent" />middle-percent 〔7.5%〕</label>
                        <label><input type="radio" name="composition" value="big-percent" />big-percent 〔10%〕</label>
                        <label><input type="radio" name="composition" value="large-percent" />large-percent 〔15%〕</label>
                        <label><input type="radio" name="composition" value="tiny" />tiny 〔1px〕</label>
                        <label><input type="radio" name="composition" value="small" />small 〔2px〕</label>
                        <label><input type="radio" name="composition" value="little" />little 〔5px〕</label>
                        <label><input type="radio" name="composition" value="base" />base 〔10px〕</label>
                        <label><input type="radio" name="composition" value="middle" />middle 〔15px〕</label>
                        <label><input type="radio" name="composition" value="big" />big 〔20px〕</label>
                        <label><input type="radio" name="composition" value="large" />large 〔30px〕</label>
                    </td>
                </tr>
                <tr>
                    <th>disabled 〔能不能作用〕〕</th>
                    <td>
                        <label><input type="radio" name="disabled" value="true" />true</label>
                        <label><input type="radio" name="disabled" value="false" />false</label>
                    </td>
                </tr>
                <tr>
                    <th>〔其他設定〕</th>
                    <td>
                        <label><input type="checkbox" name="offBack" value="true" />offBack</label>
                        <label><input type="checkbox" name="styleBorder" value="true" />styleBorder</label>
                        <label><input type="checkbox" name="styleIcon" value="true" />styleIcon</label>
                        <label><input type="checkbox" name="styleIconBack" value="true" />styleIconBack</label>
                        <label><input type="checkbox" name="styleList" value="true" />styleList</label>
                    </td>
                </tr>
            </table>
        );
    }

};
