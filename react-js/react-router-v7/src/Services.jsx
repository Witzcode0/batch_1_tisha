import { Link, Outlet } from "react-router-dom";
import "./style.css"


function Services() {
    const services = [
        {
            id:1,
            name:"Frontend Development"
        },
        {
            id:2,
            name:"Backend Development"
        },
        {
            id:3,
            name:"Fullstack Development"
        },
        {
            id:4,
            name:"Data Science"
        },
        {
            id:5,
            name:"Digital Marketing"
        },
    ];
    return (
        <div className='container'>
            <h2>Service List Page</h2>

            <div className="services">

            {
                services.map((service) => <Link to={"service/" + service.id} className="service-item">{service.id} - {service.name}</Link>)
            }
            <Outlet />
            </div>

        </div>
    )
}

export default Services