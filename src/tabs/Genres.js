import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { libraryData } from '../data/libraryData'
import LibraryFlatlist from '../components/LibraryFlatlist'

const Genres = () => {
  return (
    <View style={{ flex: 1 }}>
      <LibraryFlatlist data={libraryData} />
    </View>
  )
}

export default Genres

const styles = StyleSheet.create({})