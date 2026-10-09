import axios from 'axios';
import React, { Component } from 'react'
import { Global } from '../Global';

export default class DoctoresEspecialidad extends Component {

    counter = 0;

    state = {
        especialidades: [],
        doctores: []
    }

    selectRef = React.createRef();

    sendFormInfo = (e) => {
        e.preventDefault();
        axios.get(Global.apiUrl + "/doctores/doctoresEspecialidad/" + this.selectRef.current.value).then((response) => {
            this.setState({
                doctores: response.data
            });
        });
    }

    getEspecialidades = () => {
        axios.get(Global.apiUrl + "/doctores/especialidades").then((response) => {
            this.setState({
                especialidades: response.data
            })
        });
    }

    componentDidMount = () => {
        this.getEspecialidades();
    }

  render() {
    return (
      <div>
        <h1>Doctores especialidad</h1>
        <form onSubmit={this.sendFormInfo}>
            <select ref={this.selectRef} name="especialidades" id="especialidades">
                {
                    this.state.especialidades.map((especialidad) => {
                        return(<option key={this.counter++} value={especialidad} >{especialidad}</option>)
                    })
                }
            </select>
            <button type='submit' >Enviar</button>
        </form>
        {
            this.state.doctores.length > 0 &&
            <table>
                <thead>
                    <tr>
                        <th>ID Doctor</th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Salario</th>
                        <th>ID Hospial</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.doctores.map((doctor) => {
                            return(
                            <tr key={this.counter++}>
                                <td>{doctor.idDoctor}</td>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>
                                <td>{doctor.salario}€</td>
                                <td>{doctor.idHospital}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        }
      </div>
    )
  }
}
