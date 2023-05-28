import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function AccountScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#C9AE82', fontWeight: '700', fontSize: 32 }}>Travenus</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 28 }}>
                <Ionicons name="person-circle" size={40} />
                <Text style={{ fontSize: 32 }}>
                    Tên người dùng
                </Text>
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 28, marginTop: 16 }}>
                <Text style={{ color: 'black' }}>
                    Copyright © Travenus 2022 All rights reserved
                </Text>

            </View>
            <View style={{ marginLeft: 28, marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: '500' }}>
                    Thông tin cá nhân
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Tên
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Số điện thoại
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Mật Khẩu và bảo mật
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Đăng xuất
                </Text>
            </View>

            <View style={{ marginLeft: 28, marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: '500' }}>
                    Chức năng
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Lịch sử chuyến đi
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Cộng đồng
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AccountDetail")}>

                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                        Thông tin tài khoản
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    Trung tâm hỗ trợ
                </Text>
            </View>

            <View style={{ marginLeft: 28, marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: '500' }}>
                    Liên hệ
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    +123 456 789
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    info@travenus .com
                </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: 28 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
                    1245, Hà Nội, Việt Nam
                </Text>
            </View>
            <View style={{ marginLeft: 28, marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: '500' }}>
                    Theo dõi chúng tôi
                </Text>
            </View>
            <View style={{ marginLeft: 28, marginTop: 20, flexDirection: 'row', columnGap: 28 }}>
                <TouchableOpacity>

                    <Ionicons name="logo-facebook" size={30} style={{ borderRadius: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="logo-pinterest" size={30} style={{ borderRadius: 50 }} />

                </TouchableOpacity>
                <TouchableOpacity>

                    <Ionicons name="logo-instagram" size={30} style={{ borderRadius: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity>

                    <Ionicons name="logo-twitter" size={30} style={{ borderRadius: 50 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F8D4D0'
    },
})