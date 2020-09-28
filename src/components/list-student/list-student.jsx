import React from 'react';
import PropTypes from 'prop-types';

const ListStudent = ({students}) => {

    const studentsJSX = students.map(
        st => <li key={st.id}>{st.name} {st.result}/20</li>
    );

    return (
        <div>
            <h3>Liste des étudiants</h3>
            <ul>{studentsJSX}</ul>
        </div>
    )
}

ListStudent.defaultProps = {
    students: []
};

ListStudent.propTypes = {
    students: PropTypes.array
};

export default ListStudent;