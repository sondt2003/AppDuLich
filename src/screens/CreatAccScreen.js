import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, View,Button,Alert} from 'react-native';
import React, {useState} from 'react';


export default function CreatAccScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travenus</Text>
            <Text style={{fontSize:20}}>Tạo Tài Khoản</Text>
            <View>
                <Text style={{fontSize:20}}>email</Text>
                <TextInput
                    style={styles.searchInput}


                    placeholder="Enter Your email"
                />
                <Text style={{fontSize:20}}>password</Text>
                <TextInput keyboardType={""}
                           style={styles.searchInput}

                           secureTextEntry={true}
                           placeholder="Enter Your password"
                />
                <Text style={{fontSize:20}}>repass</Text>
                <TextInput
                    style={styles.searchInput}

                    secureTextEntry={true}
                    placeholder="Enter Your repass"
                />
                <Text style={{fontSize:20}}>fullname</Text>
                <TextInput
                    style={styles.searchInput}


                    placeholder="Enter Your fullname"
                />
                <View  style={styles.button}>
                    <Button
                        color={'black'}
                        title="Tạo Tài Khoản"
                        onPress={() => Alert.alert('done')}
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
