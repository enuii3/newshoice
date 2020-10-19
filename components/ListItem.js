import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function ListItem({title, subTitle, imageUrl, onPress}){
  return(
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl } }
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines = {3}>{title}</Text>
        <Text style={styles.subText}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row"
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  leftContainer: {
    width: 100,
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
});

export default ListItem;
