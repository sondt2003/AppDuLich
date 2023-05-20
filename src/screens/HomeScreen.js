import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, ScrollView } from "react-native"
import { useRef, useState } from "react";
import Slider from "../component/Slider"
import data from "../data/index";
import PlaceItem from "../component/PlaceItem";
export default function HomeScreen(props) {



    const [selectedMenuItem, setSelectedMenuItem] = useState('Địa điểm nổi tiếng');


    const handleMenuItemPress = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../img/fi_menu.png')} style={styles.icon} />
            <Text style={styles.title}>Travenus</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuItemPress('Địa điểm nổi tiếng')}
                >
                    <Text style={[selectedMenuItem === 'Địa điểm nổi tiếng' && styles.selectedMenuItem,]}>Địa điểm nổi tiếng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuItemPress('Featured')}
                >
                    <Text style={[selectedMenuItem === 'Featured' && styles.selectedMenuItem,]}>Featured</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuItemPress('Most Visited')}
                >
                    <Text style={[selectedMenuItem === 'Most Visited' && styles.selectedMenuItem,]}>Most Visited</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuItemPress('Europe')}
                >
                    <Text style={[selectedMenuItem === 'Europe' && styles.selectedMenuItem,]}>Europe</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../img/travenus2.png')} style={styles.logo} />

            <View style={{ top: 150 }}>
                <Slider />
            </View>

            <View style={{ position: 'absolute', top: 470, left: 36 }}>
                <Text style={{ color: "#000000", fontWeight: "700", fontSize: 18 }}>Recommended</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', top: 473, right: 25 }}>
                <Text style={{ color: "#000000" }}>View All</Text>
            </TouchableOpacity>

            <ScrollView style={{ position: 'absolute', top: 500, paddingBottom: 800 }} contentContainerStyle={{ flexDirection: "row" }}>
                <View style={styles.wrapper}>
                    {data.slice(0, Math.ceil(data.length / 2)).map((item) => (
                        <View key={item.id} style={styles.item}>
                            <PlaceItem place={item} />
                        </View>
                    ))}
                </View>
                <View style={styles.wrapper}>
                    {data.slice(Math.ceil(data.length / 2)).map((item) => (
                        <View key={item.id} style={styles.item}>
                            <PlaceItem place={item} />
                        </View>
                    ))}
                </View>
            </ScrollView>

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
    logo: {
        position: 'absolute',
        top: 40,
        left: 354,
        width: 53,
        height: 49,
        borderRadius: 50,
    },
    icon: {
        position: 'absolute',
        top: 40,
        left: 20
    },

    wrapper: {
        padding: 12,
    },

    item: {
        marginBottom: 10,

    },

    menuContainer: {
        left: 20,
        top: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },

    menuItem: {
        padding: 8,
    },

    selectedMenuItem: {
        color: '#403A7A',
        fontWeight: '900'
    },

    title: {
        color: '#FFF',

        fontSize: 27,
        position: 'absolute',
        top: 40,
        left: 141
    },

    detail: {
        color: '#FFF',

        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 30,
        marginTop: 30
    },
    btn: {
        marginTop: 80,
        backgroundColor: '#E2443B',
        paddingHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 30
    },
    text: {
        fontSize: 30,
        color: '#FFF'
    }
})