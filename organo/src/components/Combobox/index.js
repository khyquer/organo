import './Combobox.css'

const Combobox = (props) => {

    return (
        <div className="comboBox">
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map((item, index) => <option key={item.key}>{item.name}</option>)}                    
            </select>
        </div>
    )
}

export default Combobox