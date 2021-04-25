import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View , Button ,   Image , SafeAreaView  , TouchableOpacity,  ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import useAxios from 'axios-hooks'


export default function App({navigation}) {


    const [{ data, loading, error }, refetch] = useAxios(
      'https://airjadli.herokuapp.com/api/client/getNews'
    )
  
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>


  return (
    <ScrollView>
    <View style={styles.container}>
        {data.map((number) => 
        <View key={number._id} style={styles.box}  >
      <Text>{number.title}</Text>
      <Image
     
        source={number.featureImg}
      
      />
         <Button
        title="News"
        onPress={() => 
            navigation.navigate('News', {
                itemId: number.title,
                otherParam: number.slug,
              })
    
    
    }
      />
      
      </View>
        )}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
 );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex:1,
     justifyContent:"space-around",
  flexDirection:'row',
     alignItems:'center',
     flexGrow:1,
     flexWrap: 'wrap'
  },
  box: {
    paddingTop: 100,
    flex:1,
    minWidth: 150,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"

   
  },
  tinyLogo: {
    width: 50,
    height: 50,
    
  },
  logo: {
    width: 66,
    height: 58,
  },
});