import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { addRequestAction, addRequestDelayction } from '../../redux/ducks-reducer/counterReducer';
import { getPokemonRequestAction, getThisPokemonRequestAction,getConcurrentThisPokemonRequestAction } from '../../redux/ducks-reducer/pokemon/pokemonAction'

function HomeScreen({ addRequestAction, addRequestDelayction, getPokemonRequestAction,getThisPokemonRequestAction, getConcurrentThisPokemonRequestAction }) {

    const count = useSelector((state) => state.counter.counter)
    const poke = useSelector((state) => state.pokemon)
    return (

        <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{ alignSelf: 'center' }}>Counter : {count}</Text>
            <View style={{ marginTop: 30, alignSelf: "center", flexDirection: 'row' }}>
                <Button title='Add' onPress={() => { addRequestAction() }}></Button>
                <Button title='Minus' onPress={() => { }}></Button>
            </View>

            <View style={{ marginTop: 30 }}>

                <Text style={{ alignSelf: 'center' }}>Pokemon : {poke?.isFetching.toString()}</Text>
                <View style={{ marginTop: 30, alignSelf: "center", flexDirection: 'row' }}>
                    <Button title='Get List' onPress={() => { getPokemonRequestAction() }}></Button>
                    <Button title='Get Bulba' onPress={() => { getThisPokemonRequestAction(1)}}></Button>
                    <Button title='Get Concurrent' onPress={() => { getConcurrentThisPokemonRequestAction(1)}}></Button>
                </View>

            </View>
        </View>
    )
}

const HomeScreenConnect = connect(null, {
    addRequestAction,
    addRequestDelayction,
    getPokemonRequestAction,
    getThisPokemonRequestAction,
    getConcurrentThisPokemonRequestAction
})(HomeScreen);

export default HomeScreenConnect;

