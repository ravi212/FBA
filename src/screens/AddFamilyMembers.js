import React, { useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Term} from '../constants/terms';
import { COLOR, FONTS } from '../constants/theme';
import Elevations from 'react-native-elevation'
import ContactCard from '../components/contactCard';
import Contacts, { getAll } from 'react-native-contacts';
import images from '../constants/images';
const Separator = () => (
    <View style={styles.separator} />
  );
const AddFamilyMembers = () =>{

    const [contacts, setContacts] = useState();
    useEffect(()=>{
        if(Platform.OS === 'ios'){
            Contacts.getAll((err, contacts)=>{
                if(err){
                    throw err;
                }
                setContacts({contacts});
            })
        }else if(Platform.OS === 'android'){
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            ).then(()=>{
                Contacts.getAll()
                .then((contact)=>{
                    setContacts(contact);
                    console.log(contacts);
                })
                .catch(e=>{
                    console.log(e);
                })
            })
        }
    },[contacts])
    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.wrapper}>
                    <FlatList 
                        style={styles.list}
                        data={contacts}
                        renderItem={({ item, index }) => {
                        // if(item.hasThumbnail === false){
                        // return <ContactCard
                        // contactNumber={item.phoneNumbers.map(phone=>phone.number)}
                        // imageSource={images.Logo} 
                        // name={item.givenName + ' ' + item.familyName}
                        // />
                        // }else{
                        return <ContactCard
                        contactNumber={item.phoneNumbers.map(phone=>(
                            phone.label === 'mobile'?
                            phone.number: null))}
                        imageSource={images.Logo} 
                        contactName={item.givenName + ' ' + item.familyName}
                        />

                        }}
                        numColumns={2}
                        keyExtractor={(item,index)=>index}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                <View style={styles.buttonWrapper}>
                <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? COLOR.yellow
                                    : COLOR.pressed
                                },
                                
                                styles.button
                                ]} onPress={()=>{}}>
                        <Text style={styles.text}>Send</Text>
                </Pressable>
                </View>
            </View>
        </View>

    )
};
const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
        backgroundColor: COLOR.blue,
    },
    wrapper:{
        flex:1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop:0,
        paddingBottom:20,
    },
    textTitle: {
        fontSize: 16,
        fontFamily: FONTS.font,
        fontWeight: 'bold',
        color:COLOR.blue
    },
    textContent:{
        fontSize: 12,
        fontFamily: FONTS.font,
        color: COLOR.blue,
        marginTop:10,
        marginBottom:10,
        textAlign: 'justify'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      buttonWrapper:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:0
      },    
      button: {
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        ...Elevations[4],
        width:'60%'
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        letterSpacing: 0.25,
        color: COLOR.blue
      },
      list:{
          margin:20,
      }
});
export default AddFamilyMembers;