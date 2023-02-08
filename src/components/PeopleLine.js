import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../colors/color";

const PeopleLine = ({ source, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <Image
        source={source}
        style={styles.imgHeader}
      />
      <Text style={styles.text1}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PeopleLine;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
  },
  imgHeader: {
    width: 35,
    height: 35,
    borderRadius: 17,
    resizeMode: "contain",
  },
  text1: {
    fontFamily: 'AndikaNewBasic',
    fontSize: 16,
    paddingBottom: 5,
    color: colors.color7,
    paddingStart: 10
  }
});
