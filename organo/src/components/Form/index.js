import './Form.css'
import TextField from '../TextField';
import Combobox from '../Combobox';

function Form(){
    const times = [
        {
            key: 1,
            name: 'Dev'
        },
        {
            key: 2,
            name: 'Suporte'
        }
    ];

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem"  placeholder="Digite o endereço da imagem"/>
                <Combobox label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Form