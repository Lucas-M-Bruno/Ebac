import styles from './Apre.module.css';

function Apresentacao() {
    return(
        <header className={styles.header}>
            <h1>Calculadora de IMC</h1>
            <h2>O que é IMC?</h2>
            <p>O IMC (Índice de Massa Corporal) é um cálculo que relaciona o peso e a altura para avaliar se uma pessoa está dentro 
                da faixa considerada saudável. Com base no resultado, é possível verificar em qual categoria 
                (como abaixo do peso, peso ideal ou acima do peso) você se encaixa.
            </p>
        </header>
    )
}

export default Apresentacao;