import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet    
} from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { SafeAreaView } from 'react-navigation';




export default class Pedidos extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
            {
                title:"Item 1"
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
            {
                title:"Item 5"
            }
        ]}
    }

    _renderItem({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Image source={require('./cat.jpg')}/>                
                <Text style={{color:'#fff'}} >{item.title}</Text>
            </View>
        )
    }


    render(){
        return(
            <>

            <Navbar {...this.props}/>  
            <SafeAreaView style={styles.container}>
            <Carousel 
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            />
            </SafeAreaView>

            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#131420',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });