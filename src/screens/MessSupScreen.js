import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View, Button, Alert, LogBox} from 'react-native';
import React, {useState} from 'react';



export default function MessSupScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travenus</Text>
            <Text style={{fontSize:20}}>Liên hệ với chúng tôi</Text>
            <Text style={{fontSize:40,marginTop:20}}>Viết vấn để của bạn ?</Text>
            <TextInput
                style={styles.input}



            />
            <View  style={styles.button}>
                <Button

                    color={'black'}
                    title="SOẠN TIN NHẮN"
                    onPress={() =>{


                    }}
                />
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
        marginTop:40,

    },

    button:{
        width:350,
        height:60,
        backgroundColor:'#C9AE82',
        marginTop:90,
        borderRadius:10,
        justifyContent:"center"
    },
    input:{
        opacity:0.7,
        marginTop:5,
        width:360,
        height: 300,
        backgroundColor:'#FFFFFF',
        borderColor: 'gray',
        borderWidth: 1,

        paddingHorizontal: 10,
        borderRadius:10
    }
});
