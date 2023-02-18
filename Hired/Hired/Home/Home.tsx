/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Video from 'react-native-video';

import React, { useRef, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';

const Home = ({ navigation }: { navigation: any }) => {

  const array = [1, 2, 3, 4, 5]
  const videos = [require('../Images/girlVideo.mp4'),
  require('../Images/perfume.mp4'),
  require('../Images/girlVideo.mp4'),
  require('../Images/perfume.mp4'),
  require('../Images/girlVideo.mp4')]

  const [paused0, setpaused0] = useState(false)
  const [paused1, setpaused1] = useState(false)
  const [paused2, setpaused2] = useState(false)
  const [paused3, setpaused3] = useState(false)
  const [paused4, setpaused4] = useState(false)

  const handleScroll = (event: any) => {
    console.log(event)
    console.log(event.nativeEvent.contentOffset.x);

  };

  const renderItem = ({ item, index }: { item: any, index: any }) => {

    return (

      <View style={{ height: Dimensions.get('window').height }}>

        <TouchableOpacity style={{ justifyContent: 'center' }} activeOpacity={1} onPress={() => index == 0 ? setpaused0(!paused0) : index == 1 ? setpaused1(!paused1) : index == 2 ? setpaused2(!paused2) : index == 3 ? setpaused3(!paused3) : setpaused4(!paused4)}>
          <Video resizeMode='cover'
            style={{ width: '100%', height: Dimensions.get('window').height }}
            source={videos[index]}
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
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
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
              <Image style={styles.iconView} source={require('../Images/mail.png')}></Image>
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
          <Image style={{ marginTop: 10, width: '55%', height: '40%', alignSelf: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 70 }} resizeMode={'stretch'} source={require('../Images/profile.png')}></Image>
          <Text style={{ alignSelf: 'center', fontWeight: '600', color: 'white', fontSize: 15, marginTop: 10 }} >Fahbina Faisal</Text>
        </TouchableOpacity>
      </View >
    )
  }

  return (

    <VisibilitySensor onChange={(paused) => {
      return (
        console.log(paused),
        paused ? setpaused0(false) : paused ? setpaused1(false) : paused ? setpaused2(false) : paused ? setpaused3(false) : setpaused4(false)
      )
    }}>


      <FlatList style={{ height: Dimensions.get('window').height }}
        data={array}
        onScroll={handleScroll}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={0}
        renderItem={renderItem}
        // initialNumToRender={0}
        pagingEnabled />
    </VisibilitySensor>

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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 3.0
  },

  iconView: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
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
