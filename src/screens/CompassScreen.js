import { View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, StatusBar, Platform } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";
export default function CompassScreen(props) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ position: 'absolute', top: Platform.OS == 'android' ? StatusBar.currentHeight : 40 }}>
                <Text style={{ color: '#C9AE82', fontSize: 48 }}>
                    Travenus
                </Text>
                <Text style={{ color: '#6A62B7', fontSize: 24 }}>
                    Share your moment
                </Text>
            </View>
            <View style={{ position: 'absolute', left: 30, top: 130 }}>
                <Text style={{ fontSize: 40, color: '#172432' }}>
                    Trip Planners
                </Text>
                <View style={{ borderColor: '#FF7757', borderBottomWidth: 3, width: "55%", top: 10, left: 10 }}></View>

            </View>
            <View style={{ position: 'absolute', top: 200, left: 30, width: 322 }}>
                <Text style={{ fontSize: 18, }}>
                    20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.
                </Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', top: 310, left: 30, width: 322 }} activeOpacity={0.8}>
                <View style={{ backgroundColor: '#172432', width: 43, height: 43 }}></View>
                <View style={{ top: 12, left: "55%", backgroundColor: '#767E86', width: 43, height: 43 }}></View>
                <View style={{ top: -66, left: 12, backgroundColor: "#FF7757", width: 186, height: 61, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>View all trip plans</Text>
                </View>
            </TouchableOpacity>
            <View style={{ left: 20, position: 'absolute', top: 410 }}>
                <Text style={{ fontSize: 40, lineHeight: 52 }}>
                    Destination Gallery
                </Text>
            </View>
            <View style={{ borderColor: '#FF7757', borderBottomWidth: 3, width: "90%", top: 460,position:'absolute' ,left:20}}></View>
            <View style={{ position: 'absolute', top: 470, left: 20 }}>
                <Text style={{ color: "#767E86", fontSize: 18 }}>
                    Our photo gallery on trip
                </Text>
            </View>
            <View style={{position:'absolute',top:480,width: '80%'}}>
                <Image style={{ width: '100%', height: 200 ,borderRadius:26,top:26}} resizeMode="center" source={require('../img/photo7.png')} />
            </View>
            <View style={{position:'absolute',top:720,flexDirection:'row',columnGap:40,alignItems:'center'}} >
                <TouchableOpacity style={{backgroundColor:"#172432",padding:8,borderRadius:12,alignItems:'center',justifyContent:'center'}} activeOpacity={0.7}>
                    <Ionicons name='chevron-back-outline' color="white" size={26}/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#FF7757",padding:8,borderRadius:12,alignItems:'center',justifyContent:'center'}} activeOpacity={0.7}>
                    <Ionicons name='chevron-forward-outline' color="white" size={26}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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