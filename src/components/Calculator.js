import { useState } from "react";

import TabelaImc from "../img/tabela.png";

const inputHeight = document.querySelector(".height");
const inputWeight = document.querySelector(".weight");
const divResults = document.querySelector(".results");

const Calculator = () => {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();

    const [imc, setImc] = useState(0);
    const [classification, setClassification] = useState("");

    const clearInput = () => {
        inputHeight.value = "";
        inputWeight.value = "";

        divResults.style.display = "none";
    }

    const calculatorImc = () => {

        const result =  weight / (height * 2);
        
        divResults.style.display = "flex";

        setImc(result.toFixed(2));

        if(result <= 18.5) {
            setClassification("Baixo peso.");
        } else if(result > 18.5 && result <= 24.99) {
            setClassification("Normal.");
        } else if(result >= 25 && result <= 29.99) {
            setClassification("Sobrepeso.");
        } else {
            setClassification("Obesidade.");
        }
    }

  return (
    <div className='container'>
        <div className="inputs">
            <label>Altura:</label>
            <input className="height" type="number" placeholder='Exemplo 1.75' onChange={(e) => setHeight(e.target.value)} />
            <label>Peso:</label>
            <input className="weight" type="number" placeholder='Exemplo 70.5' onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className='buttons'>
            <button onClick={calculatorImc} className='btn btn-danger'>Calcular</button>
            <button onClick={clearInput} className='btn btn-submit'>Limpar</button>
        </div>
        <div className="results">
            <label> Tabela: </label>
            <img src={TabelaImc} alt="Tabela IMC" />
            <label> Resultado: </label>
            <p>
                {`Seu IMC é ${imc} e você esta com a classificação de ${classification}`}
            </p>
        </div>
    </div>
  )
}

export default Calculator;