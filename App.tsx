import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/hello';


export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang={false}>World</Hello>
      <Text>DAI</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4545',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});

