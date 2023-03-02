import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../Reausable/Reausable'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Watchlist = ({ navigation }: { navigation: any }) => {

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

            console.log('accountType ', value)
            if (value != null) {

                setAccountType(value)

            }
        } catch (e) {
            // error reading value
        }
    }

    const watchListtype = [
        {
            "index": "1",
            "name": "My Followers"
        },
        {
            "index": "2",
            "name": "Following"
        },
        {
            "index": "3",
            "name": "Videos"
        },
        {
            "index": "4",
            "name": "Saved Jobs"
        },
        {
            "index": "5",
            "name": "Applied"
        },
    ]

    const jobsList = [
        {
            "index": "1",
            "title": "Zahid Rahman",
            "name": "Exclusive with IT background",
            "price": " 3 days ago",
            'color': 'black'
        },
        {
            "index": "2",
            "title": "Accouting Manager",
            "name": "Finance expert with 4 year experience",
            "price": "4 days ago",
            'color': 'pink'
        },
        {
            "index": "3",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "9 days ago",
            'color': 'green'
        },
        {
            "index": "4",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "2 days ago",
            'color': 'blue'
        },
    ]

    return (

        <View style={styles.container}>
            <SafeAreaView>

                {/* Top menu */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.openDrawer()}>
                        <Image style={{
                            height: 30,
                            width: 30,
                            tintColor: 'gray'
                        }} source={require('../Images/sidemenu.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', fontFamily: fonts.poppins }}>Watchlist</Text>
                    <View style={styles.personView}>
                        <Image resizeMode='contain' style={{ tintColor: 'white', height: 20, width: 25, alignSelf: 'center' }} source={require('../Images/person.png')} />
                    </View>
                </View>

                {/* Search View */}
                <View style={{ justifyContent: 'center', marginTop: 10 }}>
                    <View style={styles.searchView}>
                        <Image style={{ resizeMode: 'contain', height: 25, width: 25, marginLeft: 10 }} source={require('../Images/search.png')} />
                        <TextInput placeholder='Search' style={{
                            fontSize: 20,
                            fontWeight: '500',
                            marginLeft: 10,
                            width: '80%',
                            height: '100%',
                            fontFamily: fonts.poppins
                        }}>
                        </TextInput>
                    </View>
                </View>

                {/* followers and following category */}
                <FlatList style={{ backgroundColor: ' black', marginLeft: 10, marginRight: 10, height: 70 }}
                    horizontal={true}
                    scrollEnabled={true}
                    data={watchListtype}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index) => { return index.index }}
                    renderItem={({ item }) => { return <Text style={styles.categoryTxt}>{item.name}</Text> }} />

                {/* Following List View */}
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false}>
                    <FlatList
                        data={jobsList}
                        horizontal={false}
                        numColumns={1}
                        scrollEnabled={false}
                        keyExtractor={(index) => { return index.index }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ApplicationList')}>
                                    <View style={{ backgroundColor: 'white', height: 100, marginLeft: 20, marginBottom: 15, marginRight: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ height: 70, width: 70, marginLeft: 15, backgroundColor: item.color, alignSelf: 'center', borderRadius: 10 }}>
                                        </View>

                                        <View style={{ marginTop: 10, marginLeft: 15, height: 75, justifyContent: 'space-evenly', flex: 1 }}>
                                            <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: '800', color: 'black', fontFamily: fonts.poppins }}>{item.title}</Text>
                                            <Text numberOfLines={2} style={{ fontWeight: '600', fontFamily: fonts.poppins, fontSize: 12, color: 'black' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 11, fontFamily: fonts.poppins, marginTop: 10, fontWeight: '700', color: 'black' }}>{item.price}</Text>
                                        </View>

                                        <TouchableOpacity style={styles.followView} activeOpacity={1}>
                                            <View>
                                                <Text numberOfLines={2} style={{ fontSize: 13, color: 'white', fontFamily: fonts.poppins, textAlign: 'center', fontWeight: '600' }}>Following</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />

                    <View style={{ height: 350 }}></View>

                </ScrollView>
            </SafeAreaView>

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
        </View >
    )
}


const styles = StyleSheet.create({

    container:
    {
        height: '100%'
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
    categoryTxt:
    {
        textAlign: 'center',
        // width: 80,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        margin: 5,
        color: 'black',
        fontFamily: fonts.poppins
    },
    followView:
    {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 35,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 10,
        marginLeft: 'auto',
        borderRadius: 10,
        backgroundColor: colors.aquaGreen,
        marginBottom: 15,
        alignItems: 'center'

    },
    personView:
    {
        backgroundColor: colors.Darkblue,
        height: 40,
        width: 45,
        borderRadius: 8,
        justifyContent: 'center'
    }
})

export default Watchlist;