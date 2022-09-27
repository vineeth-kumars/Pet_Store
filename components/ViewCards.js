import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";

const ViewCards = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };
  const address = props.petDetails.url;
  return (
    <View style={styles.cardContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={showDetailsHandler}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: address,
          }}
        />
        {showDetails ? (
          <View style={styles.infoStyle}>
            <View style={styles.detailsInfo}>
              <View style={styles.textContainerStyle}>
                <View>
                  <Text style={{ paddingRight: 10 }}>Name:</Text>
                  <Text style={{ paddingRight: 10 }}>age:</Text>
                  <Text style={{ paddingRight: 10 }}>price:</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.name}
                  </Text>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.age}
                  </Text>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.price}
                  </Text>
                </View>
              </View>
              <View style={styles.textContainerStyle}>
                <View>
                  <Text style={{ paddingRight: 10 }}>gender:</Text>
                  <Text style={{ paddingRight: 10 }}>breed:</Text>
                  <Text style={{ paddingRight: 10 }}>weight:</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.gender}
                  </Text>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.breed}
                  </Text>
                  <Text style={{ paddingRight: 10 }}>
                    {props.petDetails.weight}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.infoStyle}>
            <Text style={styles.titleStyle}>{props.petDetails.name}</Text>
            <Text style={{ fontWeight: "200" }}>
              {" "}
              Click here for more details!
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 25;
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 25,
    height: 220,
    borderRadius: radius,
    backgroundColor: "#FCFAFA",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
  },
  infoStyle: {
    marginHorizontal: 10,
    paddingLeft: 10,
    height: 100,
  },
  detailsInfo: {
    flexDirection: "row",
    height: 100,
  },
  textContainerStyle: {
    flexDirection: "row",
    paddingRight: 50,
  },
  textStyles: {
    fontWeight: "200",
    paddingHorizontal: 20,
  },
});

export default ViewCards;
