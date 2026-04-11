import React from "react";
import App from "./App";

const ExibeDados = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ backgroundColor: "#f4f0ea" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h3 className="card-title">Valor final acumulado</h3>
                  <h1
                    className="card-title border-bottom pb-2 border-dark"
                    style={{ color: "#0e6e54" }}
                  >
                    {props.valorFinalAcumulado}
                  </h1>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <h6 className="card-subtitle">Total investido</h6>
                  <h5 className="card-text mt-1">{props.totalInvestido}</h5>
                  <h6 className="card-subtitle mt-4">N de aportes</h6>
                  <h5 className="card-text mt-1">{props.numeroAportes}</h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle">Juros acumulados</h6>
                  <h5 className="card-text mt-1">{props.jurosAcumulado}</h5>
                  <h6 className="card-subtitle mt-4">Rentabilidade</h6>
                  <h5 className="card-text mt-1" style={{ color: "#0e6e54" }}>
                    {props.rentabilidade}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <h3>Histórico de simulações</h3>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <h3>4 simulações</h3>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <div className="card">
            <div className="row">
              <div className="col-12">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#f4f0ea" }}
                >
                  <div className="row">
                    <div className="col-6">
                      <h5>Data</h5>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h5>Valor final</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h6 className="card-text">11/04/2026</h6>
                </div>
                <div className="col-6">
                  <h6 className="card-text d-flex justify-content-end">
                    R$10.000,00
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExibeDados;
