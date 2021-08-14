import axios from "axios"


const get10Pokemon =async()=>{
    try {        
        
        return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1')
        
    } catch (error) {
        return error;
    }
}

const getthisPokemon = (id)=>{
    
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then(resp=>{

        return resp
        })
        
        

    
}

export{ get10Pokemon, getthisPokemon}