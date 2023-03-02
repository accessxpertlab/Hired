/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Video from 'react-native-video';
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  FlatList,
  Image,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import { fonts } from '../Reausable/Reausable';

const Home = ({ navigation }: { navigation: any }) => {

  var indx = 0
  const array = [

    {
      "index": "1",
      "video": require('../Images/girlVideo.mp4')
    },
    {
      "index": "2",
      "video": require('../Images/perfume.mp4')
    },
    {
      "index": "3",
      "video": require('../Images/girlVideo.mp4')
    },
    {
      "index": "4",
      "video": require('../Images/perfume.mp4')
    },
    {
      "index": "5",
      "video": require('../Images/girlVideo.mp4')
    },

  ]

  const [paused0, setpaused0] = useState(false)
  const [paused1, setpaused1] = useState(true)
  const [paused2, setpaused2] = useState(true)
  const [paused3, setpaused3] = useState(true)
  const [paused4, setpaused4] = useState(true)

  const scrollEnd = (indx: any) => {

    console.log('indexx value is', indx)


    if (indx == 1) {
      setpaused0(false)
      setpaused1(true)
      setpaused2(true)
      setpaused3(true)
      setpaused4(true)
    }
    else if (indx == 2) {
      setpaused0(true)
      setpaused1(false)
      setpaused2(true)
      setpaused3(true)
      setpaused4(true)
    }
    else if (indx == 3) {
      setpaused0(true)
      setpaused1(true)
      setpaused2(false)
      setpaused3(true)
      setpaused4(true)
    }
    else if (indx == 4) {
      setpaused0(true)
      setpaused1(true)
      setpaused2(true)
      setpaused3(false)
      setpaused4(true)
    }
    else if (indx == 5) {
      setpaused0(true)
      setpaused1(true)
      setpaused2(true)
      setpaused3(true)
      setpaused4(false)
    }
  }

  // create ref
  const playerRef = useRef(null)

  //Blur Event: to be fired when the HomeScreen loses focus.
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('Blur');

      //Every time the screen loses focus the Video is paused
      setpaused0(true)
      setpaused1(true)
      setpaused2(true)
      setpaused3(true)
      setpaused4(true)

    });

    return unsubscribe;
  }, [navigation]);


  const renderItem = ({ item, index }: { item: any, index: any }) => {
    return (

      <View style={{ height: Dimensions.get('window').height }}>


        <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => index == 0 ? setpaused0(!paused0) : index == 1 ? setpaused1(!paused1) : index == 2 ? setpaused2(!paused2) : index == 3 ? setpaused3(!paused3) : setpaused4(!paused4)}>

          <Video resizeMode='cover'
            playWhenInactive={false}
            style={{ width: '100%', height: Dimensions.get('window').height }}
            source={item.video}
            paused={index == 0 ? paused0 : index == 1 ? paused1 : index == 2 ? paused2 : index == 3 ? paused3 : paused4}
            repeat />

          {

            index == 0 && paused0 == true ?
              <Image resizeMode='contain' style={{ position: 'absolute', height: '10%', width: '15%', alignSelf: 'center' }} source={require('../Images/play.png')} />
              :
              index == 1 && paused1 == true ?
                <Image resizeMode='contain' style={{ position: 'absolute', height: '10%', width: '15%', alignSelf: 'center' }} source={require('../Images/play.png')} />
                :
                index == 2 && paused2 == true ?
                  <Image resizeMode='contain' style={{ position: 'absolute', height: '10%', width: '15%', alignSelf: 'center' }} source={require('../Images/play.png')} />
                  :
                  index == 3 && paused3 == true ?
                    <Image resizeMode='contain' style={{ position: 'absolute', height: '10%', width: '15%', alignSelf: 'center' }} source={require('../Images/play.png')} />
                    :
                    index == 4 && paused4 == true ?
                      <Image resizeMode='contain' style={{ position: 'absolute', height: '10%', width: '15%', alignSelf: 'center' }} source={require('../Images/play.png')} />
                      : null
          }

        </TouchableOpacity>

        <View style={styles.buttonView}>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Login') }}>
              <Image style={styles.iconView} source={require('../Images/star.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconView} source={require('../Images/bookmark.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconView} source={require('../Images/homeMail.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconView} source={require('../Images/graph.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconView} source={require('../Images/cardboard.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowView}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
              <Image style={styles.iconView} source={require('../Images/play.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile View */}
        <TouchableOpacity style={styles.profileView} activeOpacity={1} onPress={() => navigation.navigate('Login')}>
          <Image style={{ marginTop: 10, width: 70, height: 70, alignSelf: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 50 }} resizeMode={'stretch'} source={require('../Images/profile.png')}></Image>
          <Text style={{ alignSelf: 'center', fontFamily: fonts.poppins, fontWeight: '600', color: 'white', fontSize: 15, marginTop: 10 }} >Fahbina Faisal</Text>
        </TouchableOpacity>
      </View >
    )
  }

  var onViewableItemsChanged = useRef(({ viewableItems, changed }: { viewableItems: any, changed: any }) => {
    console.log("Visible items are number", viewableItems[0].item.index);

    indx = viewableItems[0].item.index
    scrollEnd(indx)
  })

  return (

    <View>

      <FlatList

        style={{ height: Dimensions.get('window').height }}
        data={array}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => index.index}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={renderItem}
        pagingEnabled />

      {/* <TouchableOpacity activeOpacity={1} onPress={() =>
        navigation.navigate('Login')

      } style={{ alignSelf: 'auto', position: 'absolute', top: 20, marginLeft: 20 }}>

        <Image style={{ tintColor: 'white', height: 30, width: 30 }} source={require('../Images/back.png')} />

      </TouchableOpacity> */}
    </View >
  );
}

const styles = StyleSheet.create({

  buttonView: {
    height: '50%',
    justifyContent: 'center',
    width: '15%',
    position: 'absolute',
    bottom: 0,
    right: 20,
    marginBottom: 20
  },

  shadowView: {

    width: '52%',
    height: '15%',
    alignSelf: 'center',
    shadowColor: '#000',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 2,
    shadowOpacity: 3
  },

  iconView: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 25,
    height: 25
  },

  profileView: {
    justifyContent: 'center',
    height: '19%',
    width: '30%',
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'column',
  }

});

export default Home;
