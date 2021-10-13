import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gridView}>
        <Button title="To-do-list" />
        <Button title="Navigate" />
        <Button title="Scan Product" />
        <Button title="Payment" />
      </View>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen.. again"
        onPress={() => navigation.push("Detail")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridView: {
    margin: 5,
  },
});
