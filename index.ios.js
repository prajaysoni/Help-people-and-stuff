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
    this.getAccidentsFromApi().done();
  }


  async getAccidentsFromApi() {
    try {
      let response = await fetch('http://dev.virtualearth.net/REST/v1/Traffic/Incidents/40.728767,-74,40.762422,-73.965195?key=AgBjTt_1E8sHLHpDywKzH7nSAg_uvQjnVm_Ui4AtBfjDwO2xde-ujDsU6WFgl7GV');
      let responseJson = await response.json();
      var incidents = responseJson.resourceSets[0].resources
    for (var i = 0; i < incidents.length; i++) {
      marker = {
        latitude: parseFloat(incidents[i].point.coordinates[0]),
        longitude: parseFloat(incidents[i].point.coordinates[1]),
        title: incidents[i].description.split(" - ")[1],
        subtitle: incidents[i].description.split(" - ")[0],
        image: icon,
      }
      markers.push(marker)
    }

    } catch(error) {
      console.error(error);
    }
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
              latitudeDelta: 0.15, 
              longitudeDelta: 0.15,
            }}
            showsPointsOfInterest={false}
            annotations={markers}
          />
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


var markers = [{
        latitude: 40.706059,
        longitude: -74.009082,
        title: 'Sometimes you gotta drive in the rain',
        subtitle: 'to park in the sun.',
        image: icon,
}];

//   var markers = [
//   {
//     latitude: 40.706059,
//     longitude: -74.009082,
//     title: 'Splosion!!!!',
//     subtitle: 'Run for your damn lives',
//     image: icon,

//   }
// ];


AppRegistry.registerComponent('FirstResponder', () => FirstResponder);
