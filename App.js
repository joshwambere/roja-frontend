
import { StyleSheet ,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacks from "./routes/stacks";
import { combineReducers } from 'redux';
import authReducer from './store/reducers/auth';

const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  auth: authReducer,
});


export default function App() {
  return (
      <NavigationContainer>
          <SafeAreaView style={styles.container}>
              <Stacks/>
          </SafeAreaView>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
