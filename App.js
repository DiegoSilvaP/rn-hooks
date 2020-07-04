import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default function App(){
// Los hooks retornan un arreglo
// El primer elemento del arreglo, es un estado, el segundo elemento, es una función que se utilizará para actualizar el valor del estado

// La primera vez que se inicia la variable count, vale 0
const [count, setCount] = useState(0)



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks - useState</Text>
      <Text onPress={()=> setCount(count+1)} style={styles.text}>{count}</Text>
    </View>   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 24
  }
})