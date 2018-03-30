import { IColor } from "./icolor";

/**
 * This class has an invalid constructor
 * to be a proper IColorStatic
 */
export class InvalidColor implements IColor {
    cssValue: string;

    constructor(name: string) {
        this.cssValue = name;
    }
}