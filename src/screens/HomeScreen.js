import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, ScrollView, SafeAreaView } from "react-native"
import { useEffect, useRef, useState } from "react";
import Slider from "../component/Slider"
import PlaceItem from "../component/PlaceItem";
import { API_PLACE } from "../../env";
export default function HomeScreen(props) {

    const [data,setData] = useState([]);
    useEffect(() => {
        fetch(API_PLACE).then(res => res.json()).then(data => setData(data));
      },[])

    const [selectedMenuItem, setSelectedMenuItem] = useState('Địa điểm nổi tiếng');

    const goDetail = (event, item) => {
        event.persist();
        props.navigation.navigate('Details', { item: item });
    }

    const handleMenuItemPress = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", marginVertical: 20 }}>
                <Text style={styles.title}>Travenus</Text>

                <TouchableOpacity style={{ position: 'absolute', right: 20 }} onPress={() => props.navigation.navigate('Account')} activeOpacity={0.5}>
                    <Image source={require('../img/travenus2.png')} style={styles.logo} />

                </TouchableOpacity>
            </View>
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
            <View style={{marginVertical:10}}>

                <Slider data={data}/>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginVertical:8 }}>

                <Text style={{ color: "#000000", fontWeight: "700", fontSize: 18, marginHorizontal: 16 }}>Recommended</Text>

                <TouchableOpacity style={{ marginHorizontal: 16 }}>
                    <Text style={{ color: "#000000" }}>View All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{marginBottom:40}} contentContainerStyle={{ flexDirection: "row" }}>
                <View style={styles.wrapper}>
                    {data.slice(0, Math.ceil(data.length / 2)).map((item) => (
                        <View key={item.id} style={styles.item}>
                            <PlaceItem onPress={(event) => goDetail(event, item)} place={item} />
                        </View>
                    ))}
                </View>
                <View style={styles.wrapper}>
                    {data.slice(Math.ceil(data.length / 2)).map((item) => (
                        <View key={item.id} style={styles.item}>
                            <PlaceItem onPress={(event) => goDetail(event, item)} place={item} />
                        </View>
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F8D4D0'
    },

    logo: {

        width: 53,
        height: 49,
        borderRadius: 50,

    },
    icon: {
    },

    wrapper: {
        
        padding: 12,
    },

    item: {
        marginBottom: 10,

    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:18
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
        textAlign: 'center',
        fontSize: 27,
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