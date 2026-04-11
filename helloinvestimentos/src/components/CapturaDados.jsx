import React, { useState } from "react";


const CapturaDados = (props) => {
  const [valorInicial, setValorInicial] = useState("")
  const [aporte, setAporte] = useState("")
  const [taxaJuros, setTaxaJuros] = useState("")
  const [periodo, setPeriodo] = useState("")

  const limparDados = () => {
    setValorInicial("")
    setAporte("")
    setTaxaJuros("")
    setPeriodo("")
  }

  return (
    <div className="row">
      <div className="col-6">
        <label className="form-label">Valor Inicial (R$)</label>
        <input type="text" className="form-control" placeholder="00,00" value = {valorInicial} onChange = {(e) => setValorInicial (e.target.value)} />
        <label className="form-label mt-2">Taxa de Juros (% ao mês)</label>
        <input type="text" className="form-control" placeholder="0%"  value = {taxaJuros} onChange = {(e) => setTaxaJuros (e.target.value)}/>
      </div>

      <div className="col-6">
        <label className="form-label">Aporte Mensal (R$)</label>
        <input type="text" className="form-control" placeholder="00,00" value = {aporte} onChange = {(e) => setAporte (e.target.value)}/>
        <label className="form-label mt-2">Período (meses)</label>
        <input type="text" className="form-control" placeholder="0" value = {periodo} onChange = {(e) => setPeriodo (e.target.value)}/>
      </div>

      <div className="row mt-3" 
      style={{ paddingRight: 0}}>
        <div className="col-8">
          <button type="button" className="btn btn-outline-primary w-100" onClick={ () => props.recebeDados(valorInicial, aporte, taxaJuros, periodo)}>
            Calcular
          </button>
        </div>

        <div className="col-4"
        style={{ paddingRight: 0}}>
          <button
            type="button"
            className="btn btn-outline-light w-100"
            style={{ color: "black", borderColor: "grey" }}
            onClick={() => limparDados()}
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapturaDados;
