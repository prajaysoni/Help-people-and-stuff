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
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }





  render() {
    return (
    <View style={{flex: 1}}>
     <ScrollView style={styles.blueBackground}>
      <Text style={styles.h1}>First Responder</Text>
       <MapView
            style={{height: 300, margin: 40}}
            showsUserLocation={true}
            region={{
              latitude: 40.706059,
              longitude: -74.009082,
              latitudeDelta: 0.01, 
              longitudeDelta: 0.01,
            }}
            showsPointsOfInterest={false}
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
  },
  h1: {
    color: 'darkblue',
    fontSize: 30,
    margin: 10,
  }
});

AppRegistry.registerComponent('FirstResponder', () => FirstResponder);
