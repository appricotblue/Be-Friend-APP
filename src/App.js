import React from 'react';
import {Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './Routes/Authstack';
import reduxStore from '../src/redux/store';
import {LanguageProvider} from './LanguageContext';
const Stack = createStackNavigator();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  return (
    <LanguageProvider>
      <Provider store={reduxStore}>
        <NavigationContainer>
          <Authstack />
        </NavigationContainer>
      </Provider>
    </LanguageProvider>
  );
};

export default App;
