import Employee from '../Employee'
import './Time.css'

const Time = (props) => {

    const sectionBackgroundColor = {backgroundColor: props.colorSecond}
    const h3BorderColor = {borderColor: props.colorFirst}

    return (
        (props.employees.length > 0) && <section className="time" style={sectionBackgroundColor}>
            <h3 style={h3BorderColor}>
                {props.name}
            </h3>
            <div className="employees">
                {props.employees.map( (employee) => {
                    return <Employee
                        key={employee.name}
                        headerColor={props.colorFirst}
                        image={employee.image}
                        name={employee.name}
                        ocupation={employee.ocupation}
                    />
                }) }
            </div>            
        </section>
    )
}

export default Time