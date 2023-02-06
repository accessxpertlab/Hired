/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Video from 'react-native-video';

import React, { useRef,useState,useCallback } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function App(): JSX.Element {

  const array = [1,2,3,4,5]
  const videos = [require('./Images/girl.mp4'),
  require('./Images/perfume.mp4'),
  require('./Images/girl.mp4'),
  require('./Images/perfume.mp4'),
  require('./Images/girl.mp4')]

  const [paused0, setpaused0] = useState(true)
  const [paused1, setpaused1] = useState(true)
  const [paused2, setpaused2] = useState(true)
  const [paused3, setpaused3] = useState(true)
  const [paused4, setpaused4] = useState(true)

  // const mediaRefs = useRef([])

  // const onviewchange = useRef(({changed})=> {

  //   changed.forearch(element => {
  //     const cell = mediaRefs.current[element]
  //     if (cell)
  //     {
  //       console.log('onviewchange' , element ,)
  //       if element.
  //     }
  //   })
  // })

  const renderItem = ({ item ,index }) => {


    return (

      <View style = {[{flex : 1 , height : Dimensions.get('window').height}]}>
        {/* <Text>{item}</Text> */}
        
        {/* <VisibilitySensor onChange={handlePlaying}> */}
      
        <TouchableOpacity style = {{justifyContent : 'center'}} activeOpacity={1.0} onPress={()=> index == 0 ? setpaused0(!paused0) : index == 1 ? setpaused1(!paused1) : index == 2 ? setpaused2(!paused2) : index == 3 ? setpaused3(!paused3) : setpaused4(!paused4)}>
        <Video resizeMode ='cover'
         style= {{ width : '100%' ,height : '100%'}} 
         source = {videos[index]} 
         paused = {index == 0 ? paused0 : index == 1 ? paused1 : index == 2 ? paused2 : index == 3 ? paused3 : paused4 }
         repeat />
        {
         index == 0 && paused0 == true ?
        <Image resizeMode='contain' style = {{position : 'absolute' , height : '10%' , width : '15%', alignSelf : 'center'}} source={require('./Images/play.png')} />
        : 
          index == 1 && paused1 == true ?
          <Image resizeMode='contain' style = {{position : 'absolute' , height : '10%' , width : '15%', alignSelf : 'center'}} source={require('./Images/play.png')} />
          : 
         index == 2 && paused2 == true ?
          <Image resizeMode='contain' style = {{position : 'absolute' , height : '10%' , width : '15%', alignSelf : 'center'}} source={require('./Images/play.png')} />
          : 
         index == 3 && paused3 == true ?
        <Image resizeMode='contain' style = {{position : 'absolute' , height : '10%' , width : '15%', alignSelf : 'center'}} source={require('./Images/play.png')} />
       :
         index == 4 && paused4 == true ? 
        <Image resizeMode='contain' style = {{position : 'absolute' , height : '10%' , width : '15%', alignSelf : 'center'}} source={require('./Images/play.png')} />
         : null
         }
         
        </TouchableOpacity>

        {/* </VisibilitySensor> */}
       

        {/* <Image style = {{resizeMode : 'cover' , width : '100%' ,height : '100%'}} source={require('../Hired/Images/girl2.jpg')}></Image> */}
        <View style = {styles.buttonView}>
            <View style = {styles.shadowView}>
               <Image style = {styles.iconView}  source={require('../Hired/Images/star.png')}></Image>
            </View>
            <View style = {styles.shadowView}>
            <Image style = {styles.iconView} source={require('../Hired/Images/bookmark.png')}></Image>
            </View>
            <View style = {styles.shadowView}>
            <Image style = {styles.iconView} source={require('../Hired/Images/mail.png')}></Image>
            </View>
            <View style = {styles.shadowView}>
            <Image style = {styles.iconView} source={require('../Hired/Images/graph.png')}></Image>
            </View>
            <View style = {styles.shadowView}>
            <Image style = {styles.iconView} source={require('../Hired/Images/cardboard.png')}></Image>
            </View>
            <View style = {styles.shadowView}>
            <Image style = {styles.iconView} source={require('../Hired/Images/play.png')}></Image>
            </View>
          </View>
          <View style = {styles.profileView}>
          <Image style = {{marginTop : 10 , width : '55%' , height : '40%' , alignSelf : 'center' , borderColor : 'black' ,borderWidth : 2, borderRadius : 70}} resizeMode = {'stretch'} source={require('../Hired/Images/profile.png')}></Image>
          <Text style = {{alignSelf : 'center' , fontWeight : '600' , color : 'white' , fontSize : 15, marginTop : 10}} >Fahbina Faisal</Text>
          </View>
      </View>
    )
  }

  return (
   
    <View>
     
      <FlatList 
      data={array}
      showsVerticalScrollIndicator = {false}
      initialScrollIndex={0}
      disableIntervalMomentum
      renderItem = {renderItem}
      pagingEnabled/>
     
    </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop : 40
  },

  buttonView : {
    height : '50%',
    justifyContent : 'center',
    width : '15%',
    position : 'absolute',
    bottom : 0, 
    right : 20,
    flex : 1,
    // backgroundColor : 'white',
    flexDirection : 'column',
  },

  shadowView : {

  width : '52%',
  height : '15%',
  alignSelf : 'center',
  // backgroundColor : 'blue',
  shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 3.0
  },
  
  iconView : {
  resizeMode : 'contain',
  alignSelf : 'center', 
  width : '100%',
  height : '100%'
},

 profileView : {
    justifyContent : 'center',
    height : '19%',
    width : '30%',
    position : 'absolute',
    bottom : 20, 
    left : 20,
    flexDirection : 'column',
 }

});

export default App;
