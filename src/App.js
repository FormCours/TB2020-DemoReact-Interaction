import React, {useState} from 'react';
import FormStudent from './components/form-student/form-student';
import ResultStudent from './components/result-students/result-student';
import ListStudent from './components/list-student/list-student';

function App() {

  const [students, setStudents] = useState([]);

  const onNewStudent = (student) => {
    setStudents([...students, student])
  }

  return (
    <div className="App">
      <h1>Demo interaction entre Component</h1>
      <FormStudent onAddStudent={onNewStudent} />
      <ResultStudent students={students} />
      <ListStudent students={students} />
    </div>
  );
}

export default App;
