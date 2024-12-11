import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.ParentStyle}>
      <View style={styles.ViewOneParent}>
          <View style={styles.ViewOneStyle}></View>
      </View>
      <View style={styles.ViewTwoParent}>
          <View style={styles.ViewTwoStyle}></View>
      </View>    
      <View style={styles.ViewThreeParent}>
          <View style={styles.ViewThreeStyle}></View>
      </View>   
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
    ParentStyle: {
        borderWidth : 3,
        borderColor: "black",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    ViewOneParent:{
      height:100,
      justifyContent: "flex-end",
    },

    ViewTwoParent:{
      height: 100,
      justifyContent:"flex-end",
    },

    ViewThreeParent:{
      height:100,

    },
    ViewOneStyle:{
        height: 75,
        width: 100,
        backgroundColor: "red",
        
    },
    ViewTwoStyle:{
        height: 75,
        width: 100,
        backgroundColor: "green",  

    },
    ViewThreeStyle:{
        height: 75,
        width: 100,
        backgroundColor: "blue",
  
    },
    
})