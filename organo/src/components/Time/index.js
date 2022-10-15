import Employee from '../Employee'
import './Time.css'

const Time = (props) => {

    const sectionBackgroundColor = {backgroundColor: props.colorSecond}
    const h3BorderColor = {borderColor: props.colorFirst}

    return (
        <section className="time" style={sectionBackgroundColor}>
            <h3 style={h3BorderColor}>
                {props.name}
            </h3>
            {props.employees.map( (employee) => {
                return <Employee
                    headerColor={props.colorFirst}
                    image="https://github.com/khyquer.png"
                    name={employee.name}
                    ocupation={employee.ocupation}
                />
            }) }
        </section>
    )
}

export default Time