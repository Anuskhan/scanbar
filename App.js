import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
// import Tab from './src/navigation/Tab';
import Routeskey from './src/navigation/routeskey';


const App = () => {

  return (
    <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <NavigationContainer>
        <Routes initialRouteName={Routeskey.SPLASH} />
      </NavigationContainer>
  
    </View>
  );
};

export default App;

