import style from './About.module.css'
export default function About() {
    return (
        <div className={style.about}>
            <h1 className={style.tituloAbout}>Hola!</h1>
            <h3>Esta es una aplicación de Rick and Morty</h3>
            <p>En la cual vas a poder encontrar los distintos personajes que aparecen en la serie y poder interactuar con ellos</p>
        </div>
    )
}