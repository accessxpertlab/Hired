import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }: { navigation: any }) => {
    const Stack = createNativeStackNavigator();

    return (

        <View style=
            {{
                backgroundColor: 'pink',
                height: '100%',
                width: '100%'
            }}>
            <Image style={{ height: '100%', width: '100%' }} resizeMode="cover" source={require('../Images/background.png')} />
            <View style={styles.googleView}>
                <TouchableOpacity onPress={() => console.log('press google')} activeOpacity={1}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }} >SIGN IN WITH GOOGLE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.facebookView}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }} >SIGN IN WITH FACEBOOK</Text>
            </View>

            {/* bottom Menu  View */}
            <View style={styles.bottomMenuView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.personImg} source={require('../Images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('JobCategory')}>
                    <Image style={{ height: 30, width: 30, top: 10 }} source={require('../Images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plusView} onPress={() => { navigation.navigate('CreateProfile'), console.log('press') }}>
                    <Image resizeMode="contain" style={{ height: '30%', width: '30%' }} source={require('../Images/plus.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Watchlist')}>
                    <Image style={styles.personImg} source={require('../Images/bookmarkGray.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.personImg} onPress={() => { navigation.navigate('PublicProfile') }}>
                    <Image resizeMode="contain" style={{ height: 25, width: 50, marginTop: 10, alignSelf: "center" }} source={require('../Images/person.png')} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
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

        facebookView:
        {
            backgroundColor: '#FF66D4',
            position: "absolute",
            height: '6%',
            width: '93%',
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            bottom: 150
        },

        googleView:
        {
            backgroundColor: '#00C7C7',
            position: "absolute",
            height: '6%',
            width: '93%',
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            bottom: 220
        },
    }
)

export default Login;