import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity,Image, FlatList,Text,StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'

//vote
// const [voteCount, setVoteCount] = useState(item.voteCount);
// const handleVote = (rating) => {
//     setVoteCount(rating);
//     onPressVote(item.key, rating);
// };
export default function FindScreen() {

    const [selected, setSelected] = React.useState("");

    const data = [
        { id: 1, name: 'Hạ Long' },
        { id: 2, name: 'Hà Nội' },
        { id: 3, name: 'Lào Cai' },
        { id: 4, name: 'Hưng Yên' },
        // Thêm các mục dữ liệu khác ở đây
    ];
    const dulieu = [
        {key:'1', name:'Gần Nhất'},
        {key:'2', name:'Nổi Bật'},
        {key:'3', name:'Đánh Giá Cao'},

    ];
    //search
    const [dataPlace,setDataPlace]=useState();
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(dataPlace);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.0.103:3000/place/api'); // 192.168.0.103
            const jsonDataPlace = await response.json();
            setDataPlace(jsonDataPlace);
            setFilteredData(jsonDataPlace);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSearch = (text) => {
        setSearch(text);
        const newData = dataPlace.filter((item) => {
            const itemName = item.name.toLowerCase();
            const searchText = text.toLowerCase();
            return itemName.includes(searchText);
        });
        setFilteredData(newData);
    };


    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',marginTop:40,fontSize:20,fontWeight:"bold"}}>Search</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={handleSearch}
                    value={search}
                    placeholder="Nhập từ khóa tìm kiếm"
                />
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

                <FlatList style={styles.flatlist}
                          data={filteredData}
                          renderItem={({item})=>{return (
                              <View style={styles.item}>
                                  <Image style={{height:350,width:350, borderRadius:10}} source={{uri:'http://192.168.0.103:3000/photos/'+item.image}}/>
                                  <Text  style={{color: '#0f1010',padding:12,fontSize:27,fontWeight:"bold"}}>{item.name}</Text>
                                  <View style={styles.itemplace}>
                                      <Image style={styles.imgplace} source={{uri:'https://cdn-icons-png.flaticon.com/128/535/535239.png'}} />
                                      <Text  style={{color:'#0f1010',width:280,fontSize:20,marginLeft:5}}>{item.address}</Text>

                                  </View>

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
    flatlist: {
        marginTop: 10,
        height:475

    },
    item:{
        width:350,


        marginLeft:16,
        marginTop:10,
        borderRadius:10,

    },
    itemplace:{
        flexDirection:"row",
        paddingLeft:12,
        marginTop:10
    },
    imgplace:{
        width:20,
        height:20
    },
})