import { View, Text, StyleSheet, Image, Linking, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Presentation() {


let text_variable="Qamar EL OTMANI";

const [showPhone, setShowPhone] = useState(false);
const phone='+33 7 53 49 89 56';

const cvUrl = "https://drive.google.com/uc?export=download&id=1zvckvUI1axZtNtgl_YfQX5BHQ2Dbb2_i";
const openCV = () => {
  Linking.openURL(cvUrl);
};

  return (
  <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContent}>
     <View style={styles.container}>
        <View style={styles.imageShadow}>
          <Image source= {require('../assets/profil2.png')} style={styles.image} blurRadius={1}/>
          <View><Text style={styles.var}>{text_variable}</Text></View>
        </View>

        <Text style={[{ color: '#fff', fontSize: 18, letterSpacing: 4, marginBottom: 15}, styles.text]}>Web Developer<Text style={{color: 'red'}}> &</Text> Designer</Text>
        <Text style={{color:'#fff', margin: 'auto', letterSpacing: 2, textAlign: 'center', paddingHorizontal: 25, marginBottom: 15 }}>  Je débute en création de sites web, j'allie la rigueur technique du développement Backend (Symfony/PHP) à l'élégance du Design UI/UX. {"\n\n"}  Mon objectif est de transformer des idées en expériences numériques fluides et marquantes !</Text>

        <View style={styles.cardContainer}>
          <Pressable style={styles.card} onPress={() => setShowPhone(!showPhone)}><Text style={[{fontSize: 15}, styles.text]}>Contactez-moi</Text></Pressable>  
          <Pressable style={styles.card} onPress={openCV}><Text style={[{fontSize: 15}, styles.text]}>Télécharger CV</Text></Pressable>
        </View>

         {showPhone && (
          <Text style={{ color: '#fff', marginTop: 20, fontSize: 16 }}>
            📞 {phone}
          </Text>
        )}
          
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  
    container: {
      alignItems: 'center',
    },

    var:{
      fontWeight: 'bold',
      fontSize: 24,
      color: '#fff',
      letterSpacing: 2,
    },

    imageShadow:{
      width: '65%',
      aspectRatio: '0.8',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },

    image: {
      width: '100%',
      height: '100%',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#ffffff14',
      resizeMode: 'cover',
      opacity: 0.60,
    },

    cardContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },

    card: {
      backgroundColor: 'rgba(167, 0, 0, 0.37)', //rouge transparent
      padding: 20,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'rgba(210, 210, 210, 0.41)',
      width: '45%',
    },

    text: {
      color: '#fff',
      fontWeight: 'bold',
      textShadowColor: 'rgba(255, 255, 255, 0.66)',
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 3,
    },

    scrollContent: {
      flexGrow: 1,
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 40,
      backgroundColor: '#0d0d0d',
    },
});
