import {useState} from 'react'
import './Form.css'
import TextField from '../TextField';
import Combobox from '../Combobox';
import Button from '../Button';

function Form(props){



    const [name, setName] = useState();
    const [ocupation, setOcupation] = useState();
    const [image, setImage] = useState();
    const [time, setTime] = useState();  

    const callBackSubmit = (e) => {
        props.newEmployee({
            name,
            ocupation,
            image,
            time
        })
    }

    return (
        <section className="form">
            <form onSubmit={(e) => {e.preventDefault(); callBackSubmit()}}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required
                    value = {name}
                    onChangeEvent = {value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required
                    value = {ocupation}
                    onChangeEvent = {value => setOcupation(value)}
                />
                <TextField
                    label="imagem"
                    placeholder="Digite o endereço da imagem"
                    required
                    value={image}
                    onChangeEvent = {value => setImage(value)}

                />
                <Combobox
                    label="Time"
                    itens={props.times}
                    required
                    value={time}
                    onChangeEvent={e => setTime(e)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form