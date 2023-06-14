import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, TouchableOpacity, Text,FlatList } from "react-native"
import React from "react";
import {useEffect,useState} from "react";
export default function EventScreen(props) {
    const [dulieu,setDuLieu]=useState();
    useEffect(()=>{

        fetch('http://192.168.0.103:3000/travel-event/api')
            .then(response=>response.json())
            .then(data=>{setDuLieu(data)})


    },[])
    return (

            <View style={styles.container}>
                <Text style={styles.title}>Event</Text>
                <Image source={require('../img/travenus2.png')} style={styles.logo} />
                <FlatList style={styles.flatlist} data={dulieu}
                          renderItem={({item})=>{return (
                              <View style={styles.item}>



                                  <Image style={{height:350,width:380, borderRadius:10}} source={{uri:'http://192.168.0.103:3000/photos/'+item.place.image}}/>
                                  <Text  style={{color: '#1E9781',padding:12,fontSize:30}}>{item.event}</Text>

                                  <Text  style={styles.textdate}>Bắt Đầu: {item.dateStart.slice(0,-14)}</Text>
                                  <Text  style={styles.textdate}>Kết Thúc: {item.dateEnd.slice(0,-14)}</Text>
                                  <View style={styles.itemplace}>
                                      <Image style={styles.imgplace} source={{uri:'https://cdn-icons-png.flaticon.com/128/535/535239.png'}} />
                                      <Text style={{color:'#7C8DB0',fontSize:20,marginLeft:5}}>{item.place.name}</Text>

                                  </View>
                                  <Text style={{color:'#7C8DB0',fontSize:20,padding:12}}>{item.description}</Text>



                              </View>)}

                }/>


                <StatusBar style="light" />
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
    flatlist: {
        marginTop: 10,


    },
    item:{
        width:380,
        backgroundColor:'white',

        margin:10,
        borderRadius:10,

    },    logo: {
        position: 'absolute',
        top: 40,
        left: 354,
        width: 53,
        height: 49,
        borderRadius: 50,
    },
    title: {
        color: '#FFF',

        fontSize: 27,
        textAlign:'center',
        marginTop:50,

    },
    textdate:{
        color:'#7C8DB0',
        fontSize:20,
        paddingLeft:12,
    },
    imgplace:{
        width:20,
        height:20
    },
    itemplace:{
        flexDirection:"row",
        paddingLeft:12,
        marginTop:10
    }

})