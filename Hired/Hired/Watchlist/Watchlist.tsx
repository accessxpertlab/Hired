import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Watchlist = ({ navigation }: { navigation: any }) => {


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
                    <Image style={{
                        height: 30,
                        width: 30,
                        tintColor: 'gray'
                    }} source={require('../Images/sidemenu.png')} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Watchlist</Text>
                    <View style={{
                        backgroundColor: 'black',
                        height: 40,
                        width: 50,
                        borderRadius: 8,
                        justifyContent: 'center'
                    }}>
                        <Image resizeMode='contain' style={{ tintColor: 'white', height: 23, width: 30, alignSelf: 'center' }} source={require('../Images/person.png')} />
                    </View>
                </View>

                {/* Search View */}
                <View style={{ justifyContent: 'center', marginTop: 10 }}>
                    <View style={styles.searchView}>
                        <Image style={{ height: 25, width: 30, marginLeft: 10 }} source={require('../Images/search.png')} />
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
                <FlatList style={{ backgroundColor: ' black', marginLeft: 10, marginRight: 10, height: 70 }}
                    horizontal={true}
                    scrollEnabled={true}
                    data={watchListtype}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index) => { return index.index }}
                    renderItem={({ item }) => { return <Text style={styles.categoryTxt}>{item.name}</Text> }} />

                {/* Following List View */}
                <ScrollView nestedScrollEnabled={true}>
                    <FlatList
                        data={jobsList}
                        horizontal={false}
                        numColumns={1}
                        scrollEnabled={false}
                        keyExtractor={(index) => { return index.index }}
                        renderItem={({ item }) => {
                            return (

                                <View style={{ backgroundColor: 'white', height: 100, marginLeft: 20, marginBottom: 15, marginRight: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <View style={{ height: 70, width: 70, marginLeft: 15, backgroundColor: item.color, alignSelf: 'center', borderRadius: 10 }}>
                                    </View>

                                    <View style={{ marginTop: 10, marginLeft: 15, height: 75, justifyContent: 'space-evenly', width: 130 }}>
                                        <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: '800', color: 'black' }}>{item.title}</Text>
                                        <Text numberOfLines={2} style={{ fontWeight: '600', fontSize: 12, color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: '700', color: 'black' }}>{item.price}</Text>
                                    </View>

                                    <View style={{
                                        alignSelf: 'flex-end', justifyContent: 'center', height: 35, paddingLeft: 15, paddingRight: 15, marginRight: 10,
                                        marginLeft: 'auto', borderRadius: 10, backgroundColor: '#00C7C7', marginBottom: 15, alignItems: 'center'
                                    }}>

                                        <Text numberOfLines={2} style={{ fontSize: 13, color: 'white', textAlign: 'center', fontWeight: '600' }}>Following</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </ScrollView>

            </SafeAreaView>

            {/* bottom View */}
            <View style={styles.bottomMenuView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.personImg} source={require('../Images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('JobCategory')}>
                    <Image style={{ height: 30, width: 30, top: 13 }} source={require('../Images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.plusView} onPress={() => { navigation.navigate('CreateProfile'), console.log('press') }}>
                    <Image resizeMode="contain" style={{ height: '30%', width: '30%' }} source={require('../Images/plus.png')} />
                </TouchableOpacity>

                <Image style={styles.personImg} source={require('../Images/bookmarkGray.png')} />

                <TouchableOpacity activeOpacity={1} style={styles.personImg} onPress={() => { navigation.navigate('PublicProfile') }}>
                    <Image resizeMode="contain" style={{ height: 25, width: 50, marginTop: 10, alignSelf: "center" }} source={require('../Images/person.png')} />
                </TouchableOpacity>
            </View>
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
    },

    plusView:
    {
        backgroundColor: '#00C7C7',
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
        color: 'black'
    }
})

export default Watchlist;