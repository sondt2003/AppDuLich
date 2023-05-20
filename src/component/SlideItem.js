import { Image, Text, View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function SlideItem({ item }) {
    return (
        <View style={styles.container}>
            <Image source={item.img} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 255,
        alignItems: 'center',
        

    },
    image: {
        borderRadius: 30,
        width: width * 0.9,
        height: 255,
    }
})