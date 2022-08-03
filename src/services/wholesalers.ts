import axios from "axios"
import { itemOptionsPerPage } from "../components/wholesaler-list-options/utils";
import { URL, createParameters } from './base'

export interface formValues {
    name?: string;
    country?: string;
    product?: string;
    sector?: string;
    sortBy?: string;
    itemPerPage: number;
    page: number;
}

interface user {
    username: string;
}

export interface wholesalerResponse {
    name: string;    
    description: string;
    productType: string;
    sector: string;
    country: string;
    appUser: user;    
}

export interface response {
    currentPage: number;
    mayoristas: wholesalerResponse[];
    totalItems: number;
    totalPages: number;
    total: number;
    isNextFinal: boolean;
    isPreviousInitial: boolean;
}

export const filterWholesalers = async (data:formValues ) =>{    
    let parameters = createParameters(data)
    const res = await axios.get<response>(`${URL}/api/auth/mayoristas/filter2?${parameters}`)
    return res.data
}

