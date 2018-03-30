import { IColor } from "./icolor";

/**
 * This is the "static" side, including the constructor
 */
export interface IColorStatic {
    new (r: number, g: number, b: number) : IColor;
}