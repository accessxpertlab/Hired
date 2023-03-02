import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from '../Reausable/Reausable';

const PurchaseAdd = ({ navigation }: { navigation: any }) => {

    const data = [
        {
            "index": "1",
            "name": "Minimalist Chair",
            'videoLimit': 'Post Videos with 30 seconds limit',
            'price': '$5.00',
            'color': 'pink'
        },
        {
            "index": "2",
            "name": "Minimalist Chair",
            'videoLimit': 'Increase your video posts by 5',
            'price': '$3.50',
            'color': 'green'
        },
        {
            "index": "3",
            "name": "Minimalist Chair",
            'videoLimit': 'Increase your video posts by 10',
            'price': '$4.10',
            'color': 'red'
        },
        {
            "index": "4",
            "name": "Minimalist Chair",
            'videoLimit': 'Increase your video posts by 5',
            'price': '$1.00',
            'color': 'blue'
        },
        {
            "index": "5",
            "name": "Minimalist Chair",
            'videoLimit': 'Increase your video posts by 10',
            'price': '$2.00',
            'color': 'pink'
        },
        {
            "index": "6",
            "name": "Minimalist Chair",
            'videoLimit': 'Your posts show on top for more views',
            'price': '$1.50',
            'color': 'green'
        },
        {
            "index": "7",
            "name": "Minimalist Chair",
            'videoLimit': 'Increase your video posts by 10',
            'price': '$3.00',
            'color': 'black'
        },
        {
            "index": "8",
            "name": "Minimalist Chair",
            'videoLimit': 'Your posts show on top for more views',
            'price': '$4.00',
            'color': 'red'
        },
        {
            "index": "9",
            "name": "Minimalist Chair",
            'videoLimit': 'Post Videos with 30 seconds limit',
            'price': '$3.40',
            'color': 'blue'
        },
        {
            "index": "10",
            "name": "Minimalist Chair",
            'videoLimit': 'Your posts show on top for more views',
            'price': '$1.00',
            'color': 'pink'
        },
    ]

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10, marginLeft: 10, flex: 1, marginRight: 10 }}>
                <Image style={{ height: 15, width: 20, resizeMode: 'contain' }} source={require('../Images/select.png')} />
                <View style={{ height: 80, width: 80, backgroundColor: item.color, marginLeft: 10, borderRadius: 10 }}>
                </View>
                <View style={{ height: "100%", justifyContent: 'space-evenly', flex: 1 }}>
                    <Text style={styles.cartTxt}>{item.name}</Text>
                    <Text style={styles.videoPost}>{item.videoLimit}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            marginLeft: 15,
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#00C7C7',
                            fontFamily: fonts.poppins
                        }}>{item.price}</Text>
                        <View style={{ marginLeft: 50, flexDirection: 'row', borderRadius: 20, borderColor: 'gray', borderWidth: 1, justifyContent: 'center' }}>
                            <Image style={{ height: 15, width: 15, tintColor: 'gray', margin: 5 }} source={require('../Images/minus.png')} />
                            <Text style={{ color: 'black', fontFamily: fonts.poppins, fontSize: 13, fontWeight: '600', margin: 5 }}>1</Text>
                            <Image style={{ height: 15, width: 15, tintColor: 'gray', margin: 5 }} source={require('../Images/plus.png')} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10, justifyContent: 'space-between', marginRight: 10 }}>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <Image style={{ height: 30, width: 30, tintColor: 'black' }} source={require('../Images/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: fonts.poppins, fontWeight: 'bold', color: colors.Darkblue }}>Upgrade Plans</Text>
                <View style={styles.personView}>
                    <Image resizeMode='contain' style={{ tintColor: 'white', height: 20, width: 25, alignSelf: 'center' }} source={require('../Images/person.png')} />
                </View>
            </View>

            <FlatList style={{ marginTop: 10 }}
                data={data}
                keyExtractor={(index) => { return index.index }}
                bounces={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />

            {/* <View style={{ height: 280, }}>

                </View> */}

            {/* Charges and Subtotal  Cart Item */}
            <View style={styles.bottomView}>
                <View style={{ marginTop: 40, borderBottomWidth: 1, borderBottomColor: 'gray', marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontFamily: fonts.poppins, fontWeight: '400', color: 'black' }}>2x Extended Video</Text>
                        <Text style={{ marginLeft: 'auto', fontFamily: fonts.poppins, fontSize: 15, fontWeight: '500', color: '#00C7C7' }}>$2.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontFamily: fonts.poppins, fontWeight: '400', color: 'black' }}>1x 10 Video Posts</Text>
                        <Text style={{ marginLeft: 'auto', fontFamily: fonts.poppins, fontSize: 15, fontWeight: '500', color: '#00C7C7' }}>$3.50</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 18 }}>
                        <Text style={{ fontSize: 15, fontFamily: fonts.poppins, fontWeight: '400', color: 'black' }}>2x Extended Video</Text>
                        <Text style={{ marginLeft: 'auto', fontFamily: fonts.poppins, fontSize: 15, fontWeight: '500', color: '#00C7C7' }}>$2.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, marginTop: 30, marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontFamily: fonts.poppins, fontWeight: '700' }}>Subtotal</Text>
                    <Text style={{ fontSize: 18, color: '#00C7C7', fontFamily: fonts.poppins, fontWeight: '700', marginLeft: 'auto' }}>$15.50</Text>
                </View>
                <View style={{ alignItems: 'center', marginLeft: 30, marginRight: 30, backgroundColor: colors.Darkblue, marginBottom: 30, borderRadius: Dimensions.get('window').height / 2 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.poppins, fontWeight: '600', marginTop: 15, marginBottom: 15 }}>Continue</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    cartTxt:
    {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: '700',
        color: colors.Darkblue,
        fontFamily: fonts.poppins
    },
    videoPost:
    {
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 13,
        fontWeight: '400',
        color: colors.Darkblue,
        fontFamily: fonts.poppins
    },
    bottomView:
    {
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        elevation: 3,
        backgroundColor: "white",
        shadowRadius: 10,
        shadowOpacity: 0.2
    },
    personView:
    {
        backgroundColor: colors.Darkblue,
        height: 40,
        width: 45,
        borderRadius: 8,
        justifyContent: 'center'
    },
})

export default PurchaseAdd