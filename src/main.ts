import "colors";
import { IColorStatic } from "./icolorstatic";
import { RGBColor } from "./rgbcolor";
import { HexColor } from "./hexcolor";
import { IColor } from "./icolor";
import { InvalidColor } from "./invalidcolor";

// get a collection of classes that can be
// instantiated as color translators
var translators: IColorStatic[] = [ RGBColor, HexColor ];

// invalid translator matches the desired instance interface when instantiated,
// but its constructor does not match.  so it is not eligible for our little factory
// and results in an error when the following line is uncommented:
// translators.push(InvalidColor);

// declare a set of rgb arrays for translating into CSS strings
var colors: number[][] = [
    [0, 0, 0],
    [0, 255, 255],
    [21, 54, 22]
];

colors.forEach(grouping => {
    let [red, green, blue] = grouping;

    console.log(grouping.toString().blue);

    translators.forEach(translator => {

        // instantiate the color with some values
        let color: IColor = new translator(red, green, blue);

        // print the output values
        console.log(`\t=> ${color.cssValue.green}`);

    });
});