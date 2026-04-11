import React, { useState } from "react";
import CapturaDados from "./CapturaDados";
import ExibeDados from "./ExibeDados";


const App = () => {

  const [valorFinalAcumulado, setValorFinalAcumulado] = useState(0)
  const [totalInvestido, setTotalInvestido] = useState(0)
  const [numeroAportes, setNumeroAportes] = useState(0)
  const [jurosAcumulado, setJurosAcumulado] = useState(0)
  const [rentabilidade, setRentabilidade] = useState(0)


  const recebeDados = (valorInicial, aporte, taxaJuros, periodo) => {
    calcularDados(valorInicial, aporte, taxaJuros, periodo)
  }

  const calcularDados = (valorInicialRecebido, aporteRecebido, taxaJurosRecebido, periodoRecebido) => {
    const valorInicial = parseFloat(valorInicialRecebido)
    const aporte = parseFloat(aporteRecebido)
    const taxaJuros = parseFloat(taxaJurosRecebido) / 100
    const periodo = parseInt(periodoRecebido)

    const valorFinalAcumuladoResultado = valorInicial * Math.pow(1 + taxaJuros, periodo) + aporte * ((Math.pow(1 + taxaJuros, periodo) - 1) / taxaJuros)
    const totalInvestidoResultado = valorInicial + (aporte*periodo)
    const periodoResultado = periodo
    const jurosAcumuladoResultado = valorFinalAcumuladoResultado - totalInvestidoResultado
    const rentabilidadeResultado = (jurosAcumuladoResultado/totalInvestidoResultado) * 100

    setValorFinalAcumulado(valorFinalAcumuladoResultado)
    setTotalInvestido(totalInvestidoResultado)
    setNumeroAportes(periodoResultado)
    setJurosAcumulado(jurosAcumuladoResultado)
    setRentabilidade(rentabilidadeResultado)



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
      <div className="row">
        <div className="col-12">
          <CapturaDados recebeDados = {recebeDados} ></CapturaDados>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <ExibeDados
          valorFinalAcumulado = {valorFinalAcumulado}
          totalInvestido = {totalInvestido}
          numeroAportes = {numeroAportes}
          jurosAcumulado = {jurosAcumulado}
          rentabilidade = {rentabilidade}
          ></ExibeDados>
        </div>
      </div>
    </div>
  );
};

export default App;