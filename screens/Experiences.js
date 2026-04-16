import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Experiences() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        /* je vais devoir mettre un border aux titres border radius et tout : en haut de page */
        <Text style={styles.headerText}>Expériences</Text>
      </View>

      <ImageBackground source= {require('../assets/moi.png')} style={styles.background} imageStyle={styles.image}>
      <Text style={styles.text}>Mes Expériences Professionnelles</Text>
      </ImageBackground>
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