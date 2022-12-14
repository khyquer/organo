import './Combobox.css'

const Combobox = (props) => {

    return (
        <div className="comboBox">
            <label>
                {props.label}
            </label>
            <select
                onChange={(e) => props.onChangeEvent(e.target.value)}
                required={props.required}
                value={props.value}
            >
                <option key="0" defaultValue></option>
                {props.itens.map((item) => <option key={item.key.toString()}>{item.name}</option>)}                    
            </select>
        </div>
    )
}

export default Combobox