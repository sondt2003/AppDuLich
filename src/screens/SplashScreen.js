import { SafeAreaView, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function SplashScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ position: 'absolute', top: 0 }}>

                <Image source={require('../img/image7.png')} />
            </View>
            <View style={{ position: 'absolute', top: 440, marginHorizontal: "35%" }}>
                <Text style={styles.textHeader}>
                    Travenus
                </Text>
            </View>
            <View style={{ position: 'absolute', top: 500, width: 240, left: 40 }}>
                <Text style={styles.title}>
                    Winter Vacation Trips
                </Text>
            </View>
            <View style={{ position: 'absolute', top: 600, left: 40, right: 86 }}>
                <Text style={styles.description}>
                    Enjoy your winter vacations with warmth
                    and amazing sightseeing on the mountains.
                    Enjoy the best experience with us!
                </Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Root') } style={{ position: 'absolute', top: 700, left: 40 }}>
                <View style={styles.btn}>
                    <Text style={styles.textBtn}>
                        Let’s Go!
                    </Text>
                    <View>
                        <Ionicons name='arrow-forward' size={26} color={'white'} />

                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E5E1',
    },
    textHeader: {
        fontSize: 27,
        color: 'black',
    },
    title: {
        color: '#2C2C2C',
        fontSize: 36
    },
    description: {
        fontSize: 16,
        color: '#2C2C2C'
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight:'900'

    },
    btn: {
        backgroundColor: '#D9CAAB',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height:50,width:180,
    }
})