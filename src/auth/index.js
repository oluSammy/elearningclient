import {API} from "../config";
export const signin =async (user) =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};

export const authenticate = (data, next)=> {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();

    }

};