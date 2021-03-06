import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

export default function HomeScreen({navigation}) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles(){
    try{
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    }catch(error){
      console.error(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(article, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

