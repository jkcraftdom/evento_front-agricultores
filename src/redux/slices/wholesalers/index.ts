import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {formValues, filterWholesalers, wholesalerResponse} from '../../../services/wholesalers'
import {property} from '../../../types'
import { initialState } from "./utils";
import _ from 'lodash'

const separateParamsUri = (state:RootState): formValues => {
    const {isSortLocal, ...copy} = state.wholesalers.options
    return copy
}

export const filterWholesalersAsync = createAsyncThunk(
    'wholesalers/filter', 
    async (data: formValues|null, {getState}) => {
        const state = getState() as RootState
        let params = separateParamsUri(state)
        const res = await filterWholesalers(params) 
        return res
    }
)


export const wholesalers = createSlice({
    name: 'wholesalers',
    initialState,
    reducers: {
        setWholesalers: (state, action: PayloadAction<wholesalerResponse[]>) => {
            state.wholesalers = action.payload
        },
        clearWholesalers: (state) => {
            state.wholesalers = []
        }, 
        setOptionSortBy: (state, action:PayloadAction<string>) => {
            state.options.sortBy = action.payload
            state.options.isSortLocal = true
        },
        setOptionItemPerPage: (state, action:PayloadAction<number>) => {
            state.options.itemPerPage = action.payload
        },
        setOptionsFilter: (state, action:PayloadAction<property>) => {
            const {name, value } = action.payload
            state.options = {...state.options, [name]:value}
        },
        reduceOrIncreasePage:(state, action:PayloadAction<boolean>) => {
            if(action.payload) // increase
                state.options.page = state.options.page + 1
            else // reducer
                state.options.page = state.options.page - 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filterWholesalersAsync.pending, (state)=> {
                state.status = "pending"
            })
            .addCase(filterWholesalersAsync.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.options.isSortLocal = false
                state.wholesalers = action.payload.mayoristas
                state.paginate.isNextFinal = action.payload.isNextFinal
                state.paginate.isPreviousInitial = action.payload.isPreviousInitial
                state.paginate.total = action.payload.total
                state.paginate.totalPage = action.payload.totalPages
                state.options.page = action.payload.currentPage
            })
            .addCase(filterWholesalersAsync.rejected, (state)=> {
                state.status = 'failed'
            })
    }
})

export const {
    setWholesalers, 
    clearWholesalers, 
    setOptionSortBy, 
    setOptionItemPerPage,
    setOptionsFilter,
    reduceOrIncreasePage
} = wholesalers.actions

export const selectWholesaler = (state: RootState) => state.wholesalers.wholesalers

export const selectIsSortLocal = (state: RootState) => state.wholesalers.options.isSortLocal

export const selectSortWholesalers = (state: RootState) => {
    const wholesalers = state.wholesalers.wholesalers
    const sortBy = state.wholesalers.options.sortBy
    return _.sortBy(wholesalers, [sortBy, 'asc']) as wholesalerResponse[]
}

export const selectCountWholesaler = (state: RootState) => state.wholesalers.wholesalers.length

export const selectTotalWholesaler = (state: RootState) => state.wholesalers.paginate.total

export const selectPaginate = (state:RootState) => state.wholesalers.paginate

export const selectAccumulateItems = (state: RootState) => {
    let page = state.wholesalers.options.page + 1
    let itemsPerPage = state.wholesalers.options.itemPerPage
    return page * itemsPerPage
}

export const selectTotalPages = (state: RootState) => state.wholesalers.paginate.totalPage

export const selectPages = (state: RootState) => {
    let totalPage = state.wholesalers.paginate.totalPage
    let currentPage = state.wholesalers.options.page + 1
    return {totalPage, currentPage}
}

export default wholesalers.reducer