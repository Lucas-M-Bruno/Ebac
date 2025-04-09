import { useState } from "react";
import styles from './Calculo.module.css';

function Calculadora() {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);

    function resultado(){
        let imc = (peso / (altura * altura)).toFixed(2);
        
        setImc(imc);
    }

    return(
        <div className={styles.calc}>
            <label className={styles.fontSize} htmlFor="peso">Seu Peso:</label>
            <input className={styles.fontSize} type="number" step="0.01" id="peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />

            <label className={styles.fontSize} htmlFor="altura">Sua Altura:</label>
            <input className={styles.fontSize} type="number" step="0.01" id="altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />

            <button onClick={resultado}>Calcular</button>

            {imc && (
                <p className={styles.fontSize}>O seu IMC é de: {imc}</p>
            )}
        </div>
    )
}

export default Calculadora;