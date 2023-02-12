declare const supportsColor:boolean;
declare const colors:{
reset:number;
bold:number;
dim:number;
underscore:number;
blink:number;
reverse:number;
hidden:number;
black:number;
red:number;
green:number;
yellow:number;
blue:number;
magenta:number;
cyan:number;
white:number;
blackBright:number;
gray:number;
grey:number;
redBright:number;
greenBright:number;
yellowBright:number;
blueBright:number;
magentaBright:number;
cyanBright:number;
whiteBright:number;
bgBlack:number;
bgRed:number;
bgGreen:number;
bgYellow:number;
bgBlue:number;
bgMagenta:number;
bgCyan:number;
bgWhite:number;
bgBlackBright:number;
bgGray:number;
bgGrey:number;
bgRedBright: number;
bgGreenBright: number;
bgYellowBright: number;
bgBlueBright: number;
bgMagentaBright: number;
bgCyanBright: number;
bgWhiteBright: number;
};
type Kulay =
& {
[key in keyof typeof colors]: Kulay;
}
& {
(...text: unknown[]): string;
c: string;
};
declare const createKulay:(supportColor?: boolean) => Kulay;
declare const kulay:Kulay;
export default kulay;
export { colors, createKulay, Kulay, kulay, supportsColor };
