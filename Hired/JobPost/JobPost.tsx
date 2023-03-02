import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import { colors, fonts } from '../Reausable/Reausable'


const JobPost = ({ navigation }: { navigation: any }) => {

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

        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                            <Image resizeMode='contain' style={{ height: 30, width: 50, tintColor: 'black', marginLeft: 10 }} source={require('../Images/back.png')} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 70, color: 'black', fontFamily: fonts.poppins }}>Account Manager</Text>
                    </View>

                    {/* Add  Image and video */}

                    <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, height: 100, marginTop: 20 }}>
                        <View style={{ flex: 1, backgroundColor: colors.pink, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 30, width: 30, marginBottom: 10 }} source={require('../Images/plus.png')} />
                            <Text style={{ fontSize: 14, color: 'white', fontFamily: fonts.poppins, textAlign: 'center', fontWeight: '500', marginLeft: 5, marginRight: 5 }}>ADD VIDEO OR PICS</Text>
                        </View>
                        <View style={[{ marginLeft: 10, marginRight: 10 }, styles.imgView]}>
                            <Image resizeMode='cover' style={{ height: '100%', width: '100%', }} source={require('../Images/userImg.jpg')} />
                        </View>
                        <View style={styles.imgView}>
                            <Image resizeMode='cover' style={{ height: '100%', width: '100%', }} source={require('../Images/girl.jpg')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontFamily: fonts.poppins, color: 'gray', fontSize: 13, fontWeight: '500' }}>$120,000-$150,000 / yr</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto', alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 25, tintColor: '#00C7C7' }} source={require('../Images/marker.png')} />
                            <Text style={{ color: 'gray', fontFamily: fonts.poppins, fontSize: 13, fontWeight: '500' }}>Alabama,USA</Text>
                        </View>
                    </View>

                    {/* Skills Needed View */}
                    <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.textTitle}>Skills Needed</Text>

                        <FlatList
                            data={skills}
                            numColumns={3}
                            scrollEnabled={false}
                            keyExtractor={(index) => { return index.index }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.skillView}>
                                        <Text style={{ color: 'gray', paddingLeft: 25, paddingRight: 25, fontSize: 13 }}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>

                    {/* About Company */}
                    <View style={styles.contentView}>
                        <Text style={styles.textTitle}>About Company</Text>
                        <Text style={{ color: 'gray', fontSize: 14 }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                    </View>

                    {/* Job Description */}
                    <View style={styles.contentView}>
                        <Text style={styles.textTitle}>Job Description</Text>
                        <Text style={{ color: 'gray', fontSize: 14 }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                    </View>

                    {/* Requirements */}
                    <View style={styles.contentView}>
                        <Text style={styles.textTitle}>Requirements</Text>
                        <Text style={{ color: 'gray', fontSize: 14, fontFamily: fonts.poppins }}>Integer iacinia tempor alectus ut and  valupuate. Quisque aliquet venenatis odio, ut blandit eros auctor nec.</Text>
                    </View>

                </ScrollView>

                {/* Post Button */}
                <View style={styles.postBtn}>
                    <Text style={{ marginTop: 15, marginBottom: 17, color: 'white', fontSize: 15, fontWeight: '700', fontFamily: fonts.poppins }}>Post</Text>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    skillView:
    {
        marginRight: 20,
        backgroundColor: '#E0E0E0',
        marginBottom: 10,
        height: 30,
        justifyContent: 'center',
        borderRadius: 8
    },
    imgView:
    {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center'
    },
    contentView:
    {
        justifyContent: 'space-between',
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20
    },
    textTitle:
    {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
        fontFamily: fonts.poppins
    },
    postBtn:
    {
        backgroundColor: colors.pink,
        alignItems: 'center',
        borderStartColor: 'black',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        borderRadius: Dimensions.get('screen').height / 2
    }
})

export default JobPost