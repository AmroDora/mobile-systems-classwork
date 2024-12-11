import { StyleSheet, Text, View, Button,FlatList,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'


const ColorScreen = () => {
  const [colors,setColors]= useState([]);
 
    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      >
        <Text style={styles.buttonText}>Add Color</Text>
      </TouchableOpacity>
      
         <FlatList
            data={colors}
            keyExtractor={(item) => {item} }
            renderItem={({item}) => {
                return <View style={[styles.colorBox, {backgroundColor: item},]} />
            }}
         />
        
    </View>
  )
  
}
const randomRgb = () => {
    const red =Math.floor(Math.random()*256);
    const green =Math.floor(Math.random()*256);
    const blue =Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}



export default ColorScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding:20,
    },

    title: {
        fontSize:24,
        marginBottom:20,
    },
    colorBox:{
        width:100,
        height:100,
        margin:10,
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 20,
        opacity: 0.8, // slightly transparent effect
    },
      buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

})