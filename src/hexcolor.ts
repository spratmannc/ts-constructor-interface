import { IColor } from "./icolor";

export class HexColor implements IColor {
    cssValue: string;

    constructor(r: number, g: number, b: number) {
        this.cssValue = `rgb(${r}, ${g}, ${b})`;
    }
}