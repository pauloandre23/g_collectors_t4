import React, {Component} from 'react';
import { View,Text } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { SafeAreaView } from 'react-navigation';

export default class Suporte extends Component{
    render(){
        return(
            <>
            <Navbar {...this.props} />
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text>
                    Suporte...
                </Text>
            </View>
            </>
        )
    }
}