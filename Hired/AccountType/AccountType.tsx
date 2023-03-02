import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors, fonts } from '../Reausable/Reausable'
import { ScrollView } from 'react-native-gesture-handler'

const AccountType = ({ navigation }: { navigation: any }) => {

    const [employee, setEmployee] = useState('white')
    const [employer, setEmployer] = useState('white')
    const [brand, setBrand] = useState('white')
    const [account, setAccount] = useState('')

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

            // Do something when the screen blurs
            // getData()
            setEmployee('white')
            setEmployer('white')
            setBrand('white')
        });

        return unsubscribe;

    }, [navigation])

    // const getData = async () => {

    //     try {
    //         const value = await AsyncStorage.getItem('accountType')
    //         console.log('accountType ', value)
    //         if (value != null) {
    //             if (value == 'employee') {
    //                 colors.aquaGreen = '#69b8b6'
    //             }
    //             else {
    //                 colors.aquaGreen = '#ed54a5'
    //             }
    //         }
    //     } catch (e) {
    //         // error reading value
    //     }
    // }

    return (

        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#E6E6E6' }}>
                <ScrollView bounces={false}>
                    <View style={{ flexDirection: 'column', height: 100, marginTop: 20, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', fontFamily: fonts.poppins }}>Let's Get Started</Text>
                        <Text style={{ marginLeft: 20, marginRight: 20, textAlign: 'center', fontSize: 13, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Please select the type of profile that you want to start with (you add new profile types later)</Text>
                    </View>

                    {/* talent View */}
                    <View style={{ marginTop: 30 }}>

                        <TouchableOpacity activeOpacity={1} onPress={() => { setEmployee('#00C7C7'), setEmployer('white'), setBrand('white'), setAccount('employee') }}>
                            <View style={[styles.contentView, { borderColor: employee }]}>
                                <View style={[styles.employeeView, { backgroundColor: '#00C7C7' }]} >
                                    <Image style={styles.imageView} source={require('../Images/search1.png')} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontWeight: '500', fontFamily: fonts.poppins }}>Talent</Text>
                                    <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: fonts.poppins }}>I am looking for work opportunities</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} onPress={() => { setEmployee('white'), setEmployer('#00C7C7'), setBrand('white'), setAccount('employer') }}>
                            <View style={[styles.contentView, { marginTop: 15, borderColor: employer }]}>
                                <View style={[styles.employeeView, { backgroundColor: '#eb499a' }]} >
                                    <Image style={styles.imageView} source={require('../Images/employer.png')} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontWeight: '500', fontFamily: fonts.poppins }}>Company</Text>
                                    <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: fonts.poppins }}>Looiking for talented workers and promoting your company</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} onPress={() => { setEmployee('white'), setEmployer('white'), setBrand('#00C7C7') }}>

                            <View style={[styles.contentView, { marginTop: 15, borderColor: brand }]}>
                                <View style={[styles.employeeView, { backgroundColor: 'gray' }]} >
                                    <Image style={styles.imageView} source={require('../Images/megaphone.png')} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontWeight: '500', fontFamily: fonts.poppins }}>Personal Brand / Influencer</Text>
                                    <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: fonts.poppins }}>Looiking to promote yout brand and provide career enchancement conent</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Apply Job View */}
                <TouchableOpacity style={styles.applyJobView} activeOpacity={1} onPress={() => {

                    navigation.navigate('CreateProfile', { 'account': account })
                }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 15, paddingLeft: 40, paddingRight: 40, fontWeight: '700', fontFamily: fonts.poppins }}>Next</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView >
        </View >
    )
}

export default AccountType;

const styles = StyleSheet.create({

    employeeView:
    {
        margin: 10,
        height: 70,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView:
    {
        justifyContent: 'flex-start',
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    imageView:
    {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        tintColor: 'white'
    },
    contentView:
    {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
    },
    applyJobView:
    {
        backgroundColor: '#eb499a',
        height: 45,
        borderRadius: 10,
        bottom: 40,
        right: 20,
        position: 'absolute',
        justifyContent: 'center'
    },
})