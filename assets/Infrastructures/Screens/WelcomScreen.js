import React from "react";
import { View, Text} from "react-native";
import { styles } from "../Styling/Styles";

export default function WelcomeScreen () {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text1}> We’re the bank of the free</Text>
            <Text style={styles.Text2}>We’re here to help you get the best</Text>
            <Text style={styles.Text2}>out of your money, no strings attached.</Text>
            <Text style={styles.Text2} >Welcome to your freedom!</Text>
            <Text>Fully Licensed by CBN <Image source={require('')}/></Text>
        </View>
    )
}