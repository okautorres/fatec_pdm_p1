import React, { useState } from "react";
import CapturaDados from "./CapturaDados";


const App = () => {
  const [valorInicialRecebido, setValorInicialRecebido] = useState("")
  const [aporteRecebido, setAporteRecebido] = useState("")
  const [taxaJurosRecebido, setTaxaJurosRecebido] = useState("")
  const [periodoRecebido, setPeriodoRecebido] = useState("")


  const recebeDados = (valorInicial, aporte, taxaJuros, periodo) => {
    setValorInicialRecebido(valorInicial)
    setAporteRecebido(aporte)
    setTaxaJurosRecebido(taxaJuros)
    setPeriodoRecebido(periodo)
  }

  return (
    <div className="container mt-5 d-flex flex-column">
      <div className="row">
        <div className="col-12">
          <h1 style={{ marginBottom: 70 }}>Hello, investimentos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="mb-0">Simulador de Investimentos</h3>
          <p>Descubra quanto seu dinheiro pode render com juros compostos</p>
        </div>
      </div>
      <CapturaDados recebeDados = {recebeDados} ></CapturaDados>
    </div>
  );
};

export default App;
