import React from 'react';
import PropTypes from 'prop-types';

const mockup = [
    {name: 'Riri', result: 15.5},
    {name: 'Balthazar', result: 17},
    {name: 'Toto', result: 1},
    {name: 'Fifi', result: 5.5},
    {name: 'Zaza', result: 17}
]


const ResultStudent = ({students}) => {

    if(!students || students.length === 0) {
        return (
            <div>
                <h3>Resultats</h3>
                <p>Pas de données !</p>
            </div>
        );
    }

    const results = students.map(st => st.result);

    // let total = 0;
    // for(const r of results) {
    //     total += r;
    // }
    // const moy = total / results.length;

    const total = results.reduce((acc, cur) => acc + cur, 0);
    const moy = total / results.length;

    const maxResult = Math.max(...results);
    const minResult = Math.min(...results);
    
    const bestStudent = students.filter(st => st.result === maxResult).map(st => st.name);
    const badStudent = students.filter(st => st.result === minResult).map(st => st.name);

    return (
        <div>
            <h3>Resultats</h3>
            <p>Moyenne : {moy.toFixed(2)}</p>
            <p>Meilleur(s) : {bestStudent.join(', ')}</p>
            <p>Le(s) pire(s) : {badStudent.join(', ')}</p>
        </div>
    );
}

ResultStudent.defaultProps = {
    students: []
};

ResultStudent.propTypes = {
    students: PropTypes.array
};

export default ResultStudent;