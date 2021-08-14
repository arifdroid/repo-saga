import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '../config/store';
import HomeScreenConnect from '../modules/home/home';


const Stack = createNativeStackNavigator();


const MainContainer = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreenConnect} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


export default MainContainer;