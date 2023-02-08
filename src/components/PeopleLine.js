import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../colors/color";

const PeopleLine = ({ source, text, onPress,size }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <Image
        source={source}
        style={[styles.imgHeader,{width: size, height: size}]}
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
    width: '100%',
  },
  imgHeader: {
    borderRadius: 30,
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
