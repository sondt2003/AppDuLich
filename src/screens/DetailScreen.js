
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_PHOTOS } from '../../env';
const DetailsScreen = (props) => {

    const { item } = props.route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>



            <View style={styles.backGroundImage}>
                <Image style={styles.img} source={{uri:`${API_PHOTOS}${item.image}`}} />
            </View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons style={styles.icon} size={26} name='arrow-back'/>
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.nameGroup}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.locationGroup}>
                    <Ionicons name='location-outline' size={24} />
                    <Text style={styles.location}>{item.address}</Text>
                </View>
                <View style={styles.descGroup}>
                    <View>
                        <Text style={styles.headerTitleDesc}>
                            Description
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default DetailsScreen;

const styles = StyleSheet.create({
    icon: {
        left: 10
    },
    backGroundImage: {
        position: 'absolute',
        top: 0,
        width: "100%",
    },

    nameGroup: {
        position: 'absolute',
        left: 20,
        top: 41,
    },
    name: {
        fontWeight: '900',
        color: 'black',
        fontSize: 24
    },
    img: {
        width: "100%",
        height: 389
    },

    locationGroup: {
        flexDirection: 'row',
        left: 20,
        alignItems: 'center',
        top: 78,
    },
    location: {
        color: 'black',
        fontWeight: "700",
        fontSize: 16
    },

    headerTitleDesc: {
        fontSize: 20,
        fontWeight: 700,
        color: 'black',
    },
    descGroup: {
        position: 'absolute',
        top: 120,
        left: 20,
        rowGap: 10,
        width: "90%"
    },
    desc: {
        fontSize: 18,
        color: 'black',
        lineHeight: 25
    },


    footer: {
        height: "70%",
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        width: "100%",
        bottom: 0
    }
})