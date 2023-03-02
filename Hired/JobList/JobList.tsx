import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { colors, fonts } from '../Reausable/Reausable'
import AsyncStorage from '@react-native-async-storage/async-storage'

const JobList = ({ navigation }: { navigation: any }) => {

    const [accountType, setAccountType] = useState('')

    var userId: string
    useEffect(() => {

        getData()

    })

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

    const jobsList = [
        {
            "index": "1",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$180.000 - 111.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'black'
        },
        {
            "index": "2",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$145.000 - 130.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'pink'
        },
        {
            "index": "3",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$160.000 - 150.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'green'
        },
        {
            "index": "4",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$160.000 - 150.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'blue'
        },
        {
            "index": "5",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$120.000 - 130.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'green'
        },
        {
            "index": "6",
            "title": "Accouting Manager",
            "name": "Diem Technologies",
            "price": "$120.000 - 151.000 /yr",
            'image': require('../Images/bookmark.png'),
            'color': 'pink'
        },
    ]


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%', flex: 1 }}>

                {/* Top menu */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>

                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.openDrawer()}>
                        <Image style={{ height: 30, width: 30, tintColor: 'gray' }} source={require('../Images/sidemenu.png')} />
                    </TouchableOpacity>

                    <Text style={{ fontFamily: fonts.poppins, fontSize: 25, fontWeight: 'bold', color: 'black' }}>Finance Jobs</Text>
                    <View style={styles.personView}>
                        <Image resizeMode='contain' style={{ tintColor: 'white', height: 20, width: 30, alignSelf: 'center' }} source={require('../Images/person.png')} />
                    </View>
                </View>

                {/* Category Slider View */}
                <FlatList style={{ backgroundColor: ' black', marginLeft: 10, marginRight: 10, height: 70 }}
                    horizontal={true}
                    bounces={false}
                    scrollEnabled={true}
                    data={categoryType}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index) => { return index.index }}
                    renderItem={({ item }) => { return <Text style={styles.categoryTxt}>{item.name}</Text> }} />

                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false}>

                    <FlatList
                        data={jobsList}
                        horizontal={false}
                        numColumns={1}
                        scrollEnabled={false}
                        keyExtractor={(index) => { return index.index }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ViewJobPost')}>
                                    <View style={{ backgroundColor: 'white', height: 100, marginLeft: 20, marginBottom: 15, marginRight: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', }}>
                                        <View style={{ height: 70, width: 70, marginLeft: 15, backgroundColor: item.color, alignSelf: 'center', borderRadius: 10 }}>
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft: 10, height: 75, justifyContent: 'space-evenly' }}>
                                            <Text style={{ fontSize: 13, fontFamily: fonts.poppins, fontWeight: '800', color: 'black' }}>{item.title}</Text>
                                            <Text style={{ fontWeight: '600', fontFamily: fonts.poppins, fontSize: 12, color: 'black' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 13, fontFamily: fonts.poppins, fontWeight: '700', color: 'black' }}>{item.price}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', height: 70, alignSelf: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 10 }}>
                                            <Image resizeMode='cover' style={{ height: 30, width: 30, marginRight: 5, tintColor: 'black' }} source={item.image} />
                                            <Text numberOfLines={2} style={{ width: 50, fontSize: 10, color: 'black', textAlign: 'center', backgroundColor: 'orange', fontFamily: fonts.poppins }}>3 days ago</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    <View style={{ height: 100 }}>
                    </View>

                </ScrollView>

                {/* Botoom Menu View */}
                <View style={styles.bottomMenuView}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                        <Image style={styles.personImg} source={require('../Images/home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('JobCategory')
                    }>
                        <Image style={{ resizeMode: 'contain', height: 25, width: 25, top: 15, tintColor: colors.gray }} source={require('../Images/search.png')} />
                    </TouchableOpacity >

                    <TouchableOpacity activeOpacity={1} onPress={() => {

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
                        <View style={[styles.plusView, { backgroundColor: colors.aquaGreen, }]}>
                            <Image resizeMode="contain" style={{ height: '30%', width: '30%' }} source={require('../Images/plus.png')} />
                        </View>
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

            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create
    ({
        container:
        {
            height: '100%',
            backgroundColor: '#E6E6E6'
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
        personView:
        {
            backgroundColor: colors.Darkblue,
            height: 40,
            width: 45,
            borderRadius: 8,
            justifyContent: 'center'
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
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '600',
            margin: 5,
            color: 'black',
            fontFamily: fonts.poppins
        }
    })

export default JobList;