import {Dimensions, Platform} from 'react-native';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '../screens/Splash';
import Pedidos from '../screens/Pedidos';
import Perfil from '../screens/Perfil';
import Extrato from '../screens/Extrato';
import Suporte from '../screens/Suporte';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RegisterTwo from '../screens/RegisterTwo';
import RegisterThree from '../screens/RegisterThree';
import VehicleRegister from '../screens/VehicleRegister';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    getCustomActionCreators: (route, stateKey) => {
        return {
             toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }) }; },
}

const AuthNavigator = createStackNavigator({
    Login:{
        screen: Login
    },
    Register:{
        screen: Register
    },
    Register2:{
        screen: RegisterTwo
    },
    Register3:{
        screen: RegisterThree
    },
    Vehicle:{
        screen: VehicleRegister
    },
},{
    headerMode:'none'
})

const AppNavigator = createDrawerNavigator({
    Pedidos:{
        screen: Pedidos
    },
    Perfil:{
        screen: Perfil
    },
    Extrato:{
        screen: Extrato
    },
    Suporte:{
        screen: Suporte
    }
},DrawerConfig)

const SwitchNavigator = createSwitchNavigator ({
    AuthLoadin:Splash,
    App:AppNavigator,
    Auth:AuthNavigator,
})

export default createAppContainer(SwitchNavigator);