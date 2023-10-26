import { View ,StyleSheet, Text, Image, TouchableOpacity, Button, FlatList, ImageBackground } from "react-native";

export default function MainScreen({ navigation }) {
    
    const brImage = require('../images/MainBackground.jpeg');
    const brands = [{name:"Yamaha", imagePath:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/YamahaLogo.png', 
                    brandBackground:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/YamahaScreen.webp'},
                    {name:"Suzuki", imagePath:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/SuzukiLogo.png',
                    brandBackground:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/SuzukiScreen.jpeg'},
                    {name:"Ducati", imagePath:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/DucatiLogo.png',
                    brandBackground:'/Users/filip/Documents/Projekt/reactnative/bikeinfo/images/DucatiScreen.png'}];
    
    const imageClick = (item) => {navigation.navigate("List", { selectedItem: item});};

    return(
        <View style={styles.container}>
            <ImageBackground source={brImage} style={styles.brStyle} />
            <FlatList
            data={brands}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => imageClick(item)}>
                     <Image style={styles.YamahaLogo} source={{uri:item.imagePath.toString()}} />
                </TouchableOpacity>
    )}
    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
    YamahaLogo: {
        alignSelf: "center",
        resizeMode: "contain",
        margin: "8%",
        width: 150,
        height: 150,
    },
    brStyle: {
        alignSelf: "auto",
        justifyContent: "center",
        flex: 1,
        height: "1100%",
        width: "125%",
    }
  });