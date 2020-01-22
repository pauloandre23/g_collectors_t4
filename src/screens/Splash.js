import React, {Component} from 'react';
import { View,Image } from 'react-native';
import SplashImage from '../../assets/splash.png'

export default class Splash extends Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Register')
        },500)
    }

    render(){
        return(
            <View style={{flex:1,width:'100%'}}>
                <Image source={SplashImage} resizeMode='contain' style={{width:'100%',height:'100%'}}/>
            </View>
        )
    }
}