//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

// create a component
const HomeScreen = (props) => {
    console.log(props.navigation)
    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Home Screen</Text>
            <p><Button style={styles.forButton} onPress={ () => props.navigation.navigate('Counter')} title="To Counter "/></p> 
            <p><Button style={styles.forButton} onPress={ () => props.navigation.navigate('Color')} title="To Color Boxes"/></p>
            <p><Button style={styles.forButton} onPress={ () => props.navigation.navigate('Square')} title="To Square Color "/></p>
            <p><Button style={styles.forButton} onPress={ () => props.navigation.navigate('Text')} title="To Text Input "/></p>
            <p><Button style={styles.forButton} onPress={ () => props.navigation.navigate('Box')} title="To Box "/></p>
         </View>
    );
};

// define your styles
const styles=StyleSheet.create({
    container: {
        padding:80,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c3e50',
    },
    forText: {
        fontSize:50,
        color:'yellow',
    },
    forButton:{
        width:200,
        height:25,
    },
});

//make this component available to the app
export default HomeScreen;
