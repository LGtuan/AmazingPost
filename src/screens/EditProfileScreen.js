import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import LineInfo from "../components/LineInfo";
import colors from "../colors/color";

const EditProfileScreen = ({navigation}) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Avatar</Text>
          <Text style={styles.text2}>Chỉnh sửa</Text>
        </View>
        <Image
          source={require("../images/avatarDefault.png")}
          style={styles.avatar}
        />
      </View>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Background</Text>
          <Text style={styles.text2}>Chỉnh sửa</Text>
        </View>
        <Image
            source={require("../images/bg.jpg")}
            resizeMode='cover'
            style={styles.imgBackground}
          />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Details</Text>
          <Text style={styles.text2} onPress={()=>{navigation.navigate('EditProfileDetails')}}>Chỉnh sửa</Text>
        </View>
        <LineInfo
          iconName="school"
          content="Từng học tại trường THPT Phúc Thọ"
        />
        <LineInfo iconName="place" content="Đến từ Hà Nội" />
        <LineInfo
          iconName="work"
          content="Làm việc tại FPT soft ware"
        />
        <LineInfo
          iconName="favorite"
          content="Single"
        />
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  avatarContainer: {
    width: "100%",
    height: 230,
    borderBottomWidth: 1.4,
    borderBottomColor: colors.color6,
  },
  backgroundContainer: {
    width: "100%",
    height: 300,
    borderBottomWidth: 1.4,
    borderBottomColor: colors.color6,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  text1: {
    fontFamily: "AndikaNewBasic",
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text2: {
    color: colors.color4,
    fontFamily: "AndikaNewBasic",
  },
  avatar: {
    width: 190,
    height: 190,
    borderRadius: 95,
    alignSelf: 'center'
  },
  imgBackground: {
    width: '100%',
    height: 250,
    backgroundColor: 'gray',
    marginTop: 10,
    borderRadius: 16
  }
});
