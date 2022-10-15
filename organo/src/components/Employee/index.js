import './Employee.css'

const Employee = ({name, ocupation, image, headerColor}) => {
    const backgroundColor = {backgroundColor: headerColor}
    return (
        <div className='employee'>
            <div className='header' style={backgroundColor}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{ocupation}</h5>
            </div>
        </div>
    )
}

export default Employee