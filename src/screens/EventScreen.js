import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, TouchableOpacity, Text,FlatList } from "react-native"
import React from "react";
export default function EventScreen(props) {
    const DaTa=[
        {
            id:0,
            title:'Hồ hoàn kiếm',
            img:'https://toplist.vn/images/800px/ho-hoan-kiem-945590.jpg',
            des:'Hồ Hoàn Kiếm còn được gọi là Hồ Gươm có vị trí kết nối giữa khu phố cổ gồm các phố Hàng Ngang, Hàng Đào, Cầu Gỗ, Lương Văn Can, Lò Sũ... với khu phố Tây do người Pháp quy hoạch cách đây hơn một thế kỷ là Bảo Khánh, Nhà thờ, Tràng Thi, Hàng Bài, Đinh Tiên Hoàng, Tràng Tiền, Hàng Khay, Bà Triệu.'
        },
        {
            id:1,
            title:'Chùa thiên mụ',
            img:'https://toplist.vn/images/800px/chua-thien-mu-15990.jpg',
            des:'Khi nhắc tới Huế, người ta sẽ nghĩ ngay đến chùa Thiên Mụ bởi lẽ đây là một trong những điểm đến có phong cảnh đẹp nhất ở Huế. Non xanh nước biếc, phong cảnh hữu tình cùng cái vẻ yên tĩnh của thiên nhiên nơi đây sẽ khiến cho tâm hồn chúng ta trở nên thanh thản hơn. Ngôi chùa này được chính thức xây dựng vào đời chúa Tiên Nguyễn Hoàng năm 1601. Đến đời chúa Quốc (Nguyễn Phúc Chu), chùa Thiên Mụ được xây dựng lại với quy mô lớn hơn, đẹp hơn và khang trang hơn.'
        },
        {
            id:2,
            title:'Vịnh hạ long',
            img:'https://toplist.vn/images/800px/vinh-ha-long-15987.jpg',
            des:'Vịnh Hạ Long nằm thuộc bộ phận của vịnh Bắc Bộ, phía Đông Bắc giáp với vịnh Bái Tử Long, phía Tây Nam giáp với quần đảo Cát Bà, phía Tây và Tây Bắc giáp với đất liền, phía Đông Nam và phía Nam hướng ra vịnh Bắc Bộ. Cảnh quan non nước ngoạn mục trên Vịnh được kiến tạo bởi hơn 1600 hòn đảo đá vôi lớn nhỏ trên làn nước xanh ngọc lục bảo đặc trưng của Vịnh Hạ Long. Đây cũng là nơi chứng kiến những thay đổi trong lịch sử phát triển của Trái đất. Các cột đá vôi được bao phủ bởi các hàng cây nhiệt đới xanh thẳm, cùng hệ thống hang, động đá vôi kỳ vĩ.'
        },
        {
            id:3,
            title:'Phong nha kẻ bàng',
            img:'https://toplist.vn/images/800px/phong-nha-ke-bang-532115.jpg',
            des:'Động Phong Nha là danh thắng tiêu biểu nhất của hệ thống hang động thuộc quần thể danh thắng Phong Nha – Kẻ Bàng. Phong Nha được bình chọn là một trong những hang động đẹp nhất thế giới với các tiêu chí: Sông ngầm dài nhất, Hồ nước ngầm đẹp nhất. Cửa hang cao và rộng nhất, Các bãi cát, bãi đá ngầm đẹp nhất, hang khô rộng và đẹp nhất, Hệ thống thạch nhũ kỳ ảo và tráng lệ nhất, Hang động nước dài nhất. Động Phong Nha là một điểm đến được nhiều du khách lựa chọn trong chuyến du lịch Quảng Bình.'
        }

    ];
    return (

            <View style={styles.container}>
                <Text style={styles.title}>Event</Text>
                <Image source={require('../img/travenus2.png')} style={styles.logo} />
                <FlatList style={styles.flatlist} data={DaTa}
                          renderItem={({item})=>{return (
                              <View style={styles.item}>



                                  <Image  style={{height:300,width:380,borderRadius:10}} source={{uri:item.img}}/>
                                  <Text  style={{color: '#1E9781',padding:12,fontSize:30}}>{item.title}</Text>
                                  <Text style={{color:'#7C8DB0',fontSize:20,padding:12}}>{item.des}</Text>



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
})