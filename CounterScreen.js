import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'

const CounterScreen = () => {
    const [counter,setCounter]= useState(0);
  return (
    <View style={styles.container}>

        <p>
        <Button style={styles.forButton}
        title="Increase"
        onPress = {()=>{   setCounter(counter +1) } }/>
        </p>
        <Button style={styles.forButton}
        title="Decrease"
        onPress = {()=>{   setCounter(counter -1)  } }/>

      <Text style={styles.forText}>Current Count : {counter}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
container: {
    padding:80,
    flex:1,
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
})