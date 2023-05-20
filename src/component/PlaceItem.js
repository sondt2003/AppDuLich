import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

export default function PlaceItem(props) {
    const { place } = props;

    return (
       
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.img} source={place.img} />
                </TouchableOpacity>
            </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    img: {
        borderRadius: 30,
        width: 175,
        height: 175,
    },

})