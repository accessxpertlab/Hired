import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Alert
} from "react-native";

import DatePicker from 'react-native-date-picker'
import { colors, fonts, fetchData, url } from "../Reausable/Reausable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MultiSelect } from "react-native-element-dropdown";

const CreateProfile = ({ navigation, route }: { navigation: any, route: any }) => {


    console.log('get param use', route.params.account)
    const [accountType, setAccountType] = useState('')
    const [skills, setSkills] = useState([]);
    const [isFocus, setIsFocus] = useState(false);
    const [selected, setSelected] = useState([]);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            // Do something when the screen blurs
            getData()

        });
        return unsubscribe;
    }, [navigation])

    const storeUserId = async (value: any) => {
        try {
            AsyncStorage.setItem('userId', value)
        }
        catch { }
    }

    const storeAccountType = async (value: any) => {
        try {
            AsyncStorage.setItem('accountType', value)
        }
        catch { }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('accountType')
            if (value != null) {
                setAccountType(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('Select a Starting and ending Date')

    const lang = [
        {
            index: '1',
            name: "C++"
        },
        {
            index: '2',
            name: "JAVA"
        },
        {
            index: '3',
            name: "PYTHON"
        },
        {
            index: '4',
            name: ".NET"
        },
        {
            index: '5',
            name: "REACT"
        },
        {
            index: '6',
            name: "MONTHLY"
        },
        {
            index: '7',
            name: "PHP"
        },
    ]

    return (

        <View style={styles.container}>
            <View style={{ height: '10%', width: '20%' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../Images/back.png')} />
                </TouchableOpacity>
            </View>
            <Image style={styles.meetingImg} resizeMode="contain" source={require('../Images/meeting.png')} />

            <View style={styles.userMainView}>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false} >
                    <View style={{ marginTop: 30 }}>
                        <View style={styles.nameMainView}>
                            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 10, fontFamily: fonts.poppins }}>Name</Text>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 50, justifyContent: "center" }}>
                                <TextInput style={{ marginLeft: 10, height: '100%', fontFamily: fonts.poppins }} placeholder="First Name"></TextInput>
                            </View>
                        </View>
                        <View style={styles.nameMainView}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: fonts.poppins }}>skills</Text>
                                <Text style={{ marginLeft: 5, fontSize: 16, fontFamily: fonts.poppins, fontWeight: '300' }}>(pick up to 10)</Text>
                            </View>

                            <MultiSelect
                                style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={lang}
                                search
                                maxHeight={200}
                                labelField="name"
                                valueField="index"
                                placeholder={!isFocus ? 'Add your skills' : '...'}
                                searchPlaceholder="Search..."
                                value={selected}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={(item: any) => {
                                    setSelected(item);
                                }}

                                selectedStyle={styles.selectedStyle}
                            />
                        </View>
                        {/* <View style={styles.nameMainView}>
                            <FlatList
                                nestedScrollEnabled={true}
                                numColumns={4}
                                scrollEnabled={false}
                                keyExtractor={(index) => index.index}
                                data={lang}
                                renderItem={({ item }) => {
                                    return <View style={styles.skillsView}>
                                        <Text style={{ fontSize: 14, color: 'white', padding: 4, alignSelf: 'center', fontFamily: fonts.poppins }}>{item.name}</Text>
                                    </View>
                                }}
                            />
                        </View> */}
                        <View style={styles.nameMainView}>

                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontFamily: fonts.poppins, fontWeight: '700' }}>Date Of Birth</Text>
                            </View>

                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 50, justifyContent: "center", }}>
                                <Image style={styles.image} source={require('../Images/calendar.png')} />

                                <TouchableOpacity activeOpacity={1} style={{ height: '100%', justifyContent: "center" }} onPress={() => setOpen(true)}>
                                    <Text style={{ fontFamily: fonts.poppins, fontSize: 13, color: 'gray', marginLeft: 10 }}>{text} </Text>
                                </TouchableOpacity>

                                <DatePicker
                                    modal
                                    mode="date"
                                    open={open}
                                    date={date}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        const year = date.getFullYear();
                                        const month = date.getMonth() + 1;
                                        const day = date.getDate();

                                        const dateString = `${day}-${month}-${year}`;
                                        setDate(date);
                                        setText(dateString)
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}
                                />
                            </View>
                        </View>

                        {/* Description View */}
                        <View style={styles.description}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: fonts.poppins }}>Description</Text>
                            </View>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 100, }}>
                                <TextInput multiline style={{ marginLeft: 10, fontFamily: fonts.poppins, textAlignVertical: 'auto' }} placeholder="Write a short description"></TextInput>
                            </View>
                        </View>

                        {/* Create Profile*/}
                        <TouchableOpacity activeOpacity={1} onPress={() => {

                            if (route.params.account == 'employee') {
                                colors.aquaGreen = '#69b8b6'
                            }
                            else if (route.params.account == "employer") {
                                colors.aquaGreen = '#ed54a5'
                            }

                            storeAccountType(route.params.account)
                            storeUserId('1'), navigation.navigate('JobCategory')

                        }}>
                            <View style={styles.createAccount}>
                                <Text style={{ marginTop: 17, marginBottom: 17, color: 'white', fontSize: 15, fontWeight: '700', fontFamily: fonts.poppins }}>Create Profile</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({

    meetingImg:
    {
        alignSelf: 'center',
        marginBottom: 10,
        height: '20%',
        width: '60%'
    },

    container:
    {
        height: '100%',
        width: '100%',
        backgroundColor: "#7DB3B1"
    },

    userMainView:
    {
        backgroundColor: 'white',
        justifyContent: "space-between",
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    nameMainView:
    {
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20
    },

    image:
    {
        resizeMode: 'contain',
        height: 20,
        width: 40,
        right: 0,
        position: "absolute"
    },
    description:
    {
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,

    },
    backImg:
    {
        resizeMode: "contain",
        marginLeft: 17,
        marginTop: 40,
        width: 30,
        height: 30,
        tintColor: 'white'
    },
    skillsView:
    {
        backgroundColor: '#00C7C7',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginRight: 5
    },
    createAccount:
    {
        backgroundColor: '#69b8b6',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: 30,
        borderRadius: Dimensions.get('screen').height / 2
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 10,
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    footerHeading: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey',
    },
    footerText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
    },
    dropdown: {
        height: 50,
        backgroundColor: '#EDEDED',
        borderColor: 'white',
        paddingHorizontal: 8,
        marginRight: 20
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        fontFamily: fonts.poppins,
        fontWeight: '600'
    },
    selectedTextStyle: {
        fontSize: 15,
        color: 'white',
        fontFamily: fonts.poppins,
        fontWeight: '600'
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    selectedStyle: {
        borderRadius: Dimensions.get('window').height,
        marginTop: 20,
        backgroundColor: colors.aquaGreen
    },
})

export default CreateProfile;