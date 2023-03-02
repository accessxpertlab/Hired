import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors, fonts } from "../Reausable/Reausable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }: { navigation: any }) => {

    const Stack = createNativeStackNavigator();

    const [accountType, setAccountType] = useState('')

    var userId: string

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

            getData()
        });
        return unsubscribe;
    }, [navigation])

    const getData = async () => {

        try {
            const value = await AsyncStorage.getItem('accountType')
            const userIdValue = await AsyncStorage.getItem('userId')

            userId = userIdValue ?? ""

            if (value != null) {
                setAccountType(value)
                console.log('accountType ', value)
            }
        } catch (e) {
            // error reading value
        }
    }

    return (

        <View style=
            {{
                backgroundColor: 'pink',
                height: '100%',
                width: '100%'
            }}>

            <Image style={{ height: '100%', width: '100%' }} resizeMode="cover" source={require('../Images/background.png')} />

            <TouchableOpacity style={styles.googleView} onPress={() => { navigation.navigate('AccountType') }} activeOpacity={1}>

                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', fontFamily: fonts.poppins }} >SIGN IN WITH GOOGLE</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookView} activeOpacity={1} onPress={() => navigation.navigate('AccountType')}>

                <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white', fontFamily: fonts.poppins }} >SIGN IN WITH FACEBOOK</Text>

            </TouchableOpacity>

            {/* Botoom Menu View */}
            <View style={styles.bottomMenuView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.personImg} source={require('../Images/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('JobCategory')
                }>
                    <Image style={{ resizeMode: 'contain', height: 25, width: 25, top: 15, tintColor: colors.gray }} source={require('../Images/search.png')} />
                </TouchableOpacity >

                <TouchableOpacity activeOpacity={1} style={[styles.plusView, { backgroundColor: colors.aquaGreen, }]} onPress={() => {

                    if (accountType != '') {
                        if (userId != "") {
                            if (accountType == "employee") {
                                navigation.navigate('Home')
                            }
                            else if (accountType == "employer") {
                                navigation.navigate('JobPost')
                            }
                        }
                        else {
                            navigation.navigate('CreateProfile')
                        }
                    }
                    else {
                        navigation.navigate('AccountType')
                    }
                }}>

                    <Image resizeMode="contain" style={{ height: '30%', width: '30%' }} source={require('../Images/plus.png')} />

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => {
                    console.log('account type', accountType)
                    if (accountType != '') {
                        if (accountType == "employer") {
                            navigation.navigate('EmployerWatchlist')
                        }
                        else if (accountType == "employee") {
                            navigation.navigate('Watchlist')
                        }
                    }
                    else {
                        navigation.navigate('Watchlist')
                    }
                }}>

                    <Image style={styles.personImg} source={require('../Images/bookmark.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.personImg} activeOpacity={1} onPress={() => navigation.navigate('PublicProfile')}>

                    <Image resizeMode="contain" style={{ height: 23, width: 45, marginTop: 10, alignSelf: "center", tintColor: colors.gray }} source={require('../Images/person.png')} />

                </TouchableOpacity>

            </View >

        </View>
    );
}

const styles = StyleSheet.create(
    {
        bottomMenuView:
        {
            backgroundColor: 'white',
            position: "absolute",
            bottom: 0,
            height: '11%',
            flexDirection: "row",
            justifyContent: 'space-around',
            width: '100%'
        },
        personImg:
        {
            resizeMode: "contain",
            height: 45,
            width: 25,
            top: 5,
            tintColor: colors.gray
        },

        plusView:
        {
            width: 80,
            borderRadius: 100,
            height: 80,
            marginTop: -40,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: "center"
        },

        facebookView:
        {
            backgroundColor: '#FF66D4',
            position: "absolute",
            height: '6%',
            width: '93%',
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            bottom: 150
        },

        googleView:
        {
            backgroundColor: colors.aquaGreen,
            position: "absolute",
            height: '6%',
            width: '93%',
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            bottom: 220
        },
    }
)

export default Login;