import { useState, useEffect } from "react"

export const colors = {
    button: "#ed54a5",
    aquaGreen: '#69b8b6',
    Darkblue: '#2a2d3f',
    gray: '#a4a4a4',
    pink: '#ed54a5',
}

export const fonts = {
    poppins: 'Poppins'
}

// export const useMyDataFetch = (url: string) => {
//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {

//         let hasBeenAborted = false; // added
//         setIsLoading(true)
//         fetch(url, {
//             headers: {
//                 "Accept": "application/json",
//                 "apitoken": "b361dc54ca90a4dd02efaf412ed54f9a"
//             }
//         })
//             .then(res => {
//                 return (res.ok) ? res.json() : new Error("Mistake!")
//             })
//             .then(data => {
//                 if (hasBeenAborted) return; // added
//                 if (data.upcoming) {
//                     setData(data.upcoming);
//                 }
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 if (hasBeenAborted) return; // added
//                 setIsLoading(false); // added
//                 setError(error)
//             });
//         return () => { hasBeenAborted = true; } // added
//     }, [url]);

//     return { data, error, isLoading };
// }

export const fetchData = async (url: string, raw: object) => {

    var myHeaders = new Headers();
    myHeaders.append("apitoken", "b361dc54ca90a4dd02efaf412ed54f9a");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw)
    };

    let response = await fetch(url, requestOptions);
    let json = await response.json();
    return json;
}

export const url = {

    baseUrl: 'http://216.10.247.209:8080/HI/api/'
}
