import axios from "axios"

class PokemonApi {

    static getPokemonList() {
        try {

            let url = 'https://pokeapi.co/api/v2/pokemon'
            let url404 = 'https://pokeapi.co/api/asdas'

            return axios.get(url).then(resp => {
                return resp;
            })
        } catch (error) {

            console.log("error get pokemon list", error)

            return error
        }


    }

    static getSinglePokemon(param) {

        try {

            console.log("param this pokemon ->", param)

            return axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`).then(resp => {
                return resp;
            })

        } catch (error) {

            console.log("error get this pokemon", error)
            return error
        }

    }

}

export default PokemonApi;