import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR, width } from "../constants/theme";

const Options = ( props) =>{
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <Image source={props.imageSource} style={styles.image}></Image>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.subText}>{props.subtext}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: COLOR.darkGrey,
        width: 135,
        height: 135,
        padding:20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
        borderColor: COLOR.blue
    },
    image:{
        width: 50,
        height:50
    },
    text:{
        fontWeight: "bold",
        fontSize: 18,
        color: COLOR.blue
    },
    subText:{
        fontWeight: "bold",
        fontSize: 12,
        color: COLOR.blue
    }
})
export default Options;