import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
        
    },
    {
        key: 1,
        name: 'Dev',
        colorFirst: '',
        colorSecond: ''
    },
    {
        key: 2,
        name: 'Suporte',
        colorFirst: '',
        colorSecond: ''
    },
    {
        key: 3,
        name: 'Front',
        colorFirst: '',
        colorSecond: ''
    }
];

  const [employee, setEmployee] = useState([])

  const newEmployee = (value) => {
    setEmployee([...employee, value])

    console.log(employee);
  }

  return (
    <div className="App">
        <Banner />
        <Form newEmployee={newEmployee} times={times}/>
        <Time name='Dev'/>
        <Time name='Suporte'/>
    </div>
  );
}

export default App;
