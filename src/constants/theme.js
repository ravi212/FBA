import { Dimensions } from "react-native";
export const {width,height} = Dimensions.get("window");

export const COLOR = {
    blue: '#161D6F',
    yellow: '#FFC150',
    lightGrey: '#FBFBFC',
    darkGrey: '#F5F6FA',
    pressed: '#FFD900'
}
export const SIZES = {
    //font sizes

    //global sizes

    //app dimensions
    width,
    height
}

export const FONTS = {
    font: 'LibreFranklin-Black'
}

export const appTheme = {SIZES,FONTS,COLOR};

export default appTheme;