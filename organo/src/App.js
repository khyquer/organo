import { useState } from 'react';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
        key: 1,
        name: 'Dev',
        colorFirst: '#82CFFA',
        colorSecond: '#E8F8FF'
    },
    {
        key: 2,
        name: 'Suporte',
        colorFirst: '#E06B69',
        colorSecond: '#FDE7E8'
    },
    {
        key: 3,
        name: 'Front',
        colorFirst: '#FFBA05',
        colorSecond: '#FFF5D9'
    }
];

  const [employees, setEmployees] = useState([])

  const newEmployee = (value) => {
    debugger
    setEmployees([...employees, value])
  }

  return (
    <div className="App">
        <Banner />
        <Form newEmployee={newEmployee} times={times.map(time => { return { key: time.key, name: time.name} } )}/>
        
        {times.map(time => {
            return <Time 
              employees = {employees.filter(employee => employee.time === time.name)}
              key={time.key.toString()}
              name={time.name}
              ocupation={time.ocupation}
              colorFirst={time.colorFirst}
              colorSecond={time.colorSecond}
            />
          })}

          <Footer />
    </div>
  );
}

export default App;
