import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Video from 'react-native-video'
import { colors, fonts } from '../Reausable/Reausable'

const ViewJobPost = ({ navigation }: { navigation: any }) => {

    const [pasued, setPaused] = useState(false)

    //Blur Event: to be fired when the HomeScreen loses focus.
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('Blur');

            //Every time the screen loses focus the Video is paused
            setPaused(true)

        });

        return unsubscribe;
    }, [navigation]);

    const skills = [
        {
            'index': '1',
            'name': '.NET'
        },
        {
            'index': '2',
            'name': 'Graphics'
        },
        {
            'index': '3',
            'name': 'Photoshop'
        },
        {
            'index': '4',
            'name': 'Java'
        },
        {
            'index': '5',
            'name': 'Node.Js'
        },
        {
            'index': '6',
            'name': 'Speaking'
        },
    ]

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false}>

                    {/* back Image */}
                    <TouchableOpacity style={{ marginBottom: 10, width: 50, height: 50 }} activeOpacity={1} onPress={() => navigation.goBack()}>
                        <Image style={{ tintColor: 'black', height: 30, width: 30, marginTop: 15, marginLeft: 5 }} source={require('../Images/back.png')} />
                    </TouchableOpacity>

                    {/* Video and Image */}
                    <View style={{ height: 200, justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => { setPaused(!pasued) }}>

                                <Video paused={pasued} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                    source={require('../Images/girlVideo.mp4')} />

                                {pasued == true ?
                                    <Image style={{ height: 30, width: 30, tintColor: 'white', position: 'absolute', alignSelf: 'center' }} source={require('../Images/playVideo.png')} /> : null
                                }

                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 13, flex: 1 }}>
                            <Image resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                source={require('../Images/girl.jpg')} />
                            <Text style={{ position: 'absolute', right: 15, bottom: 10, color: 'white', fontSize: 14, fontWeight: '600', fontFamily: fonts.poppins }}>1/2</Text>
                        </View>
                    </View>

                    {/* Accounting Manager View */}
                    <View style={{ backgroundColor: 'white', borderRadius: 10, height: 120, flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ color: 'black', fontFamily: fonts.poppins, fontSize: 15, fontWeight: '700' }}>Accounting manager</Text>
                            <Text style={{ color: 'gray', fontFamily: fonts.poppins }}>$120,000-$150,000 / yr</Text>
                            <Text style={{ color: 'black', fontSize: 13, fontFamily: fonts.poppins }}>Full Time | Remote</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Image style={{ height: 10, width: 20, tintColor: '#00C7C7' }} source={require('../Images/marker.png')} />
                                <Text style={{ color: 'black', fontFamily: fonts.poppins }}>Accounting manageer</Text>
                            </View>
                        </View>
                        <Image style={{ height: 25, width: 25, marginLeft: 'auto', marginTop: 10, tintColor: colors.aquaGreen }} source={require('../Images/bookmark.png')} />
                        <Image style={{ height: 80, width: 80, marginTop: 13, marginRight: 10 }} source={require('../Images/map.png')} />
                    </View>

                    {/* Skills Needed View */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: 'black', marginBottom: 10, fontSize: 14, fontWeight: '600', fontFamily: fonts.poppins }}>Skills Needed</Text>
                        <FlatList
                            data={skills}
                            // horizontal={true}
                            numColumns={3}
                            scrollEnabled={false}
                            keyExtractor={(index) => { return index.index }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginRight: 20, backgroundColor: '#E0E0E0', marginBottom: 10, height: 30, justifyContent: 'center', borderRadius: 8 }}>
                                        <Text style={{ color: 'gray', fontFamily: fonts.poppins, paddingLeft: 25, paddingRight: 25, fontSize: 13 }}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ height: 10 }}>

                    </View>

                    {/* About Diem Technology View */}
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'green', height: 80, width: 80, borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 25, alignSelf: 'center', fontFamily: fonts.poppins }}>diem</Text>
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: 'space-between', flex: 1, }}>
                            <Text style={{ fontSize: 15, fontFamily: fonts.poppins, fontWeight: '600', color: 'black', }}>About Diem Technologies</Text>
                            <Text style={{ fontSize: 14, marginRight: 0, fontFamily: fonts.poppins, fontWeight: '400', color: 'gray' }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                        </View>
                    </View>

                    {/* Job Description */}
                    <View style={{ justifyContent: 'space-between', marginTop: 25, height: 75, }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: fonts.poppins, fontWeight: '600' }}>Job Description</Text>
                        <Text style={{ color: 'gray', fontSize: 14, fontFamily: fonts.poppins }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                    </View>

                    {/* Requirements */}
                    <View style={{ justifyContent: 'space-between', marginTop: 25, height: 75, }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', fontFamily: fonts.poppins }}>Requirements</Text>
                        <Text style={{ color: 'gray', fontSize: 14, fontFamily: fonts.poppins }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                    </View>
                    <View style={{ height: 100 }}>

                    </View>
                </ScrollView>

                {/* Apply Job View */}
                <TouchableOpacity style={styles.applyJobView} activeOpacity={1} onPress={() => { navigation.navigate('ApplyJob') }}>
                    <View >
                        <Text style={{ color: 'white', fontSize: 13, paddingLeft: 13, paddingRight: 13, fontWeight: '700', fontFamily: fonts.poppins }}>APPLY TO THIS JOB</Text>

                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </View >
    )
}

const styles = StyleSheet.create({

    container:
    {
        height: Dimensions.get('window').height,
        marginLeft: 15,
        marginRight: 15,
    },
    applyJobView:
    {
        backgroundColor: colors.pink,
        height: 45,
        borderRadius: 10,
        bottom: 40,
        right: 10,
        position: 'absolute',
        justifyContent: 'center'
    }
})

export default ViewJobPost;