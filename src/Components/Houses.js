import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getMethod } from '../Services/CommonService'
import { allUrls } from "../Urls/mainUrls"

export default function Houses() {

  const [ housesData , setHouses ] = useState([]);
  const [ isLoading , setLoading ] = useState(true);

  useEffect(()=> {
    getHousesData()
  },[]);

  const getHousesData = async () =>{
    const data =  await getMethod(allUrls.getGOTHousesInfo);
    setHouses(data);
    setLoading(false);
  }

  const carouselView = ( { item } ) =>{
    
    return (
    <View style = { styles.indiviCarouselWrapper }>
      <Text>{ item.name }</Text>
      <Text>{ item.region }</Text>
      <Text>{ item.coatOfArms }</Text>
    </View>)
  }

  if(isLoading)
  {
    return <View style = { styles.activityIndicatorWrapper }>
      <ActivityIndicator size="large" color="black"/>
    </View>
  }
  return (
    <View style = { styles.mainHousesWrapper }>
      <FlatList
        keyExtractor={ (_,i) => i}
        data = { housesData }
        renderItem = { carouselView }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainHousesWrapper: {
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