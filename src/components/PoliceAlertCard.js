import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR } from "../constants/theme";

const PoliceAlert = (props) =>{
    return (
      <TouchableOpacity onPress={()=> {props.navigation.push('UploadVideo');}}>
        <View style={styles.policAlert}>
          <Text style={styles.text}>{props.text}</Text>
          <Text style={styles.subtext}>{props.subtext}</Text>
          <Image source={props.imageSource} style={styles.image}/>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    policAlert:{
        height: 220,
        width: 300,
        borderRadius: 50,
        backgroundColor: COLOR.yellow,
        justifyContent:"center",
        alignItems: "center"
        // position: 'absolute',
        // left: 40,
        // top:40
      },
      image:{
          width: 80,
          height: 80,
          
      },
      text:{
        color: COLOR.blue,
        fontWeight: "bold",
        fontSize: 30,

      },
      subtext:{
        color: COLOR.blue,
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20
      }
})
export default PoliceAlert;