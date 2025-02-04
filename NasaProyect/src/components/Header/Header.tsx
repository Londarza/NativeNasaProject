import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
export default function Header() {
  return (

    <View style={styles.container}>
        <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
        </View>

        <View style={styles.rightContainer}>
            <Image style={styles.image} source={require('@/assets/images/nasapng.png')}/>
        </View>
    </View>
  );
}