import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="cart" size={100} color="#e91e63" />
      <Text>Smart Cart</Text>
      <Button
        title="Connect Bluetooth"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
