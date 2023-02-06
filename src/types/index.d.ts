interface Colors {
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
bgRedBright:number;
bgGreenBright:number;
bgYellowBright:number;
bgBlueBright:number;
bgMagentaBright:number;
bgCyanBright:number;
bgWhiteBright:number;
}
interface Kulay {
(...text:string[]):string;
c:string;
get reset():this;
get bold():this;
get dim():this;
get underscore():this;
get blink():this;
get reverse():this;
get hidden():this;
get black():this;
get red():this;
get green():this;
get yellow():this;
get blue():this;
get magenta():this;
get cyan():this;
get white():this;
get blackBright():this;
get gray():this;
get grey():this;
get redBright():this;
get greenBright():this;
get yellowBright():this;
get blueBright():this;
get magentaBright():this;
get cyanBright():this;
get whiteBright():this;
get bgBlack():this;
get bgRed():this;
get bgGreen():this;
get bgYellow():this;
get bgBlue():this;
get bgMagenta():this;
get bgCyan():this;
get bgWhite():this;
get bgBlackBright():this;
get bgGray():this;
get bgGrey():this;
get bgRedBright():this;
get bgGreenBright():this;
get bgYellowBright():this;
get bgBlueBright():this;
get bgMagentaBright():this;
get bgCyanBright():this;
get bgWhiteBright():this;
}
declare const colors:Colors;
declare const isColorSupported:boolean;
declare const kulay:Kulay;
export default kulay;
export {kulay,colors,isColorSupported,Colors,Kulay };
