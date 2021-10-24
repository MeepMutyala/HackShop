import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";


const Deals = () => {
    const challengelist = ["Fruits for all!", "Sustainability!", "Back-to-School Snacking"];
    const challengeexp = ["All fruits are buy one, get one free.", "Organic products are 25% off store-wide!", "All individual snack-packs are 10% off!"]
    var index  = Math.floor(Math.random()*challengelist.length);
    const [titleText, setTitleText] = useState(challengelist[index]);
  const bodyText = challengeexp[index];

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    color: "white"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  }
});

export default Deals;