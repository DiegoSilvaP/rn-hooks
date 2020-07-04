import React, { useReducer, useMemo } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

// useMemo se utiliza cuando debemos realizar un cálculo pesado, digamos iterar una gran cantidad de datos
// useMemo ejecutará la función una sola vez y si los argumentos de la función no cambian, devolverá el resultado calculado anteriormente
// por lo que no tendrá que estarlo recalculando cada vez que el componente se renderiza

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

const users = [{ name: 'zoenicki', age: 2 }, { name: 'pacificguy', age: 3 }]

export default function App(){
  const [state, dispatch] = useReducer(reducer, initialState)

  // en este caso, si el último parámetro que useMemo está recibiendo (users) cambia, ejecutará nuevamente la función
  const totalAge = useMemo(() => {
    let age = 0
    console.log('Calculando...')
    users.forEach(x => {
      age = age + x.age
    })
    return age
  }, [users])

  console.log(`Edad total ${totalAge}`)

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