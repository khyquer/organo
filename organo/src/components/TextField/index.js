import './TextField.css'

const TextField = (props) => {

    const placeholderModification = `${props.placeholder}`

    return (
        <div className="textField">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={(e) => props.onChangeEvent(e.target.value)} placeholder={placeholderModification} required={props.required}/>
        </div>
    )
}

export default TextField