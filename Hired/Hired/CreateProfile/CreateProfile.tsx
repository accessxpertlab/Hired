import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'

const CreateProfile = ({ navigation }: { navigation: any }) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('Select a Starting and ending Date')

    const lang = [
        {
            index: '1',
            name: "c++"
        },
        {
            index: '2',
            name: "JAVA"
        },
        {
            index: '3',
            name: "PYTHON"
        },
        {
            index: '4',
            name: ".NET"
        },
        {
            index: '5',
            name: "REACT"
        },
        {
            index: '6',
            name: "MONTHLY"
        },
        {
            index: '7',
            name: "PHP"
        },
    ]
    return (

        <View style={styles.container}>
            <View style={{ height: '10%', width: '20%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../Images/back.png')} />
                </TouchableOpacity>
            </View>
            <Image style={styles.meetingImg} resizeMode="contain" source={require('../Images/meeting.png')} />

            <View style={styles.userMainView}>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} bounces={false} >
                    <View style={{ marginTop: 30 }}>
                        <View style={styles.nameMainView}>
                            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 10 }}>Name</Text>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 50, justifyContent: "center" }}>
                                <TextInput style={{ marginLeft: 10 }} placeholder="First Name"></TextInput>
                            </View>
                        </View>
                        <View style={styles.nameMainView}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>skills</Text>
                                <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '300' }}>(pick up to 10)</Text>
                            </View>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 50, justifyContent: "center" }}>
                                <Image style={styles.image} source={require('../Images/down.png')} />
                                <TextInput style={{ marginLeft: 10 }} placeholder="Add your skills"></TextInput>
                            </View>
                        </View>
                        <View style={styles.nameMainView}>
                            <FlatList
                                nestedScrollEnabled={true}
                                numColumns={4}
                                scrollEnabled={false}
                                keyExtractor={(index) => index.index}
                                data={lang}
                                renderItem={({ item }) => {
                                    return <View style={styles.skillsView}>
                                        <Text style={{ fontSize: 14, color: 'white', padding: 4, alignSelf: 'center' }}>{item.name}</Text>
                                    </View>
                                }}
                            />
                        </View>
                        <View style={styles.nameMainView}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>Date Of Birth</Text>
                            </View>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 50, justifyContent: "center" }}>
                                <Image style={styles.image} source={require('../Images/calendar.png')} />
                                <TouchableOpacity activeOpacity={1} style={{ height: 30, justifyContent: "center" }} onPress={() => setOpen(true)}>
                                    <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>{text} </Text>
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    mode="date"
                                    open={open}
                                    date={date}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        const year = date.getFullYear();
                                        const month = date.getMonth() + 1;
                                        const day = date.getDate();

                                        const dateString = `${day}-${month}-${year}`;
                                        setDate(date);
                                        setText(dateString)
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}
                                />

                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>Description</Text>
                            </View>
                            <View style={{ backgroundColor: '#EDEDED', marginRight: 20, height: 100, }}>
                                <TextInput multiline keyboardType="email-address" style={{ marginLeft: 10, top: 10, }} placeholder="Write a short description"></TextInput>
                            </View>
                        </View>
                        {/* <DatePicker date={date} /> */}
                        {/* <View style={{ height: 50 }}></View> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    meetingImg:
    {
        alignSelf: 'center',
        marginBottom: 10,
        height: '20%',
        width: '60%'
    },

    container:
    {
        height: '100%',
        width: '100%',
        backgroundColor: "#7DB3B1"
    },

    userMainView:
    {
        backgroundColor: 'white',
        justifyContent: "space-between",
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    nameMainView:
    {
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20
    },

    image:
    {
        resizeMode: 'contain',
        height: 20,
        width: 40,
        right: 0,
        position: "absolute"
    },
    description:
    {
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    backImg:
    {
        resizeMode: "contain",
        marginLeft: 17,
        marginTop: 40,
        width: 30,
        height: 30,
    },
    skillsView:
    {
        backgroundColor: '#00C7C7',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginRight: 5
    }
})

export default CreateProfile;