import React, { useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Term} from '../constants/terms';
import { COLOR, FONTS } from '../constants/theme';
import Elevations from 'react-native-elevation'
import ContactCard from '../components/contactCard';
import Contacts, { getAll } from 'react-native-contacts';
import images from '../constants/images';
import SwitchSelector from "react-native-switch-selector";
const Separator = () => (
    <View style={styles.separator} />
  );

const AppUsers = [
    {
        thumbNail: images.Logo,
        familyName: 'Deep',
        givenName: 'Raj',
        phoneNumbers:[{
            phone:{
                label:'mobile',
                number:'223322345'
            } 
        }]
    },
    {
        thumbNail: images.Logo,
        familyName: 'Sudesh',
        givenName: 'Kumari',
        phoneNumbers:[{
            phone:{
                label:'mobile',
                number:'223322345'
            } 
        }]
    },
    {
        thumbNail: images.Logo,
        familyName: 'Suresh',
        givenName: 'Kumar',
        phoneNumbers:[{
            phone:{
                label:'mobile',
                number:'223322345'
            } 
        }]
    },
    {
        thumbNail: images.Logo,
        familyName: 'Naresh',
        givenName: 'Kumar',
        phoneNumbers:[{
            phone:{
                label:'mobile',
                number:'223322345'
            } 
        }]
    },
    {
        thumbNail: images.Logo,
        familyName: 'Manik',
        givenName: 'Saini',
        phoneNumbers:[{
            phone:{
                label:'mobile',
                number:'223322345'
            } 
        }]

    }
];
const AddFamilyMembers = ({navigation}) =>{
    const [appUsers, setAppUsers] = useState(AppUsers);
    const [contacts, setContacts] = useState();
    useEffect(async ()=>{
        if(Platform.OS === 'ios'){
            Contacts.getAll((err, contacts)=>{
                if(err){
                    throw err;
                }
                setContacts({contacts});
            })
        }else if(Platform.OS === 'android'){
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            );
            
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the contacts");
                Contacts.getAll()
                .then((contact)=>{
                        setContacts(contact);
                        contacts.map(con=>{
                            con.phoneNumbers.map(phone=>{
                                console.log(phone);
                            });
                        });
                })
                .catch(e=>{
                    console.log(e);
                })
              } else {
                navigation.navigate('Tabs');
                console.log("Contacts permission denied");
              }
        }
    },[])
    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.wrapper}>
            <View style={styles.listTab}>
                <SwitchSelector
                    initial={0}
                    onPress={value => {
                        console.log(value);
                        if(value === 'Users'){
                            return setContacts(AppUsers);
                        }else{
                            return setContacts(contacts); 
                        }
                        }}
                    textColor={'#ffffff'} //'#7a44cf'
                    selectedColor={COLOR.blue}
                    buttonColor={COLOR.yellow}
                    borderColor={COLOR.lightGrey}
                    backgroundColor={COLOR.blue}
                    textStyle={{fontSize:16,fontWeight:'bold'}}
                    selectedTextStyle={{fontSize:16,fontWeight:'bold'}}
                    buttonMargin={5}
                    hasPadding
                    options={[
                        { label: "Send Invites", value: 'Invites'},
                        { label: "App Users", value: 'Users'},   
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                    />
                    {/* <View style={styles.buttons}>
                    <Pressable style={({ focused }) => [
                                    {
                                        backgroundColor: focused
                                        ? styles.activeButton
                                        : styles.inActiveButton
                                    },
                                    styles.uploadbutton
                                    ]} onPress={()=>{}}>
                            <Text style={styles.text}>Uploaded</Text>
                    </Pressable>
                    <Pressable style={({ focused }) => [
                                    {
                                        backgroundColor: focused
                                        ? styles.activeButton
                                        : styles.inActiveButton
                                    },
                                    styles.downloadbutton
                                    ]} onPress={()=>{}}>
                            <Text style={styles.text}>Downloaded</Text>
                    </Pressable>
                    </View> */}
                </View>
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
                        keyExtractor={(item,index)=>item.id}
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
        justifyContent:'center',
        alignItems:'center'
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
        paddingTop:0,
        width:'80%'
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
      },
      listTab:{
        width:'80%',
        marginTop: 30,
    },
});
export default AddFamilyMembers;