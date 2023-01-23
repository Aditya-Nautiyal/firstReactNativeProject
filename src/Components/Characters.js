import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getMethod } from '../Services/CommonService'
import { allUrls } from "../Urls/mainUrls"

export default function Characters() {

  const [ charactersData , setCharactersData ] = useState([]);
  const [ isLoading , setLoading ] = useState(true);

  useEffect(()=> {
    getCharactersData()
  },[]);

  const getCharactersData = async () =>{
    const data =  await getMethod(allUrls.getGOTCharactersInfo);
    setCharactersData(data);
    setLoading(false);
  }

  const carouselView = ( { item } ) =>{
    
    return (
    <View style = { styles.indiviCarouselWrapper }>
      <Text>{ item.name }</Text>
      <Text>{ item.gender }</Text>
      <Text>{ item.culture }</Text>
      <Text>{ item.aliases[ 0 ] }</Text>
    </View>)
  }

  if(isLoading)
  {
    return <View style = { styles.activityIndicatorWrapper }>
      <ActivityIndicator size="large" color="black"/>
    </View>
  }
  return (
    <View style = { styles.mainCharactersWrappers }>
      <FlatList
        keyExtractor={ (_,i) => i}
        data = { charactersData }
        renderItem = { carouselView }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainCharactersWrappers: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activityIndicatorWrapper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  indiviCarouselWrapper:{
    alignItems:"center",
    marginTop:30,
    backgroundColor:"blue",
    padding:30,
    marginHorizontal:30,
    borderRadius:20,
  },
})
