import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Presentation() {
  return (
     <View style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>À Propos de moi</Text></View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <ImageBackground source= {require('../assets/moi.png')} style={styles.background} imageStyle={styles.image}>
      <Text style={{ color: 'white' }}>À Propos De moi</Text>
      </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 100,
        paddingLeft: 16,
    },
    headerText: {
        color: '#b30202',
    },
    container: {
        flex: 1, 
        backgroundColor: '#000',
    },
    image: {
       opacity: 0.30,
       resizeMode: 'cover',
    },
     background: {
       flex: 1,
       width: '100%',
       height: '100%',
       alignItems: 'center',
       justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 18,
    },
});