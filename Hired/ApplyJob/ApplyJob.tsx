import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { colors, fonts } from '../Reausable/Reausable'
import Video from 'react-native-video'
// import { } from 'react-native-gesture-handler'

const ApplyJob = ({ navigation }: { navigation: any }) => {

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

    return (
        <View>
            <SafeAreaView>
                <ScrollView style={{ height: '100%', }} showsVerticalScrollIndicator={false} bounces={false}>

                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                        <Image style={{ height: 30, width: 30, tintColor: 'black', marginLeft: 20, marginTop: 10 }} source={require('../Images/back.png')} />
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={{ alignSelf: 'center', fontSize: 20, fontWeight: '700', color: 'black', width: 250, textAlign: 'center', fontFamily: fonts.poppins }}> Applying to Accounting Manager role</Text>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#00C7C7', marginTop: 30 }}></View>

                    {/* Apply With Profile ONly  */}
                    <View style={{ marginLeft: 20, marginRight: 20, marginTop: 25 }}>
                        <Text style={{ fontSize: 13, fontWeight: '700', fontFamily: fonts.poppins, color: 'black', marginBottom: 10 }}>Apply with Profile only:</Text>

                        <View style={{ backgroundColor: 'white', height: 120, justifyContent: 'flex-start', flexDirection: 'row', borderRadius: 10 }}>
                            <Image style={{ width: 111, margin: 10, height: 90 }} source={require('../Images/userImg.jpg')} />
                            <View style={{ marginTop: 10, marginRight: 10, flex: 1 }}>
                                <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Druid Wensleydale</Text>
                                <Text numberOfLines={2} style={{ fontSize: 14, marginTop: 5, fontFamily: fonts.poppins }}>UI Designer with 5 years experience </Text>

                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Image style={{ height: 20, width: 20, tintColor: '#00C7C7' }} source={require('../Images/marker.png')} />
                                    <Text style={{ fontSize: 11, alignSelf: 'center', fontFamily: fonts.poppins, fontWeight: 'bold' }}>Chicago,USA</Text>
                                    <Image resizeMode='contain' style={{ height: 15, width: 15, marginLeft: 'auto', tintColor: '#00C7C7' }} source={require('../Images/edit.png')} />
                                </View>

                            </View>
                        </View>
                    </View>

                    {/* Apply with Video + Profile */}
                    <View style={{ marginLeft: 20, marginRight: 20, marginTop: 25 }}>
                        <Text style={{ fontSize: 13, fontWeight: '700', color: 'black', marginBottom: 10, fontFamily: fonts.poppins }}>Apply with Video + Profile:</Text>

                        <View style={{ backgroundColor: 'white', borderRadius: 10, borderColor: '#00C7C7', borderWidth: 1.1 }}>
                            <View style={{ backgroundColor: 'white', marginTop: 10, height: 120, justifyContent: 'flex-start', flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }}>

                                <View style={{ height: 100, width: 100, marginLeft: 10, marginRight: 10 }}>
                                    <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => { setPaused(!pasued) }}>

                                        <Video paused={pasued} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                            source={require('../Images/girlVideo.mp4')} />

                                        {pasued == true ?
                                            <Image style={{ height: 30, width: 30, tintColor: 'white', position: 'absolute', alignSelf: 'center' }} source={require('../Images/playVideo.png')} /> : null
                                        }
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 10, marginRight: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontFamily: fonts.poppins }}>Druid Wensleydale</Text>

                                    <Text numberOfLines={2} style={{ fontSize: 14, marginTop: 5, fontFamily: fonts.poppins }}>UI Designer with 5 years experience </Text>

                                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                        <Image style={{ height: 20, width: 20, tintColor: '#00C7C7' }} source={require('../Images/marker.png')} />
                                        <Text style={{ fontSize: 11, alignSelf: 'center', fontWeight: 'bold', fontFamily: fonts.poppins }}>Chicago,USA</Text>
                                        <Image resizeMode='contain' style={styles.editImg} source={require('../Images/edit.png')} />
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 20, }}>
                                <Text style={{ fontSize: 12, color: 'black', fontWeight: '500', marginBottom: 10, fontFamily: fonts.poppins }}>Select your video:</Text>

                                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', height: 100, flex: 1 }}>
                                    <View style={{ backgroundColor: colors.aquaGreen, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: 30, width: 30, marginBottom: 10 }} source={require('../Images/plus.png')} />
                                        <Text numberOfLines={2} style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 10, marginRight: 10, fontFamily: fonts.poppins }} >ADD NEW VIDEO</Text>
                                    </View>
                                    <Image style={{ width: 120, height: 100, marginLeft: 10, borderColor: '#00C7C7', borderWidth: 1 }} source={require('../Images/userImg.jpg')} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 20, marginRight: 20, alignItems: 'center' }}>
                        <Image style={{ height: 15, width: 15 }} source={require('../Images/edit.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', fontFamily: fonts.poppins }}>
                            Boost my application to the top
                        </Text>
                    </View>
                    <Text style={{ marginTop: 13, marginLeft: 60, color: '#00C7C7', fontSize: 14, fontWeight: '500', fontFamily: fonts.poppins }}>$0.99</Text>
                    <View style={{ height: 100 }}></View>
                </ScrollView>

                {/* Apply Job View */}

                <TouchableOpacity style={styles.applyJobView} activeOpacity={1}>
                    <View >
                        <Text style={{ color: 'white', fontSize: 13, paddingLeft: 13, paddingRight: 13, fontWeight: '700', fontFamily: fonts.poppins }}>SUBMIT APPLICATION</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

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
    editImg:
    {
        height: 15,
        width: 15,
        marginLeft: 'auto',
        tintColor: '#00C7C7'
    }
})

export default ApplyJob;