import React, { useState } from "react";
import CapturaDados from "./CapturaDados";
import ExibeDados from "./ExibeDados";


const App = () => {

  const [valorFinalAcumulado, setValorFinalAcumulado] = useState(0)
  const [totalInvestido, setTotalInvestido] = useState(0)
  const [numeroAportes, setNumeroAportes] = useState(0)
  const [jurosAcumulado, setJurosAcumulado] = useState(0)
  const [rentabilidade, setRentabilidade] = useState(0)

  const [historico, setHistorico] = useState([])

  const [contador, setContador] = useState(0)

  const recebeDados = (valorInicial, aporte, taxaJuros, periodo) => {
    calcularDados(valorInicial, aporte, taxaJuros, periodo)
  }

  const calcularDados = (valorInicialRecebido, aporteRecebido, taxaJurosRecebido, periodoRecebido) => {
    const valorInicial = Number(valorInicialRecebido)
    const aporte = Number(aporteRecebido)
    const taxaJuros = Number(taxaJurosRecebido) / 100
    const periodo = Number(periodoRecebido)

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

    const resultadoFinal = {data: new Date().toLocaleString("pt-BR"), valor: valorFinalAcumuladoResultado}
    setHistorico([...historico, resultadoFinal])
    setContador(contador+1)

  }

  const limparResultados = () => {
    setValorFinalAcumulado(0);
    setTotalInvestido(0);
    setNumeroAportes(0);
    setJurosAcumulado(0);
    setRentabilidade(0);
  }

  return (
    <div className="container mt-5 d-flex flex-column">
      <div className="row">
        <div className="col-12">
          <h1 className="border-bottom" style={{ marginBottom: 50, color: "#0e6e54"}}>Hello, investimentos</h1>
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
          <CapturaDados 
          recebeDados = {recebeDados} 
          limparResultados = {limparResultados}></CapturaDados>
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
          historico = {historico}
          contador = {contador}
          ></ExibeDados>
        </div>
      </div>
    </div>
  );
};

export default App;