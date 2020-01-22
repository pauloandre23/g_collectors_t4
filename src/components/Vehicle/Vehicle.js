import React,{ Component } from 'react';
import { TouchableOpacity,Image } from 'react-native';
import styles from './VehicleStyles';

export default class Vehicle extends Component{
    render(){
        let{active,onPress,id}=this.props;
        return(
            <TouchableOpacity onPress={()=>onPress()}>
                <Image source={this.props.source}
                style={active==id?styles.active:styles.disable}
                />
            </TouchableOpacity>
        )
    }
} 