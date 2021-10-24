import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import {Card} from "react-bootstrap";

const Challenge = () => {
    const challengelist = ["Romance on a budget!", "Sustainability", "Random Flavor Combination","Give a gift!"];
    const challengeexp = ["For less than 5 dollars, try to design the most romantic meal possible!", "Replace two of your shopping list items with organic or more environmentally-conscious products.", "Show off your creativity! Find two weird flavors that work together!", "Give a gift that shows you care for the people you're shopping with!"]
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

export default Challenge;