import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View,Button,Alert} from 'react-native';
import React, {useState} from 'react';


export default function SupportScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travenus</Text>
            <Text style={{fontSize:20}}>Liên hệ với chúng tôi</Text>
            <Image style={styles.image} source={require('../img/img.png')} />
            <Text style={{fontSize:40}}>Bạn có câu hỏi ư ?</Text>
            <Text style={{fontSize:20}}>Hãy nhắn tin cho chúng tôi để được phản hồi nhanh chóng</Text>
            <View style={styles.row}>
                <Image  style={{height:25,width:25}}
                        source={{uri:'https://cdn-icons-png.flaticon.com/128/1292/1292834.png'}} />
                <Text style={{fontSize:20,marginLeft:15}}>Nền tảng nhắn tin an toàn và free</Text>
            </View>
            <View style={styles.row}>
                <Image  style={{height:25,width:25}}
                        source={{uri:'https://cdn-icons-png.flaticon.com/128/1292/1292834.png'}} />
                <Text style={{fontSize:20,marginLeft:15}}>Nền tảng nhắn tin an toàn và free</Text>
            </View>
            <View style={styles.row}>
                <Image  style={{height:25,width:25}}
                        source={{uri:'https://cdn-icons-png.flaticon.com/128/1292/1292834.png'}} />
                <Text style={{fontSize:20,marginLeft:15}}>Nền tảng nhắn tin an toàn và free</Text>
            </View>
            <View  style={styles.button}>
                <Button

                    color={'black'}
                    title="SOẠN TIN NHẮN"

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
    image:{
        width:400,
        height:300,
        borderRadius:10
    },
    row:{
        flexDirection:"row",
        marginTop:20
    },    button:{
        width:350,
        height:60,
        backgroundColor:'#C9AE82',
        marginTop:90,
        marginLeft:5,
        borderRadius:10,
        justifyContent:"center"
    }
});
