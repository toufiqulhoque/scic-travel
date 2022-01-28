import { useEffect, useState } from "react";

const useFetch = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://safe-citadel-14001.herokuapp.com/
services')
            .then(res => res.json())
            .then(data => setServices(data.users))
    },
        []);
    return { services };
}
export default useFetch;
