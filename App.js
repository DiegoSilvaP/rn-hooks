import React, { useReducer } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const initialState = {
  count: 0
}

// Recibimos un estado y una acción
const reducer = (state, action) => {
  switch(action.type){
    case 'incrementar': {
      return { count: state.count + 1}
    }
    case 'decrementar': {
      return { count: state.count -  1}
    }
    // si no hay ninguna acción, se regresa el estado original que recibimos
    default: {
      return state
    }
  }
}

export default function App(){
  // state, la primera vez, tendrá el valor de 0
  // dispatch es la función que nos permitirá despachar acciones como 'incrementar' y 'decrementar'
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks - useReducer</Text>
      <Text style={styles.counter} onPress={() => dispatch({ type: 'incrementar'})}>+</Text>
      <Text style={styles.counter} >{state.count}</Text>
      <Text style={styles.counter} onPress={() => dispatch({ type: 'decrementar'})}>-</Text>
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