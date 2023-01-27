import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { homeData } from "../Mock/MockData.js";
import { connect } from "react-redux";

function Home(props, { navigation }) {
  const navigationArray = ["characters", "houses"];

  const carouselView = ({ item, index }) => {
    return (
      <View style={styles.indiviCarouselWrapper}>
        <Image source={item.imgURl} style={styles.indiviImgStyle} />
        <Text>{item.groupName}</Text>
        <Text>{item.name}</Text>
        <Text>{item.desc}</Text>
        <Text>{item.dob}</Text>
        <TouchableOpacity
          style={styles.moreInfoButton}
          onPress={() => navigation.navigate(navigationArray[index])}
        >
          <Text> More Info </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainHomeWrapper}>
      <View style={styles.nameWrapper}>
        <Text>Welcome </Text>
        <Text style={styles.name}>{props.reduxEmail}</Text>
      </View>
      <FlatList
        keyExtractor={(_, i) => i}
        data={homeData}
        renderItem={carouselView}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  reduxEmail: state.reduxEmail,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  mainHomeWrapper: {
    flex: 1,
    alignItems: "center",
  },
  indiviImgStyle: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  indiviCarouselWrapper: {
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "blue",
    padding: 30,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  moreInfoButton: {
    backgroundColor: "red",
    marginTop: 30,
    width: "40%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  nameWrapper: {
    marginTop: 50,
    alignItems:"center"
  },
  name: {
    
    fontWeight: "900",
    textTransform:"uppercase",
    textDecorationLine:"underline",
    fontStyle:"italic"
  },
});
