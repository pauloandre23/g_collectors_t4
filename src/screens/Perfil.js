import React, {Component } from 'react';
import { View,Image, Text } from 'react-native';
import Navbar from '../components/Navbar/Navbar';

export default class Perfil extends Component{
    render(){
        return(
            <>
            <Navbar {...this.props}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                
                <Text style={{color: '#5C072D'}}>
                    Perfil...
                </Text>
            </View>
            </>
        )
    }

}