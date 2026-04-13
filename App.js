import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HEllO IT'S ME</Text>
      <Text>QAMAR EL OTMANI </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383735',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
