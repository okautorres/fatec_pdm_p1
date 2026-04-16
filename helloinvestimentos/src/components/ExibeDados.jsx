
const ExibeDados = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ backgroundColor: "#f4f0ea" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h5 className="card-title" >Valor final acumulado</h5>
                  <h1
                    className="card-title border-bottom pb-3 border-dark"
                    style={{ color: "#0e6e54" }}
                  >
                    R$ {props.valorFinalAcumulado}
                  </h1>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <h6 className="card-subtitle">Total investido</h6>
                  <h4 className="card-text mt-1">R$ {props.totalInvestido}</h4>
                  <h6 className="card-subtitle mt-4">Nº de aportes</h6>
                  <h4 className="card-text mt-1">{props.numeroAportes}</h4>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                  <h6 className="card-subtitle">Juros acumulados</h6>
                  <h4 className="card-text mt-1">R$ {props.jurosAcumulado}</h4>
                  <h6 className="card-subtitle mt-4 mt-md-0">Rentabilidade</h6>
                  <h4 className="card-text mt-1" style={{ color: "#0e6e54" }}>
                    +{props.rentabilidade}%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <h5>Histórico de simulações</h5>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <h6 className="fw-normal">{props.contador} simulações</h6>
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
                      <h6 className="fw-normal">Data</h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <h6 className="fw-normal">Valor final</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              {props.historico.map((item, index) => (
              <div className="row border-bottom p-2">
                <div className="col-12 col-md-4">
                  <h6 className="card-text fw-normal">{item.data}</h6>
                </div>
                <div className="col-12 col-md-8">
                  <h6 className="card-text d-flex justify-content-end ">
                    R$ {item.valor}
                  </h6>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExibeDados;
