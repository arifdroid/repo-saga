import axios from "axios"

class PokemonApi{

    static  getPokemonList(){
                
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=1`).then(resp=>{
            return resp;
        }).catch(e=>e)    
        
        
    }

    static getSinglePokemon(param){
        
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`).then(resp=>{
               return resp;
           }).catch(e=>e)    
           
    }
    
}

export default PokemonApi;