import { View, ScrollView, Dimensions, ImageBackground } from "react-native";
import Experiences from "./Experiences";
import Competences from "./Competences";

const { width } = Dimensions.get("window");

export default function Scroll() {
  return (
    <View style={{ flex: 1 }}>

      <ImageBackground
        source={require("../assets/profil.png")}
        style={{position: "absolute", width: "100%", height: "100%",}}
        imageStyle={{ opacity: 0.6 }}
      />

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>

        <View style={{ width, flex: 1 }}>
          <Experiences />
        </View>

        <View style={{ width, flex: 1 }}>
          <Competences />
        </View>

      </ScrollView>

    </View>
  );
}