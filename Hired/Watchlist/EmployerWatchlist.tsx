import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../Reausable/Reausable'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EmployerWatchlist = ({ navigation }: { navigation: any }) => {

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
            "name": "Posted Jobs"
        },
        {
            "index": "2",
            "name": "Followers"
        },
        {
            "index": "3",
            "name": "Saved Applicants"
        },
        {
            "index": "4",
            "name": "Saved Videos"
        },
    ]

    const jobsList = [
        {
            "index": "1",
            "title": "Accounting Manager",
            "name": "Diem Technologies",
            "price": "$120,000 - $150,000 / yr",
            'color': 'black'
        },
        {
            "index": "2",
            "title": "Account Receivable Clerk",
            "name": "Diem Technologies",
            "price": "$120,000 - $150,000 / yr",
            'color': 'pink'
        },
        {
            "index": "3",
            "title": "Accountant",
            "name": "Diem Technologies",
            "price": "$120,000 - $150,000 / yr",
            'color': 'green'
        },
        {
            "index": "4",
            "title": "Account Receivable Clerk",
            "name": "Diem Technologies",
            "price": "$120,000 - $150,000 / yr",
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

                    <Text style={{ fontSize: 25, fontFamily: fonts.poppins, fontWeight: 'bold', color: 'black' }}>Watchlist</Text>
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
                            height: '100%'
                        }}>
                        </TextInput>
                    </View>
                </View>

                {/* followers and following category */}
                <FlatList style={{ backgroundColor: ' black', marginLeft: 10, marginRight: 10, height: 45 }}
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
                                <TouchableOpacity activeOpacity={1} >
                                    <View style={styles.contentView}>
                                        <View style={{ height: 70, width: 70, marginLeft: 10, backgroundColor: item.color, alignSelf: 'center', alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 22, fontWeight: '700', color: 'white', fontFamily: fonts.poppins }}>diem</Text>
                                        </View>

                                        <View style={{ marginTop: 10, marginLeft: 15, height: 75, justifyContent: 'space-evenly', flex: 1 }}>

                                            <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: '800', color: 'black', fontFamily: fonts.poppins }}>{item.title}</Text>

                                            <Text numberOfLines={2} style={{ fontWeight: '600', fontSize: 12, color: 'black', marginTop: 10, fontFamily: fonts.poppins }}>{item.name}</Text>

                                            <Text style={{ fontSize: 11, marginTop: 10, fontWeight: '700', color: 'black', marginBottom: 10, fontFamily: fonts.poppins }}>{item.price}</Text>
                                        </View>

                                        <View style={{ marginLeft: 'auto', marginRight: 8, flex: .4, alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
                                            <Image style={{ resizeMode: 'contain', height: 20, width: 25, tintColor: colors.gray }} source={require('../Images/bookmark.png')} />
                                            <Text style={{ fontSize: 10, fontWeight: '400', fontFamily: fonts.poppins }}> 3 days ago</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
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

    contentView:
    {
        backgroundColor: 'white',
        marginLeft: 20,
        marginBottom: 15,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
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
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        alignSelf: 'center',
        fontSize: 13,
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

export default EmployerWatchlist;