import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source= {require('../assets/dev.jpg')} style={styles.background} imageStyle={styles.image}> 
      <Text style={styles.title}>QAMAR EL OTMANI</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Text style={styles.caracters}>{'<'}</Text>
        <Text style={styles.subtitle}> WEB DEVELOPER </Text>
        <Text style={styles.caracters}> & </Text> 
        <Text style={styles.subtitle}>DESIGNER</Text>
        <Text style={styles.caracters}>{' />'}</Text>
      </Text>
        <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color:'white',
    

    /* ombre */
    textShadowColor: 'rgba(225, 9, 9, 0.87)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,

  },
  subtitle: {
    color: 'red',  
    textShadowColor: 'rgb(255, 0, 0)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  caracters: {
    color: 'white',
    textShadowColor: 'rgb(235, 13, 13)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    
  },

  image: {
    opacity: 0.20,
    resizeMode: 'cover',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});