import React from 'react'
import './style.css'

export default class CalculaJuros extends React.Component {
    state = {
        resultado: 'aguardando calcular...'
    }

    calcular = () => {
        const { aplicado, aporte, periodo, juros } = this.getInputValues()

        let resultado = aplicado

        for (let index = 0; index < periodo; index++) {
            resultado = (resultado + aporte) * (1 + juros / 100)
        }

        this.setState({resultado: 'R$ ' + resultado.toFixed(2)})
    }

    getInputValues() {
        const aplicado = parseFloat(document.getElementById('jurosAplicado').value)
        const aporte = parseFloat(document.getElementById('jurosAporteMensal').value)
        const periodo = parseFloat(document.getElementById('jurosPeriodo').value)
        const juros = parseFloat(document.getElementById('jurosTaxa').value)

        return { aplicado, aporte, periodo, juros }
    }


    render() {
        return (
            <section>
                <div className="CalculaJuros">
                    <h1>Calcular Juros</h1>
                    <div className="calcInputWrapper">
                        <input id="jurosAplicado" className="calcInputItem" placeholder="Dinheiro Aplicado" type="number" />
                        <input id="jurosAporteMensal" className="calcInputItem" placeholder="Aporte Mensal" type="number" />
                        <input id="jurosPeriodo" className="calcInputItem" placeholder="Período (meses)" type="number" />
                        <input id="jurosTaxa" className="calcInputItem" placeholder="Taxa de Juros (mensal)" type="number" />
                        <button className="calcInputItem" id="jurosCalcular" onClick={this.calcular}>Calcular</button>
                    </div>
                    <h2>{this.state.resultado}</h2>
                </div>
            </section>
        )
    }
}