import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      isMapReady: false,
      marginTop: 1,
      userLocation: "",
      regionChangeProgress: false
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        };
        this.setState({
          region: region,
          loading: false,
          error: null,
        });
      },
      (error) => {
        alert(error);
        this.setState({
          error: error.message,
          loading: false
        })
      },
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 5000 },
    );
  }

  onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });
  }

  getAddress = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.region.latitude + "," + this.state.region.longitude + "&key=" + "")
    // AIzaSyBmfp6qE_0XHKP_JI6jWe_vxlB_utq71Z8 => pake API ini
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocation = responseJson.results[0].formatted_address;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false
        });
      });
  }

  onRegionChange = region => {
    this.setState({
      region,
      regionChangeProgress: true
    }, () => this.getAddress());
  }

  onHandleSelect = () => {
    //send parama
    // this.props.navigation.navigate('mapsss', {
    //   address: this.state.userLocation, 
    //   lat:this.state.region.latitude,
    //   lng:this.state.region.longitude
    // })
    this.props.navigation.navigate('create business', { lat: this.state.region.latitude, long: this.state.region.longitude, address: this.state.userLocation ? this.state.userLocation : 'Rumahku' })
    // alert(this.state.userLocation)
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 2 }}>
            {!!this.state.region.latitude && !!this.state.region.longitude &&
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{ ...styles.map, marginTop: this.state.marginTop }}
                initialRegion={this.state.region}
                showsUserLocation={true}
                onMapReady={this.onMapReady}
                onRegionChangeComplete={this.onRegionChange}
              >
              </MapView>
            }

            <View style={styles.mapMarkerContainer}>
              <Image source={require('../../../assets/marker.png')} style={{ height: 35, width: 35 }} />
            </View>
          </View>
          <View style={styles.deatilSection}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 20 }}></Text>
            <Text style={{ fontSize: 14, color: "#999" }}>Alamat</Text>
            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : "Mencari lokasi..."}</Text>
            <View style={styles.btnContainer}>
              <Button
                title="PILIH LOKASI INI"
                // disabled={this.state.regionChangeProgress}
                onPress={this.onHandleSelect}
              >
              </Button>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      height: Dimensions.get("screen").height,
      width: Dimensions.get("screen").width,
    },
    map: {
      flex: 1,
    },
    mapMarkerContainer: {
      left: "47%",
      position: "absolute",
      top: "42%",
    },
    mapMarker: {
      fontSize: 20,
      color: "red",
    },
    deatilSection: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
      display: "flex",
      justifyContent: "flex-start",
    },
    spinnerView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnContainer: {
      width: Dimensions.get("window").width - 20,
      position: "absolute",
      bottom: 100,
      left: 10,
    },
  });