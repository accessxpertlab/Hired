import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors, fonts } from '../Reausable/Reausable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const SideMenu = ({ navigation }: { navigation: any }) => {

    const [accountType, setAccountType] = useState('')

    React.useEffect(() => {

        getData()

    })

    const getData = async () => {

        try {
            const value = await AsyncStorage.getItem('accountType')
            const userIdValue = await AsyncStorage.getItem('userId')

            if (value != null) {
                setAccountType(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    const storeUserId = async (value: any) => {
        try {
            await AsyncStorage.setItem('userId', value)
        }
        catch { }
    }

    const storeAccountType = async (value: any) => {
        try {
            await AsyncStorage.setItem('accountType', value)
        }
        catch { }
    }

    return (

        // <View style={{ flex: 1, backgroundColor: 'red', height: '60%' }}>

        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false} bounces={false} >

            <View style={styles.mainView}>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/sidemenu.png')} />
                    </TouchableOpacity>
                    <Text style={styles.menuTxt}>Menu</Text>
                </View>

                <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }}></View>

                <TouchableOpacity style={styles.touchClick}>
                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/star.png')} />

                        <Text style={styles.menuTxt}>Invite Friends</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchClick} >
                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/bookmark.png')} />

                        <Text style={styles.menuTxt}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchClick}>
                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/mail.png')} />

                        <Text style={styles.menuTxt}>Notifications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchClick} activeOpacity={1} onPress={() => { navigation.navigate('PurchaseAdd') }}>

                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/graph.png')} />
                        <Text style={styles.menuTxt}>Buy Credits</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchClick}>
                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/cardboard.png')} />

                        <Text style={styles.menuTxt}>News Feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchClick}>
                    <View style={styles.clickView}>
                        <Image style={{ height: 25, width: 25, tintColor: 'black' }} source={require('../Images/play.png')} />

                        <Text style={styles.menuTxt}>Videos</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 1, backgroundColor: 'gray', marginTop: 5 }}></View>

                <TouchableOpacity activeOpacity={1} onPress={() => {

                    // if (accountType == 'employee') {
                    //     colors.aquaGreen = '#69b8b6'
                    // }
                    // else if (accountType == "employer") {
                    //     colors.aquaGreen = '#ed54a5'
                    // }

                    storeAccountType(''), storeUserId('')
                    navigation.navigate('AccountType')
                }} >

                    <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 20, marginRight: 10, alignItems: 'center' }}>

                        <Image style={{ height: 50, width: 50, borderRadius: 100 }} source={require('../Images/userImg.jpg')} />

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: '500', color: 'black', fontFamily: fonts.poppins }}>Switch to</Text>
                            {
                                accountType == "employee" ? <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Employer Account</Text> : <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Employee Account</Text>

                            }

                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

export default SideMenu;

const styles = StyleSheet.create({

    mainView:
    {
        marginRight: 100,
        backgroundColor: 'white',
        height: '80%',
        width: '100%',
        borderRadius: 50,
    },
    clickView:
    {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchClick:
    {
        marginTop: 20,
        marginBottom: 20
    },
    menuTxt:
    {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        fontFamily: fonts.poppins,
    }
})