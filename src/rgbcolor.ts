import { IColor } from "./icolor";

/**
 * This is an example of something that:
 *  - implements the OUTPUT interface
 *  - AND has the requisite constructor
 */
export class RGBColor implements IColor {
    cssValue: string;

    constructor(r: number, g: number, b: number) {
        let red: string = this.toHex(r);
        let green: string = this.toHex(g);
        let blue: string = this.toHex(b);
        this.cssValue = `#${red}${green}${blue}`;
    }

    toHex(c: number): string {
        var hex: string = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
}