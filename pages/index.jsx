
import styles from '../styles/Home.module.css'
import Card from './components/Card'
//import 'bootstrap/dist/css/bootstrap.css'

export async function getStaticProps(params) {
  const maxPoken = 50
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPoken}`)
  const data = await res.json()

  // add poken
  data.results.forEach((item, index) => {
    item.id = index + 1 // get the first id 1

  })
  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <div>
      <div>
        <div className={styles.title_container}>
          <h1>Poke <span>Proj</span></h1> 
        </div>

        <div className={styles.poke_container}>
          {pokemons.map((pokemon) => (
            
            <Card key={pokemon.id} pokemon={pokemon}/>
          ))}
        </div>
      </div>
    </div>
  )
}
