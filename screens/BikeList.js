import { View ,StyleSheet, Text, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";

export default function BikeList({ route, navigation }) {
    const { selectedItem } = route.params;
    brandColor = ""
    models = []
    if (selectedItem.name === "Yamaha") {
        models = ["R125", "R3", "R7", "R1"]
        brandColor = styles.yamahaColor
    } else if (selectedItem.name === "Suzuki"){
        models = ["GSX250R", "GSXR600", "GSXR750", "GSXR1000"]
        brandColor = styles.suzukiColor
    } else if (selectedItem.name === "Ducati"){
        models = ["Supersport 950", "Panigale V2", "Panigale V4", "Superleggera V4"]
        brandColor = styles.ducatiColor
    }

    const modelClick = (item) => {navigation.navigate("Details", { selectedItem: item});};

    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.brbrandStyle} source={{uri:selectedItem.brandBackground.toString()}} />
            <Image style={styles.YamahaLogo} source={{uri:selectedItem.imagePath.toString()}} />
            <FlatList
            data={models}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => modelClick(item)}>
                     <Text style={brandColor}>{item}</Text>
                </TouchableOpacity>
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
      justifyContent: 'center'
    },
    YamahaLogo: {
        marginTop: "10%",
        width: 150,
        height: 150,
        resizeMode: "contain"
    },
    yamahaColor: {
        flex: 1,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        margin: '10%',
        fontSize: 30,
        overflow: "hidden",
        backgroundColor: "#F30611",
        borderRadius: 10,
        borderWidth: 10,
        borderColor: "#F30611",
        height: 55,
        width: 90,

    },
    suzukiColor: {
        flex: 1,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        margin: '10%',
        fontSize: 30,
        overflow: "hidden",
        backgroundColor: "#003399",
        borderRadius: 10,
        borderWidth: 10,
        borderColor: "#003399",
        height: 55,
        width: 170

    },
    ducatiColor: {
        flex: 1,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        margin: '10%',
        fontSize: 30,
        overflow: "hidden",
        backgroundColor: "red",
        borderRadius: 10,
        borderWidth: 10,
        borderColor: "red",
        height: 55,
        width: 240

    },
    brbrandStyle: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "absolute"
    }
    
  });