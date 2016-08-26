/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  ScrollView,
  Image,
} from 'react-native';


class FirstResponder extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialLat = position.coords.latitude
        this.setState({initialLat});
        var initialLng = position.coords.longitude
        this.setState({initialLng});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 70000, maximumAge: 7000}
    );
  }


  render() {
    return (
    <View style={{flex: 1}}>
     <ScrollView style={styles.blueBackground}>
      <Text style={styles.h1}>First Responder</Text>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./images/first-responder-logo.png')} />
      </View>
       <MapView
            style={{height: 400, margin: 20}}
            showsUserLocation={true}
            region={{
              latitude: 40.706059,
              longitude: -74.009082,
              latitudeDelta: 0.1, 
              longitudeDelta: 0.1,
            }}
            showsPointsOfInterest={false}
            annotations={markers}
          />

        <Text style={styles.mainText}>{this.state.initialLat}</Text>
       
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: 'steelblue',
  },
  mainText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Avenir-Book'

  },
  h1: {
    color: 'white',
    fontSize: 35,
    margin: 10,
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Avenir-Book'
  },

   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    image: {
    width: 60,
    height: 60
  },

});

  var icon = require('./images/splosion.png');


  var markers = [
  {
    latitude: 40.706059,
    longitude: -74.009082,
    title: 'Splosion!!!!',
    subtitle: 'Run for your damn lives',
    image: icon,

  }
];


AppRegistry.registerComponent('FirstResponder', () => FirstResponder);
