import React from 'react'
import { View, Text } from 'react-native'
import { useGetCafes } from './apollo/actions';
const Cafes = () => {
    const { data , loading } = useGetCafes();
   
    const cafes = data && data.cafes || [];

  console.log(cafes)

  if(loading) {
    return (
        <View>
            <Text>Loading....</Text>
        </View>
    )
  }
    return (
        <View>
            <Text>dsdsds</Text>
        </View>
    )
}

export default Cafes
