import './TextField.css'

const TextField = (props) => {

    const placeholderModification = `${props.placeholder}`

    return (
        <div className="textField">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModification}/>
        </div>
    )
}

export default TextField