
export const getStaticPaths = async()=>{
    const maxPoken = 50
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPoken}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index)=>{
        return{
            params: {pokemonid: (index + 1).toString()},
        }
    })

    return{
        paths, 
        fallback: false,
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()
    return{
        props: {pokemon: data},
    }
}

export default function Pokemon({pokemon}){
    return(
        <div>
            <h2>{pokemon.name}</h2>
        </div>
    )
}