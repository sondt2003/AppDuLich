import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View,Button,Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function CreatAccScreen() {
    const [account, setAccount] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullName] = useState('');
    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match");
            return;
        }
        // Gửi yêu cầu POST đến API để xử lý đăng ký
        axios.post('http://192.168.0.103:3000/auth/register/api', {account, email, password,fullname })
            .then(response => {
                // Xử lý phản hồi thành công
                alert("Đăng Ký Thành Công");
                clearInputs()

            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
            });
    };
    const clearInputs = () => {
        setAccount('')
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFullName('')
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travenus</Text>
            <Text style={{fontSize:20}}>Tạo Tài Khoản</Text>
            <View>
                <Text style={{fontSize:20}}>Account</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Enter Your email"
                    value={account}
                    onChangeText={text => setAccount(text)}
                />
                <Text style={{fontSize:20}}>email</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Enter Your email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={{fontSize:20}}>password</Text>
                <TextInput keyboardType={""}
                           style={styles.searchInput}
                           secureTextEntry={true}
                           placeholder="Enter Your password"
                           value={password}
                           onChangeText={text => setPassword(text)}
                />
                <Text style={{fontSize:20}}>repass</Text>
                <TextInput
                    style={styles.searchInput}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Text style={{fontSize:20}}>fullname</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Enter Your fullname"
                    value={fullname}
                    onChangeText={text => setFullName(text)}
                />
                <View  style={styles.button}>
                    <Button
                        color={'black'}
                        title="Tạo Tài Khoản"
                        onPress={handleRegister}
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
        marginTop:40,
    },
    searchInput: {
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
        width:350,
        height:40,
        backgroundColor:'#C9AE82',
        marginTop:90,
        marginLeft:5,
        borderRadius:10
    }
});
