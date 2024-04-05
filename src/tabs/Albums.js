import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LibraryFlatlist from '../components/LibraryFlatlist'
import { libraryData } from '../data/libraryData'

const Albums = () => {
  return (
    <View style={{ flex: 1 }}>
    <LibraryFlatlist data={libraryData} />
  </View>
  )
}

export default Albums

const styles = StyleSheet.create({})