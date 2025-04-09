import styles from './Tabela.module.css';

function Tabela() {

    return (
        <div className={styles.container}>
            <h3>Tabela de IMC</h3>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 16,9</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>17 a 18,4</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18,5 a 24,9</td>
                        <td>Peso ideal</td>
                    </tr>
                    <tr>
                        <td>25 a 29,9</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr>
                        <td>Maior que 30</td>
                        <td>Obesidade</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;
