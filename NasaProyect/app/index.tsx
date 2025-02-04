import Home from "@/src/views/Home/Home";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.grandContainer}
    >
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  grandContainer: {
    flex: 1,
    justifyContent: "flex-start", // Alinea el contenido desde arriba
    alignItems: "stretch", // Asegura que los hijos ocupen todo el ancho
    backgroundColor: 'rgba(7,26,93,255)',
  }
});