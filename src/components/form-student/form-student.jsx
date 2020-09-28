import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import style from './form-student.module.css';

class FormStudent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            result: ''
        };
    }

    handleName = (event) => {
        const {value} = event.target;
        const regex = /^[-'a-zÀ-ÖØ-öø-ÿ\s]*$/i;

        if(regex.test(value)) {
            this.setState({
                name: value
            });
        }
    }

    handleResult = (event) => {
        const value = event.target.value.replace(',', '.');
        const valueNb = parseFloat(value);

        if(value === '' || (!isNaN(valueNb) && valueNb >= 0 && valueNb <= 20)) {
            this.setState({
                result: value
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onAddStudent({
            id: shortid.generate(),
            name: this.state.name.trim(),
            result: parseFloat(this.state.result) || 0
        })

        this.setState({
            name: '',
            result: ''
        });
    }


    render() {
        const {name, result} = this.state;

        return (
            <form className={style.formStudent} onSubmit={this.handleSubmit}>
                <label>
                    Nom: 
                    <input type="text" name="name" value={name} onChange={this.handleName} required />
                </label>
                <label>
                    Resultat:
                    <input type="text" name="result" value={result} onChange={this.handleResult} placeholder="0" />
                </label>
                <div>
                   <input type="submit" value="Ajouter"/>
                </div>
            </form>
        );
    }
}

FormStudent.defaultProps = {
    onAddStudent: () => {}
}

FormStudent.propTypes = {
    onAddStudent: PropTypes.func
}

export default FormStudent;