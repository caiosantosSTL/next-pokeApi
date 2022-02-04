import styles from '../styles/About.module.css'

export default function About(params) {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio repellat recusandae earum dignissimos, ad veritatis amet quae dolorem ea iusto tempore, expedita omnis.</p>
            <div className={styles}></div>
        </div>
    )
}