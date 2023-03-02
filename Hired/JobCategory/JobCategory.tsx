import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { colors, fonts } from '../Reausable/Reausable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JobCategory = ({ navigation }: { navigation: any }) => {

    const [accountType, setAccountType] = useState('')

    var userId: string

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            // Do something when the screen blurs
            getData()

        });

        return unsubscribe;
    }, [navigation])

    const getData = async () => {

        try {

            const value = await AsyncStorage.getItem('accountType')
            const userIdValue = await AsyncStorage.getItem('userId')

            userId = userIdValue ?? ""

            console.log('value is ', value, 'Userid', userId)

            if (value != null) {
                setAccountType(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    const categoryType = [
        {
            "index": "1",
            "name": "All"
        },
        {
            "index": "2",
            "name": "Full-Time"
        },
        {
            "index": "3",
            "name": "Part-Time"
        },
        {
            "index": "4",
            "name": "Project"
        },
        {
            "index": "5",
            "name": "Gig"
        },
    ]

    const categoryList = [
        {
            "index": '1',
            "name": "Accounting",
            "image": require('../Images/mail.png')
        },
        {
            "index": '2',
            "name": "Finance",
            "image": require('../Images/sales.png')
        },
        {
            "index": '3',
            "name": "Software",
            "image": require('../Images/software.png')
        },
        {
            "index": '4',
            "name": "IT",
            "image": require('../Images/it.png')
        },
        {
            "index": '5',
            "name": "Restaurant",
            "image": require('../Images/restaurant.png')
        },
        {
            "index": '6',
            "name": "Cleaning",
            "image": require('../Images/cleaning.png')
        },
        {
            "index": '7',
            "name": "General Labour",
            "image": require('../Images/graphic.png')
        },
        {
            "index": '8',
            "name": "Legal",
            "image": require('../Images/legal.png')
        },
        {
            "index": '9',
            "name": "Admin",
            "image": require('../Images/mail.png')
        },
        {
            "index": '10',
            "name": "HR",
            "image": require('../Images/sales.png')
        },
        {
            "index": '11',
            "name": "Engineering",
            "image": require('../Images/software.png')
        },
        {
            "index": '12',
            "name": "Sales",
            "image": require('../Images/it.png')
        },
        {
            "index": '13',
            "name": "Marketing",
            "image": require('../Images/restaurant.png')
        },
        {
            "index": '14',
            "name": "Healthcare",
            "image": require('../Images/cleaning.png')
        },
        {
            "index": '15',
            "name": "Graphics",
            "image": require('../Images/graphic.png')
        },
        {
            "index": '16',
            "name": "Handy",
            "image": require('../Images/legal.png')
        },
        {
            "index": '17',
            "name": "Executive",
            "image": require('../Images/mail.png')
        },
        {
            "index": '18',
            "name": "Phone Support",
            "image": require('../Images/sales.png')
        },
        {
            "index": '19',
            "name": "Retail",
            "image": require('../Images/software.png')
        },
        {
            "index": '20',
            "name": "Mechnic",
            "image": require('../Images/it.png')
        },
    ]

    return (
        <View style={styles.container}>

            <SafeAreaView>

                {/* Top menu */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>

                    <TouchableOpacity activeOpacity={1} onPress={() => { navigation.openDrawer(), console.log('Root clck') }}>
                        <Image resizeMode='contain' style={styles.sideImg} source={require('../Images/sidemenu.png')} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 22, fontWeight: '900', color: 'black', fontFamily: fonts.poppins }}>Browse Jobs</Text>
                    <View style={styles.personView}>
                        <Image resizeMode='contain' style={{ tintColor: 'white', height: 20, width: 25, alignSelf: 'center' }} source={require('../Images/person.png')} />
                    </View>
                </View>

                {/* Search View */}
                <View style={{ justifyContent: 'center', marginTop: 10 }}>
                    <View style={styles.searchView}>
                        <Image style={{ resizeMode: 'contain', height: 25, width: 30, marginLeft: 10 }} source={require('../Images/search.png')} />
                        <TextInput placeholder='Search' style={styles.searchTxt}>
                        </TextInput>
                    </View>
                </View>

                {/* Category Slider View */}
                <FlatList style={{ backgroundColor: ' black', marginLeft: 20, marginRight: 10, height: 40 }}
                    horizontal={true}
                    scrollEnabled={true}
                    data={categoryType}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index) => { return index.index }}
                    renderItem={({ item }) => { return <Text style={{ textAlign: 'center', alignSelf: 'center', fontWeight: '600', fontSize: 13, marginLeft: 15, marginRight: 15, color: 'black', fontFamily: fonts.poppins }}>{item.name}</Text> }} />

                {/* Category List */}
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false}>

                    <FlatList contentContainerStyle={{ alignSelf: 'center' }}
                        data={categoryList}
                        numColumns={4}
                        nestedScrollEnabled={true}
                        scrollEnabled={false}
                        keyExtractor={(index) => { return index.index }}
                        renderItem={({ item }) => {

                            return (

                                <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => {
                                    if (accountType != '') {
                                        if (accountType == "employee") {
                                            navigation.navigate('JobList')
                                        }
                                    }
                                    else {
                                        navigation.navigate('JobList')
                                    }
                                }}>
                                    <View style={styles.jobCatView}>
                                        <Image resizeMode='contain' style={{ height: 30, width: 30, tintColor: 'black' }} source={item.image} />
                                        <Text numberOfLines={1} style={styles.catTxt}>{item.name}</Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />
                    <View style={{ height: 300, }}></View>
                </ScrollView>

            </SafeAreaView >

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

        </View >
    )
}

const styles = StyleSheet.create({

    container:
    {
        flex: 1,
        height: '100%',
        backgroundColor: '#E6E6E6'
    },

    searchView: {
        backgroundColor: 'white',
        height: 55,
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        elevation: 3,
        shadowRadius: 7,
        borderRadius: 10,
        shadowOpacity: 0.2
    },
    searchTxt:
    {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
        width: '80%',
        height: '100%',
        fontFamily: fonts.poppins
    },
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
        tintColor: colors.gray,
        top: 5,
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
    personView:
    {
        backgroundColor: colors.Darkblue,
        height: 40,
        width: 45,
        borderRadius: 8,
        justifyContent: 'center'
    },
    sideImg:
    {
        height: 30,
        width: 30,
        tintColor: 'gray'
    },
    jobCatView:
    {
        borderRadius: 13,
        height: 75,
        paddingRight: 7,
        paddingLeft: 7,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10
    },
    catTxt:
    {
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
        width: 60,
        fontFamily: fonts.poppins
    },

});

export default JobCategory;