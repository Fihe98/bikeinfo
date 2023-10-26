import { View ,StyleSheet, Text, FlatList, ImageBackground, Image } from "react-native";

export default function BikeDetails({ route, navigation }) {
    const { selectedItem } = route.params;

    modelInfo = []
    bikeimagePath = ""
    /* Yamaha */
    if (selectedItem === "R125") {
      modelInfo = ["Name: R125",
                   "Type: Sport",
                   "Engine: 125cc single cylinder",
                   "Power output: 11kW (15PS) @ 10,000rpm"]
      bikeimagePath = require('../images/R125.jpeg')
    } else if (selectedItem === "R3") {
      modelInfo = ["Name: R3",
                  "Type: Sport",
                  "Engine: 321cc 2-cylinder",
                  "Power output: 30,9kW (42PS) @ 10,750rpm"]
      bikeimagePath = require('../images/R3.jpeg')
    }  else if (selectedItem === "R7") {
      modelInfo = ["Name: R7",
                  "Type: Supersport",
                  "Engine: 689cc 2-cylinder",
                  "Power output: 54W (73.4PS) @ 8.750rpm"]
      bikeimagePath = require('../images/R7.jpeg')
    }  else if (selectedItem === "R1") {
      modelInfo = ["Name: R1",
                  "Type: Supersport",
                  "Engine: 998cc 4-cylinder",
                  "Power output: 147,1kW (200PS) @ 13,500rpm"]
       bikeimagePath = require('../images/R1.jpeg')
    /* Suzuki */
    }  else if (selectedItem === "GSX250R") {
      modelInfo = ["Name: GSX250R",
                  "Type: Sport",
                  "Engine: 248cc 2-cylinder",
                  "Power output: 18.4kW (24.7PS) @6500rpm"]
       bikeimagePath = require('../images/GSX250R.png')
    }   else if (selectedItem === "GSXR600") {
      modelInfo = ["Name: GSXR600",
                  "Type: Supersport",
                  "Engine: 599cc 4-cylinder",
                  "Power output: 93kw (125PS) @ 13,500rpm"]
      bikeimagePath = require('../images/GSXR600.png')
    }  else if (selectedItem === "GSXR750") {
      modelInfo = ["Name: GSXR750",
                  "Type: Supersport",
                  "Engine: 750cc 4-cylinder",
                  "Power output: 95,4kW (127PS) @ 12,600rpm"]
      bikeimagePath = require('../images/GSXR750.png')
    }  else if (selectedItem === "GSXR1000") {
      modelInfo = ["Name: GSXR1000",
                  "Type: Supersport",
                  "Engine: 998cc 4-cylinder",
                  "Power output: 147,1kW (200PS) @ 13,500rpm"]
       bikeimagePath = require('../images/GSXR1000.png')
    }
    return(
      <View style={styles.container}>
      <Image style={styles.bikeImage} source={bikeimagePath}></Image>
      <FlatList
      data={modelInfo}
      renderItem={({ item }) => (
               <Text style={styles.detailtextStyle}>{item}</Text>
)}
/>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailtextStyle: {
      flex: 1,
      margin: 3,
      fontSize: 22,
      textAlign: "left"
    },
    bikeImage: {
      flex: 1,
      justifyContent: "center",
      marginBottom: "10%",
      width: "100%",
      height: "100%",
    }
  });