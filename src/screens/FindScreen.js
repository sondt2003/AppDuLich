import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Image, FlatList,Text,StyleSheet, Dimensions } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
export default function FindScreen(props) {
    const [searchText, setSearchText] = useState('');
    const [selected, setSelected] = React.useState("");

    const data = [
        { id: 1, name: 'Hạ Long' },
        { id: 2, name: 'Hà Nội' },
        { id: 3, name: 'Lào Cai' },
        { id: 4, name: 'Hưng Yên' },
        // Thêm các mục dữ liệu khác ở đây
    ];
    const dulieu = [
        {key:'1', value:'Gần Nhất'},
        {key:'2', value:'Nổi Bật'},
        {key:'3', value:'Đánh Giá Cao'},

    ];
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
    const handleSearch = () => {
        const filteredItems = data.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filteredItems);
    };
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',marginTop:40,fontSize:20,fontWeight:"bold"}}>Search</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                    placeholder="Nhập từ khóa tìm kiếm"
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList style={{backgroundColor:'white', borderRadius:5}} horizontal={true}
                          data={data}
                          keyExtractor={item => item.id.toString()}
                          renderItem={({ item }) => <Text style={styles.itemText}>{item.name}</Text>}
                />
            </View>
            <View style={styles.selectContainer}>
                <View style={styles.select}>
                    <Text style={{fontSize:17,textAlign:'center'}}>Tỉnh Thành</Text>
                    <SelectList

                        setSelected={(val) => setSelected(val)}
                        data={dulieu}
                        save="value"
                    />

                </View>
                <View style={styles.select}>
                    <Text style={{fontSize:17,textAlign:'center'}}>Vote</Text>
                    <SelectList

                        setSelected={(val) => setSelected(val)}
                        data={dulieu}
                        save="value"
                    />

                </View>
                <View style={styles.select}>
                    <Text style={{fontSize:17,textAlign:'center'}}>Vùng Miền</Text>
                    <SelectList

                        setSelected={(val) => setSelected(val)}
                        data={dulieu}
                        save="value"
                    />

                </View>
            </View>
            <Text style={{fontSize:20,marginTop:4,marginLeft:20}}>Gợi ý </Text>
            <View style={styles.listContainer}>

                <FlatList style={{borderTopWidth:3,borderTopColor:"black"}} data={DaTa}
                          renderItem={({item})=>{return (
                              <View style={{alignItems:'center',margin:10,padding:10,backgroundColor:"white",borderRadius:10}}>



                                  <Image  style={{height:300,width:300,}} source={{uri:item.img}}/>
                                  <Text style={{textAlign:'left',fontWeight:"bold",fontSize:30}}>{item.title}</Text>
                                  <Text style={{fontSize:20}}>{item.des}</Text>



                              </View>)}}/>



            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#F8D4D0',
    },
    searchContainer: {
        marginTop:20,
        flexDirection: 'row',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        borderRadius:40
    },
    searchButton: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8D4D0',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:15
    },
    itemText: {
        borderWidth:1,
        borderRadius:10,
        textAlign:"center",
        borderColor:'black',
        padding:5,
        fontSize: 20,
        height:40,
        margin:5,
        width:100,
        marginBottom: 10,
    },
    selectContainer:{


        flexDirection:'row',
        justifyContent:'space-between'

    },

    select:{

        width:120
    },
    listContainer: {


        marginTop:10,
        flexDirection: 'row',
        marginBottom: 10,
    },
})