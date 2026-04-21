import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function Competences() {
  return (
  <ImageBackground source= {require('../assets/profil.png')} style={styles.background} imageStyle={styles.image}>
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ width: '85%'}}>
        <View style={styles.card}>
          <Text style={styles.title}>Frontend</Text>
          <Text style={styles.text}>HTML5/CSS3</Text> 
          <Text style={styles.text}>JavaScript ES6</Text> 
          <Text style={styles.text}>Tailwind CSS</Text> 
          <Text style={styles.text}>Figma UI/UX</Text>
        </View>

        <View style={styles.card}>          
          <Text style={styles.title}>Backend</Text>
          <Text style={styles.text}>PHP (POO)</Text> 
          <Text style={styles.text}>Symfony</Text> 
          <Text style={styles.text}>MySQL/PDO</Text> 
          <Text style={styles.text}>WordPress</Text>
        </View>

        <View style={styles.card}>          
          <Text style={styles.title}>Outils</Text>
          <Text style={styles.text}>Git / GitHub</Text> 
          <Text style={styles.text}>Intégration IA</Text> 
          <Text style={styles.text}>Laragon</Text> 
          <Text style={styles.text}>Agile</Text>
        </View>
    </ScrollView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  

    title: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      fontFamily: 'TenorSans-Regular',
      marginBottom: 12,
      letterSpacing: 1,

      textShadowColor: 'rgba(0, 0, 0, 0.76)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,

    },

    card: {
      backgroundColor: 'rgba(173, 26, 26, 0.22)', //rouge transparent
      padding: 20,
      margin: 10,
      borderRadius: 15,
      width: '86%',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 30,
      elevation: 2,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.27)'
    },

    container: {
      flex: 1,
    },

    scrollContent: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingTop: 40,
    },

    image: {
       opacity: 0.60,
       resizeMode: 'cover',
    },
    
     background: {
       flex: 1,
       width: '100%',
       height: '100%',
       alignItems: 'center',
       backgroundColor: '#000',
    },

    text: {
        color: 'white',
        fontSize: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: '#fff',
        borderRadius: 30,
        margin: 5,
        letterSpacing: 1,


        textShadowColor: 'rgba(0, 0, 0, 0.87)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,

    },
    
});