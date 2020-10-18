import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from './components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }

  // 上記は下記のクラスコンポーネント版
  // const [articles, setArticles] = useState([])
  // useEffect(() => {
  //   fetchArticles()
  // }, [])

  async componentDidMount(){
    this.fetchArticles(URL)
  }

  fetchArticles = async () => {
    try{
      const response = await axios.get(URL)
      this.setState({ articles: response.data.articles })
    }catch(error){
      console.error(error)
    }
  }

  // 上記は下記のクラスコンポーネント版
  // const [articles, setArticles] = useState([])
  // async function fetchArticles(){
  //   try{
  //     const response = await axios.get(URL)
  //     setArticles(response.data.articles)
  //   }catch(error){
  //     console.error(error)
  //   }
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

