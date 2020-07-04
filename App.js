import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

// Hay veces en las que los componentes funcionales se están renderizando una y otra vez sin control
// y también se van a crear instancias de las funciones, las cuales ocupan memoria y procesamiento, por lo que hay que optimizar la aplicación

// useCallback es muy similar a useMemo, la diferencia es que useMemo, te devuelve un valor ya calculado, useCallback te devuelve la referencia de la misma función

export default function App(){
  const [count, setCount] = useState(0)

   // al igual que useMemo, useCallback recibe otro parámetro, que, en caso de que el valor de éste cambie, vuelve a crear la función
  const incrementar = useCallback(() => {
    setCount(count+1)
  }, [count])
  
  const decrementar = useCallback(() => {
    setCount(count-1)
  },[count])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks - useReducer</Text>
      <Text style={styles.counter} onPress={() => incrementar()}>+</Text>
      <Text style={styles.counter} >{count}</Text>
      <Text style={styles.counter} onPress={() => decrementar()}>-</Text>
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
  },
  counter:{
    fontSize: 40
  }
})