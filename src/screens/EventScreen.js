import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
export default function EventScreen(props) {

    return (
        <View style={styles.container}>
            <Text>
                FindScreen
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8D4D0'
    },
})