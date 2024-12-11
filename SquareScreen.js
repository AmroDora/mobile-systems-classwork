import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(255);
    return (
        <View>
            <Text>SquareScreen</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setRed(red+15)}>
                <Text style={styles.forText}> Increase Red</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setRed(red-15)}>
                <Text style={styles.forText}> Decrease Red</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setGreen(green+15)}>
                <Text style={styles.forText}> Increase Green</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setGreen(green-15)}>
                <Text style={styles.forText}> Decrease Green</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setBlue(blue+15)}>
                <Text style={styles.forText}> Increase Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=> setBlue(blue-15)}>
                <Text style={styles.forText}> Decrease Blue</Text>
            </TouchableOpacity>

            <View style={{
                marginTop: 10,
                height: 150,
                width: 150,
                left: '40%',
                backgroundColor: `rgb(${red},${green},${blue})`
            }}>

            </View>

        </View>
    );
};

export default SquareScreen;

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        left: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '40%',
        margin: 10,
        backgroundColor: "blue",
        color: 'white',
    },
    forText: {
        color: 'yellow',
        fontSize: 25,

    }
});
