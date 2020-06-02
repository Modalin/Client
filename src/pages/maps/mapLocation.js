import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions, Text, Button } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";



const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

console.disableYellowBox = true;

export default function mapLocation(props) {

  const { navigate } = props.navigation

  console.log(state);
  

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(initialState);
  const [error, setError] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [marginTop, setMarginTop] = useState(1);
  const [userLocation, setUserLocation] = useState("");
  const [regionChangeProgress, setRegionChangeProgress] = useState(false);



  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;

  //       setLocation({
  //         ...location,
  //         latitude,
  //         longitude,
  //       });
  //       setLoading(false);
     
  //     },
  //     (error) => {
  //       alert(error);
  //       setError(error.message);
  //       setLoading(false);
  //     },
  //     { enableHighAccuracy: false, timeout: 20000, maximumAge: 5000 }
  //   );
  // }, [navigator]);

  const onMapReady = () => {
    setIsMapReady(true);
    setMarginTop(0);
  };

  const getAddress = () => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        location.latitude +
        "," +
        location.longitude +
        "&key=" +
        "AIzaSyDLh42BKsOQjh53goTX8HPro0tlZvMcAPI"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocation = responseJson.results[0].formatted_address;
        setUserLocation(userLocation);
        setRegionChangeProgress(false);
      });
  };

  const onLocationSelect = () => alert(userLocation);

  const onRegionChange = (location) => {
    setRegionChangeProgress(true);
    setLocation(
      {
        location,
      });
  
  };

  if (loading) {
    return (
      <View style={styles.spinnerView}>
        <ActivityIndicator size="large" color="#000ff" />
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          {!!location.latitude && !!location.longitude && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ ...styles.map, marginTop: marginTop }}
              initialRegion={location}
              showsUserLocation={true}
              onMapReady={onMapReady}
              onRegionChange={onRegionChange}
            ></MapView>
          )}

          <View style={styles.mapMarkerContainer}>
            <Text
              style={{
                fontSize: 42,
                color: "#ad1f1f",
              }}
            >
            </Text>
          </View>
        </View>
        <View style={styles.deatilSection}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
           Arahkan ke lokasi bisnis
          </Text>
          <Text style={{ fontSize: 10, color: "#999" }}>LOKASI</Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              paddingVertical: 10,
              borderBottomColor: "silver",
              borderBottomWidth: 0.5,
            }}
          >
            {regionChangeProgress
              ? userLocation
              : "mencari lokasi"}
          </Text>
          <View style={styles.btnContainer}>
            <Button
              title="PILIH LOKASI INI"
              disabled={regionChangeProgress}
              onPress={onLocationSelect}
            ></Button>
          </View>
        </View>
      </View>
    </>
  );
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
    fontSize: 40,
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
