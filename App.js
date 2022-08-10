import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/navigaton/DrawerNavigator'
import HomeStackNavigator from './src/navigaton/HomeSackNavigator'
import MYSearchBar from './src/navigaton/MYSearchBar'


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
          
          <MYSearchBar/>
      </NavigationContainer>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden', 
  },
});

export default App
