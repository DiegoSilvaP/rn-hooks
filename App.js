import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, } from 'react-native';


export default function App(){
  const [users, setUsers] = useState(0)
  const [loading, setLoading] = useState(true)

  // // useEffect sólo debe retornar una funcion, no una promesa
  // useEffect(async () => {
  //   // Usamos await para que resuelva la promesa
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const json = await response.json()
  //   setUsers(json)
  //   setLoading(false)
  // }, [])

  const fetchUsers = async () => {
    // Usamos await para que resuelva la promesa
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setUsers(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooks - useState & useEffect</Text>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : users[0].name}
      </Text>
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