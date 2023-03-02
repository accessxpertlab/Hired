import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { colors, fonts } from '../Reausable/Reausable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import { SafeAreaView } from 'react-native-safe-area-context';

const PublicProfile = ({ navigation }: { navigation: any }) => {

    const [accountType, setAccountType] = useState('')

    var userId: string

    const [paused, setPaused] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Do something when the screen blurs
            getData()
        });

        return unsubscribe;
    }, [navigation])

    //Blur Event: to be fired when the HomeScreen loses focus.
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {

            //Every time the screen loses focus the Video is paused
            setPaused(true)

        });

        return unsubscribe;
    }, [navigation]);

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

    const skils = [
        {
            'index': '1',
            'name': '.NET',
        },
        {
            'index': '2',
            'name': 'Graphics',
        },
        {
            'index': '1',
            'name': 'Photoshop',
        },
        {
            'index': '1',
            'name': 'Java',
        },
        {
            'index': '1',
            'name': 'Node.Js',
        },
        {
            'index': '1',
            'name': 'Speaking',
        }
    ]

    return (

        <View style={styles.container}>

            {/* <SafeAreaView style={{ height: '100%' }}> */}

            <View style={{ height: 300, width: '100%' }}>
                <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => { setPaused(!paused) }}>

                    <Video paused={paused} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }}
                        source={require('../Images/girlVideo.mp4')} />

                    {/* {paused == true ?
                            <Image style={{ height: 30, width: 30, tintColor: 'white', position: 'absolute', alignSelf: 'center' }} source={require('../Images/playVideo.png')} /> : null
                        } */}

                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} style={{ position: 'absolute', marginTop: 40, marginLeft: 25 }}>
                <Image style={{ height: 30, width: 30, tintColor: 'white' }} resizeMode='contain' source={require('../Images/back.png')} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} bounces={false}>

                <View style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ flex: 1, height: 50, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Druid Wensleydale</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 30, tintColor: colors.aquaGreen }} source={require('../Images/marker.png')} />
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>Chicago, USA</Text>
                            </View>
                        </View>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '500' }}>UI Designer with 5 years experience</Text>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>My Skills</Text>
                        <FlatList style={{ marginTop: 20, marginBottom: 10, }}
                            data={skils}
                            numColumns={3}
                            scrollEnabled={false}
                            keyExtractor={(index) => { return index.index }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.skillsView}>
                                        <Text style={{ paddingLeft: 20, paddingRight: 20 }}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ height: 65, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>About</Text>
                        <Text style={{ fontFamily: fonts.poppins, fontSize: 13, fontWeight: '500', }}>Integer lacinia tempor alectus ut and valpuate. Quisque aliquet venenatis adio, ut blandit eros auctor nec</Text>
                    </View>
                    <View style={{ height: 90, marginTop: 15, justifyContent: 'space-between', flex: 1 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Work History</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.aquaGreen, fontFamily: fonts.poppins }}>Mobile App Developer</Text>
                            <Text style={{ marginLeft: 10, color: 'gray', fontFamily: fonts.poppins }}>Toronto, ON</Text>
                        </View>
                        <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold', fontFamily: fonts.poppins, marginTop: 5 }}>Mar ,20 - Present</Text>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '500', fontFamily: fonts.poppins, }}>aliquet venenatis adio, ut blandit eros aucto nec.</Text>
                    </View>
                    <View style={{ height: 150 }}></View>
                </View>
            </ScrollView>

            <View style={styles.mainMenu}>
                <View style={styles.menuStyle}>
                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={[styles.menuImg, { tintColor: colors.aquaGreen }]} source={require('../Images/book.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={[styles.menuImg, { tintColor: colors.aquaGreen }]} source={require('../Images/mail.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={[styles.menuImg, { tintColor: colors.aquaGreen }]} source={require('../Images/bookmark.png')} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PurchaseAdd')}>

                    </TouchableOpacity>

                </View>

                <View style={[styles.playView, { backgroundColor: colors.aquaGreen, }]}>
                    <TouchableOpacity activeOpacity={1} style={{ alignSelf: 'center', flexDirection: 'row', }} onPress={() => setPaused(!paused)}>
                        <Image style={{ height: 30, width: 30, marginTop: 5, tintColor: 'white' }} source={require('../Images/playVideo.png')} />
                        <Text style={{ fontSize: 15, fontFamily: fonts.poppins, fontWeight: '700', color: 'white', marginLeft: 10 }}>Play{'\n'}Video</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Botoom Menu View */}
            <View style={styles.bottomMenuView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.personImg} source={require('../Images/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('JobCategory')
                }>
                    <Image style={{ resizeMode: 'contain', height: 25, width: 25, top: 15, tintColor: colors.gray }} source={require('../Images/search.png')} />
                </TouchableOpacity >


                < TouchableOpacity activeOpacity={1} style={[styles.plusView, { backgroundColor: colors.aquaGreen, }]} onPress={() => {

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
            {/* </SafeAreaView> */}
        </View >
    );
}

const styles = StyleSheet.create({

    container:
    {
        flex: 1

    },
    mainMenu:
    {
        position: 'absolute',
        marginVertical: 260,
        backgroundColor: 'white',
        height: 70,
        width: 330,
        marginLeft: 25,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 13,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 2,
        shadowRadius: 6,
        shadowOpacity: 1.0
    },

    menuStyle:
    {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    menuImg:
    {
        resizeMode: 'contain',
        height: 23,
        width: 23,
        alignSelf: 'center'
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
    skillsView:
    {
        backgroundColor: '#E0E0E0',
        height: 35,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    imgBackView:
    {
        backgroundColor: '#E3E3E3',
        height: 45,
        width: 45,
        justifyContent: 'center',
        borderRadius: 100
    },
    playView:
    {
        width: 100,
        justifyContent: 'center',
        borderBottomRightRadius: 13,
        borderTopRightRadius: 13
    }
})

export default PublicProfile;