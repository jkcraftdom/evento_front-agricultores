//export const URL:string = "https://agri-commerce.herokuapp.com"
export const URL:string = "http://localhost:8080"

export const createParameters = (data: object) : string => {
    let parameters: string = "";

    (Object.keys(data) as (keyof typeof data)[]).forEach( (value) => {
        if(data[value] !== undefined && data[value] !== '')
            parameters += `&${value}=${data[value]}`

    })  
    
    return (parameters.length > 0)? parameters.substring(1): parameters
}


export interface errorService{
    error: string;
    message: string;
    path: string;
    status: number;
    timestamp: string;
}