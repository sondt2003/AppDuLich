import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View,Button,Alert} from 'react-native';
import React, {useState} from 'react';


export default function HelloScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../img/img_1.png')} />
            <Text  style={styles.text} >Travenus</Text>

            <View style={styles.hellocontainer}>
                <Image style={styles.textimg} source={require('../img/img_3.png')} />
                <Text  style={{width:320,marginTop:20,fontSize:16}} >Enjoy your winter vacations with warmth
                    and amazing sightseeing on the mountains.
                    Enjoy the best experience with us!</Text>

                <View  style={styles.button}>
                    <Button
                        style={styles.button}
                        color={'white'}
                        title="Let’s Go! ➢"

                    />
                </View>
            </View>

            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#F8D4D0'
    },
    title: {
        color: '#FFF',

        fontSize: 40,
        textAlign:'center',
        marginTop:10,

    },
    image:{
        height:360,
        width:"100%"
    },
    text:{
        fontSize:40,

    },
    textimg:{

        marginTop:30,
        height:90,
        width:300
    },
    button:{

        width:200,
        height:50,
        backgroundColor:'#C9AE82',
        marginTop:90,

        borderRadius:30,
        justifyContent:"center"
    },
    hellocontainer:{
        flexDirection:"column",
        justifyContent:'space-between'
    }



});



