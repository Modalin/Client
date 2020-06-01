import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";
import getDirections from "react-native-google-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

console.disableYellowBox = true;
const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Maps({ props }) {
  // const { lat, long } = props --> get latitude dan longitude dari server
  const [currentLocation, setCurrentLocation] = useState(initialState);
  const [destination, setDestination] = useState({
    latitude: -6.219096, // lat
    longitude: 106.845259, // long
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setCurrentLocation({
        ...currentLocation,
        latitude,
        longitude,
      });
    });
  }, []);

  const handleGetDirections = () => {
    const data = {
      source: {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
      destination: {
        latitude: destination.latitude,
        longitude: destination.longitude,
      },
      params: [
        {
          key: "travelmode",
          value: "driving", 
        },
        {
          key: "dir_action",
          value: "navigate",
        },
      ],
    };

    getDirections(data);
  };

  return currentLocation.longitude ? (
    <>
        <MapView style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={destination}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            title={"Destination"}
            draggable
          />
        </MapView>
      <View>
        <Button onPress={handleGetDirections} title="Petunjuk Arah"/>
      </View>
    </>
  ) : <ActivityIndicator style={{flex: 1}} animating size="large" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  map: {
      height:200,
      flex: 1,
      padding: 20
  }
});
