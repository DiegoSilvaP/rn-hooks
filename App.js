import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

// useEffect sirve para realizar llamados asíncronos, por ejemplo a una API o cualquier cosa que genere efectos

export default function App(){
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  // // Cada vez que se monte el componente o se haya actualizado, llamará a la función que tiene dentro (setTimeout)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // })

  // // Sólo ejecutará la función la primera vez que el componente se haya montado
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  // // Sólo ejecutará la función cuando el dato pasado como argumento, cambie
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, [dato])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks - useState</Text>
      <Text onPress={()=> setCount(count+1)} style={styles.text}>{loading ? 'Cargando...' : count}</Text>
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