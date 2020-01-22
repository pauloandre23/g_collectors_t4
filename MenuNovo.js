import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import Menu from './assets/icons/menu.png';


class MenuNovo extends Component{
    
    render(){
        
        return(
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.toggleLeftDrawer()}> 
                    <Image source={Menu} 
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(MenuNovo)

const styles = StyleSheet.create({
    menuIcon:{
        zIndex: 9,
        position : 'relative',
        top: 40,
        left:20
    }
})