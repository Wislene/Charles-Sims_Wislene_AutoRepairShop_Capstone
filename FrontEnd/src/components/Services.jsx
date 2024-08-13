import React from 'react';

const Service = () => {
    return (
        <div>
            <h1>Services</h1>
            <p>List of services...</p>
        </div>
    );
};

export default Service; 


//  import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Services = () => {
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         const fetchServices = async () => {
//             const { data } = await axios.get('/api/services');
//             setServices(data);
//         };
//         fetchServices();
//     }, []);

//     return (
//         <div>
//             <h1>Our Services</h1>
//             <ul>
//                 {services.map(service => (
//                     <li key={service._id}>{service.name}: ${service.price}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Services;
