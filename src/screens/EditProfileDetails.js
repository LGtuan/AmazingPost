import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FiledInput from "../components/filedInput/FiledInput";
import colors from "../colors/color";

const EditProfileDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.text1}>Công việc</Text>
          <View style={{ flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.text2}>Công khai</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput cursorColor={"black"} style={styles.input} />
          <MaterialIcons name="edit" color={"black"} size={30} />
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.text1}>Quê quán</Text>
          <View style={{ flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.text2}>Công khai</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput cursorColor={"black"} style={styles.input} />
          <MaterialIcons name="edit" color={"black"} size={30} />
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.text1}>Học vấn</Text>
          <View style={{ flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.text2}>Công khai</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput cursorColor={"black"} style={styles.input} />
          <MaterialIcons name="edit" color={"black"} size={30} />
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.text1}>Mối quan hệ</Text>
          <View style={{ flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.text2}>Công khai</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput cursorColor={"black"} style={styles.input} />
          <MaterialIcons name="edit" color={"black"} size={30} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: 'white'
  },
  item: {
    borderBottomWidth: 1.4,
    borderBottomColor: colors.color6,
    paddingVertical: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    fontFamily: "AndikaNewBasic",
    fontSize: 18,
  },
  text2: {
    fontFamily: "AndikaNewBasic",
    fontSize: 14,
    marginStart: 5,
  },
  checkbox: {
    marginTop: 3,
    borderColor: "black",
  },
  input: {
    width: "85%",
    borderRadius: 14,
    height: 40,
    backgroundColor: "#F8FBFF",
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingBottom: 3,
    borderColor: "#2E3154",
    fontSize: 16,
    fontFamily: "AndikaNewBasic",
  },
});
