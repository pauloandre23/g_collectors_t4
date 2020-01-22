import React, {Component} from 'react';
import { View,Image,StyleSheet,Button } from 'react-native';
import MenuLogo from '../assets/icons/menu.png'

export default class Menu extends Component{
    render(){
        return(
            
            <Image
            source={MenuLogo} 
            onPress={()=>this.props.navigation.toggleDrawer()}  
             />
            
        )
    }
}


