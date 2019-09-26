import * as _ from 'lodash';
import { ArrayUtil } from './array-util';

export class KeyCodeUtil {
    static readonly BACKSPACE = 8;
    static readonly A = 65;
    static readonly C = 67;
    static readonly X = 88;
    // begin keycode home,end,left,right
    static readonly BEGIN_HOME_END_LEFT_RIGHT = 35;
    // end keycode home,end,left,right
    static readonly END_HOME_END_LEFT_RIGHT = 39;
    static readonly DELETE = 46;
    static readonly TAB = 9;
    static readonly ESCAPE = 27;
    static readonly ENTER = 13;
    static readonly DOT = 190;
    static readonly COMMA = 188;
    static readonly DECIMAL_POINT = 110;

    public static isSpecialKey(event): boolean {
        // Check if: backspace ,delete, tab, escape, enter, . and ,
        if (ArrayUtil.inArray([this.BACKSPACE, this.DELETE, this.TAB, this.ESCAPE, this.ENTER, this.DECIMAL_POINT, this.DOT, this.COMMA], event.keyCode)
            // Check if: Ctrl/cmd+A
            || (event.keyCode === this.A && (event.ctrlKey === true || event.metaKey === true))
            // Check if: Ctrl/cmd+C
            || (event.keyCode === this.C && (event.ctrlKey === true || event.metaKey === true))
            // Check if: Ctrl/cmd+X
            || (event.keyCode === this.X && (event.ctrlKey === true || event.metaKey === true))
            // Check if: home, end, left, right
            || (event.keyCode >= this.BEGIN_HOME_END_LEFT_RIGHT && event.keyCode <= this.END_HOME_END_LEFT_RIGHT)) {
            return true;
        }
        return false;
    }

    public static isNumberKey(event): boolean {
        // Check if: not a number
        if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
            return false;
        }
        return true;
    }


}

