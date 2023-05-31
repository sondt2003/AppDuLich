import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';


export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travenus</Text>

            <View>
                <Text style={{fontSize:30,
                    margin:10}}>Đăng Nhập</Text>
                <Text style={{fontSize:20,color:'grey'}}>Tài Khoản</Text>
                <TextInput
                    style={styles.loginInput}


                    placeholder="Nhập Tài Khoản"
                />
                <Text style={{fontSize:20,color:'grey',marginTop:20}}>Mật Khẩu</Text>
                <TextInput keyboardType={""}
                           style={styles.loginInput}

                           secureTextEntry={true}
                           placeholder="Nhập Mật Khẩu"
                />
                <View style={styles.signup}>
                    <Text style={{fontSize:18,color:'grey',marginTop:20}}>Bạn chưa có tài khoản ?</Text>
                    <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginTop:20}}> Tạo tài khoản</Text>
                </View>

                <View  style={styles.button}>
                    <Button
                        color={'white'}
                        title="Đăng Nhập"
                        onPress={() => Alert.alert('done')}

                    />

                </View>
                <TouchableOpacity style={styles.facebook}>
                    <Image style={{width:30,height:30}} source={{uri:"https://cdn-icons-png.flaticon.com/128/5968/5968764.png"}}/>
                    <Text style={{fontSize:18,color:'black',margin:5}}>Đăng Nhập Bằng FaceBook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.google }>
                    <Image style={{width:30,height:30}} source={{uri:"https://cdn-icons-png.flaticon.com/128/300/300221.png"}}/>
                    <Text style={{fontSize:18,color:'black',margin:5}}>Đăng Nhập Bằng Google</Text>
                </TouchableOpacity>

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
    loginInput: {
        opacity:0.7,
        marginTop:5,
        width:360,
        height: 50,
        backgroundColor:'#FFFFFF',
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        borderRadius:10
    },
    button:{
        width:360,
        height:50,
        backgroundColor:'#239BD8',
        marginTop:70,

        borderRadius:10,
        justifyContent:"center",

    },
    signup:{
        flexDirection:'row'
    },
    facebook:{

        marginTop:40,
        width:360,
        flexDirection:"row",
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        padding:10,
        justifyContent:"center"
    },
    google:{

        marginTop:10,
        width:360,
        flexDirection:"row",
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        padding:10,
        justifyContent:"center"
    }
});
