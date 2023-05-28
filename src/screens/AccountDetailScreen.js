import moment from "moment/moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function AccountDetailScreen(props) {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity style={{ marginHorizontal: 16 }}>
                            <Ionicons name="arrow-back" size={26} />
                        </TouchableOpacity>
                        <View style={{ left: "100%" }}>
                            <Text style={{ color: 'white', fontSize: 48, textAlign: 'center' }}>Travenus</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 24, textAlign: 'center' }}>Thông tin tài khoản </Text>
                </View>
                <View style={{ marginTop: 32 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View >
                            <Text style={{ fontSize: 24, fontStyle: 'italic', marginHorizontal: 8 }}>Dữ liệu cá nhân </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ color: "#3138E4", fontSize: 24, marginHorizontal: 8 }}>Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 8, marginVertical: 6 }}>
                    <TextInput
                        placeholder="Họ tên"
                        style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, fontSize: 24, borderRadius: 12 }}
                        placeholderTextColor="#aaaaaa"
                    />
                </View>

                <View style={{ marginHorizontal: 8, marginVertical: 6 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, borderRadius: 12 }} onPress={() => showDatePicker()}>
                        {/* <TextInput
                            value={moment(date).format('DD-MM-YYYY')}
                            placeholder="Ngày sinh"
                            
                            style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, fontSize: 24, borderRadius: 12 }}
                            placeholderTextColor="#aaaaaa"
                        /> */}
                        <Text style={{fontSize: 24}}>{moment(date).format('DD-MM-YYYY')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 8, marginVertical: 6 }}>
                    <TextInput
                        placeholder="Thành phố bạn đang ở"
                        style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, fontSize: 24, borderRadius: 12 }}
                        placeholderTextColor="#aaaaaa"
                    />
                </View>
                <View style={{ marginHorizontal: 8, marginVertical: 6 }}>
                    <TextInput
                        placeholder="Email"
                        style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, fontSize: 24, borderRadius: 12 }}
                        placeholderTextColor="#aaaaaa"
                    />
                </View>
                <View style={{ marginHorizontal: 8, marginVertical: 6 }}>
                    <TextInput
                        keyboardType="phone-pad"
                        placeholder="Số điện thoại"
                        style={{ backgroundColor: 'white', color: 'black', height: 48, padding: 12, fontSize: 24, borderRadius: 12 }}
                        placeholderTextColor="#aaaaaa"
                    />
                </View>
            </KeyboardAvoidingView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                locale="vi"
                cancelTextIOS="Hủy"
                confirmTextIOS="Chọn"
                maximumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8D4D0'
    },
})