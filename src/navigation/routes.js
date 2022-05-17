import React, { Component } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Routeskey from './routeskey';

//components list
import SearchTrack from '../components/Scan/SearchTrack';
import ScanTrack from '../components/Scan/ScanTrack';
import ScanStatus from '../components/Scan/TrackDetail';

const Stack = createStackNavigator();

export default class Routes extends Component {

  render() {
    return (
      <Stack.Navigator
        {...this.props}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // ...TransitionPresets.SlideFromRightIOS, // this work the same as cardStyleInterpolator
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={Routeskey.SEARCHTRACK}
          component={SearchTrack}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />

        <Stack.Screen
          name={Routeskey.SCANTRACK}
          component={ScanTrack}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.SCANSTATUS}
          component={ScanStatus}
          options={{ headerShown: false }}
        />     
         </Stack.Navigator>
    );
  }
}



