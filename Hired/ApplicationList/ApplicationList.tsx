import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { colors, fonts } from '../Reausable/Reausable'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ApplicationList = ({ navigation }: { navigation: any }) => {

    var accountType: string
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
                accountType = value
            }
        } catch (e) {
            // error reading value
        }
    }

    const jobsList = [
        {
            "index": "1",
            "name": "Zahid Rahman",
            "company": "Exclusive with IT background",
            "price": "$120,000 - $150,000 / yr",
            'image': require('../Images/userImg.jpg')
        },
        {
            "index": "2",
            "name": "Fahbina Faisal",
            "company": "Finance expert with 4 year experience",
            "price": "$130,000 - $121,000 / yr",
            'image': require('../Images/girl.jpg')
        },
        {
            "index": "3",
            "name": "Shahid Ansari",
            "company": "Diem Technologies",
            "price": "$112,000 - $123,000 / yr",
            'image': require('../Images/userImg.jpg')
        },
    ]

    return (
        <View style={{ height: '100%' }}>
            <SafeAreaView style={{ height: '100%' }}>
                <ScrollView nestedScrollEnabled={true} scrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false}>

                    <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                            <Image style={{ height: 30, width: 30, tintColor: 'black' }} source={require('../Images/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginHorizontal: 30, color: 'black', fontFamily: fonts.poppins }}>Accouting Manager</Text>
                    </View>

                    {/*  Video Application */}
                    <View style={{ marginTop: 20 }}>
                        <View style={{ marginLeft: 20, marginRight: 10, marginBottom: 15 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', fontFamily: fonts.poppins }}>16 Video Applicants</Text>
                        </View>

                        <View style={{ flexDirection: 'row', height: 200, marginLeft: 15, marginRight: 15 }}>
                            <View style={{ flex: 1 }}>
                                <Image resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../Images/userImg.jpg')} />
                                <Image resizeMode='cover' style={{ height: 30, width: 30, right: 10, position: 'absolute', tintColor: colors.pink }} source={require('../Images/bookmarkfill.png')} />

                                <View style={{ position: 'absolute', bottom: 10, justifyContent: 'space-between', width: '100%', height: 50 }}>
                                    <Text style={{ color: 'white', marginLeft: 10, fontSize: 13, fontWeight: '500', fontFamily: fonts.poppins }}>Fahbina Faisal</Text>
                                    <Text style={{ color: 'white', fontSize: 11, marginLeft: 10, fontWeight: '500', fontFamily: fonts.poppins }}>Finance expert with 4 yrs experience</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.05 }}></View>
                            <View style={{ flex: 1, }}>
                                <Image resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../Images/girl.jpg')} />
                                <Image resizeMode='cover' style={{ height: 30, width: 30, right: 10, position: 'absolute', tintColor: colors.pink }} source={require('../Images/bookmark.png')} />

                                <View style={{ position: 'absolute', bottom: 0, justifyContent: 'space-between', width: '100%', height: 50, marginBottom: 10 }}>
                                    <Text style={{ color: 'white', marginLeft: 10, fontSize: 13, fontWeight: '500', fontFamily: fonts.poppins }}>Fahbina Faisal</Text>
                                    <Text style={{ color: 'white', fontSize: 11, marginLeft: 10, fontWeight: '500', fontFamily: fonts.poppins }}>Finance expert with 4 yrs experience</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Total Applicants */}
                    <View style={{ marginTop: 20, }}>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black', fontFamily: fonts.poppins }}>21 Total Applicants</Text>
                        </View>
                        <FlatList style={{ flex: 1 }} nestedScrollEnabled={true}
                            data={jobsList}
                            // horizontal={false}
                            numColumns={1}
                            scrollEnabled={false}
                            keyExtractor={(index) => { return index.index }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ backgroundColor: 'white', marginLeft: 20, marginBottom: 15, marginRight: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', flex: 1 }}>
                                        <View style={{ marginLeft: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, flex: 1, }}>
                                            <Image resizeMode='cover' style={{ height: 80, width: '100%', borderRadius: 10 }} source={item.image} />
                                        </View>
                                        <TouchableOpacity style={{ flex: 2 }} activeOpacity={1} onPress={() => navigation.navigate('ApplicationList')}>
                                            <View style={{ marginTop: 10, marginLeft: 15, justifyContent: 'flex-start', flex: 1, }}>
                                                <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: '800', color: 'black', fontFamily: fonts.poppins }}>{item.name}</Text>
                                                <Text numberOfLines={2} style={{ fontWeight: '600', fontSize: 12, color: 'black', marginTop: 10, fontFamily: fonts.poppins }}>{item.company}</Text>
                                                <Text style={{ fontSize: 13, fontWeight: '700', color: 'black', marginTop: 10, marginBottom: 10, fontFamily: fonts.poppins }}>{item.price}</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'space-between' }}>
                                            <Image style={{ height: 25, width: 25, marginLeft: 'auto', marginTop: 5, marginRight: 5, tintColor: 'gray' }} source={require('../Images/bookmark.png')} />

                                            <Text style={{ fontSize: 13, alignSelf: 'center', fontWeight: '600', marginBottom: 10, color: 'gray', marginRight: 10, fontFamily: fonts.poppins }}>3 days ago</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        <View style={{ height: 110 }}></View>
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

                    <TouchableOpacity activeOpacity={1} style={[styles.plusView, { backgroundColor: colors.aquaGreen, }]} onPress={() => {

                        if (accountType != null) {
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
                        if (accountType != null) {
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

const styles = StyleSheet.create({

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

})

export default ApplicationList;