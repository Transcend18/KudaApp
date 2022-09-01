import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './assets/Infrastructures/Screens/WelcomScreen';
import { styles } from './assets/Infrastructures/Styling/Styles';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <WelcomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

