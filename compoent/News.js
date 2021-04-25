import React from 'react'
import { View, Text , ScrollView , useWindowDimensions } from 'react-native'
import useAxios from 'axios-hooks'
import Setnews from './Setnews'
import HTMLView from 'react-native-htmlview';
import getRNDraftJSBlocks from 'react-native-draftjs-render';
import HTML from "react-native-render-html";


const news = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    const [{ data, loading, error }, refetch] = useAxios(
        `https://airjadli.herokuapp.com/client/app/getNews/${otherParam}`
      )
    
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      console.log(data.slug)

     const htmlContent = data.newsData.__html
     
      return (
     
            
           
            <ScrollView style={{ flex: 1 }}>
                <Text>{otherParam}</Text>
      <HTML source={{ html: htmlContent }}  />
    </ScrollView>
     
    )
}

export default news
