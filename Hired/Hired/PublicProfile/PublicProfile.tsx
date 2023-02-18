import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const PublicProfile = ({ navigation }: { navigation: any }) => {

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
            <Image resizeMode='cover' style={{ height: 300, width: '100%', backgroundColor: 'white' }} source={require('../Images/userImg.jpg')} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', marginTop: 40, marginLeft: 25 }}>
                <Image style={{ height: 30, width: 30, tintColor: 'black' }} resizeMode='contain' source={require('../Images/back.png')} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                <View style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ flex: 1, height: 50, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Druid Wensleydale</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 30, tintColor: '#00C7C7' }} source={require('../Images/marker.png')} />
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>Chicago, USA</Text>
                            </View>
                        </View>
                        <Text style={{ color: 'gray' }}>UI Designer with 5 years experience</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>My Skills</Text>
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
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>About</Text>
                        <Text style={{ fontSize: 13 }}>Integer lacinia tempor alectus ut and valpuate. Quisque aliquet venenatis adio, ut blandit eros auctor nec</Text>
                    </View>
                    <View style={{ height: 90, marginTop: 15, justifyContent: 'space-between', flex: 1 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>Work History</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#00C7C7' }}>Mobile App Developer</Text>
                            <Text style={{ marginLeft: 10, color: 'gray' }}>Toronto, ON</Text>
                        </View>
                        <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Mar ,20 - Present</Text>
                        <Text style={{ color: 'gray', fontSize: 13 }}>aliquet venenatis adio, ut blandit eros aucto nec.</Text>
                    </View>
                    <View style={{ height: 150 }}></View>
                </View>
            </ScrollView>

            <View style={styles.mainMenu}>
                <View style={styles.menuStyle}>
                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={styles.menuImg} source={require('../Images/book.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={styles.menuImg} source={require('../Images/mail.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imgBackView}>
                        <TouchableOpacity>
                            <Image style={styles.menuImg} source={require('../Images/bookmark.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: '#00C7C7', width: 100, justifyContent: 'center', borderBottomRightRadius: 13, borderTopRightRadius: 13 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../Images/play.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '700', color: 'white' }}>Play{'\n'}Video</Text>
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
                    <Image style={{ height: 30, width: 30, top: 13 }} source={require('../Images/search.png')} />
                </TouchableOpacity >

                <TouchableOpacity style={styles.plusView} onPress={() => navigation.navigate('CreateProfile')}>
                    <Image resizeMode="contain" style={{ height: '30%', width: '30%' }} source={require('../Images/plus.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Watchlist')}>
                    <Image style={styles.personImg} source={require('../Images/bookmarkGray.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.personImg} activeOpacity={1}>
                    <Image resizeMode="contain" style={{ height: 25, width: 50, marginTop: 10, alignSelf: "center" }} source={require('../Images/person.png')} />
                </TouchableOpacity>

            </View >
        </View >
    );
}

const styles = StyleSheet.create({

    container:
    {
        height: '100%'
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
        tintColor: '#00C7C7',
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
    }
})

export default PublicProfile;