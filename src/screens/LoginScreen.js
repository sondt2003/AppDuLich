import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity, Text, KeyboardAvoidingView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_LOGIN } from '../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const data = { email, password };
    const handleLogin = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "connect.sid=s%3AykJKWQ1sWrjqpyAEJsnJ4kAatSLdcEg5.uUh0SN8NT03UayjTYcC%2FmQsZUl5TaSptdIIfViptozo");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(API_LOGIN, requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result == 'success') {
                    props.navigation.navigate('Root');
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ position: 'absolute', top: 64, left: 30, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require('../img/travenus2.png')} />
                <Text style={{ color: 'white', fontSize: 48, marginLeft: 44 }}>
                    Travenus
                </Text>
            </View>
            <View style={{ position: 'absolute', top: 150, left: 30 }}>
                <Text style={{ fontSize: 24 }}>Tài khoản</Text>
            </View>
            <View style={{ position: 'absolute', top: 190, left: 30, width: '100%' }}>
                <TextInput
                    style={{ backgroundColor: 'white', width: "80%", fontSize: 20, borderRadius: 10, padding: 16 }}
                    value={email}
                    placeholder='Tài khoản'
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={{ position: 'absolute', top: 260, left: 30 }}>
                <Text style={{ fontSize: 24 }}>Mật khẩu</Text>
            </View>
            <View style={{ position: 'absolute', top: 300, left: 30, width: '100%' }}>
                <TextInput
                    style={{ backgroundColor: 'white', width: "80%", fontSize: 20, borderRadius: 10, padding: 16 }}
                    value={password}
                    placeholder='Mật khẩu'
                    onChangeText={(text) => setPass(text)}
                    placeholderTextColor={'gray'}

                />
            </View>
            <View style={{ position: 'absolute', top: 370, left: 30, flexDirection: 'row' }}>
                <Text style={{ fontSize: 20 }}>
                    Bạn chưa có tài khoản?
                </Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 20 }}> Tạo tài khoản</Text>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', left: 30, width: "100%", top: 420 }}>
                <TouchableOpacity onPress={handleLogin} activeOpacity={0.6}>
                    <View style={{ backgroundColor: '#239BD8', width: "80%", flexDirection: 'row', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontSize: 24, marginHorizontal: 20 }}>CONTINUE</Text>
                        <Ionicons name='arrow-forward' color={'white'} size={30} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', top: 520, width: '100%', left: 30 }}>
                <View style={{ borderColor: '#239BD8', borderBottomWidth: 1, width: '80%' }}>

                </View>
                <Text style={{ position: 'absolute', left: "38%", top: -15, backgroundColor: '#F8D4D0', fontSize: 20, paddingHorizontal: 8 }}>or</Text>
            </View>

            <View style={{ position: 'absolute', top: 550, left: 30, width: '100%' }}>
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', width: '80%', borderRadius: 10, borderColor: '#BDBDBD', borderWidth: 1, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../img/google.png')} style={{ width: 40, height: 40 }} />
                        <Text style={{ marginHorizontal: 30, fontSize: 20 }}>
                            Đăng nhập với Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', top: 630, left: 30, width: '100%' }}>
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={{ backgroundColor: '#239BD8', flexDirection: 'row', width: '80%', borderRadius: 10, borderColor: '#BDBDBD', borderWidth: 1, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name='logo-facebook' color={'white'} size={40} />
                        <Text style={{ marginHorizontal: 20, fontSize: 20, color: 'white' }}>
                            Đăng nhập với Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8D4D0'
    }
})