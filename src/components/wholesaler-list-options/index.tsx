import React from 'react'
import styled from 'styled-components'
import Select from './select'
import {BiSortAlt2} from 'react-icons/bi'
import {itemOptionsPerPage, sortOptions} from './utils'
import { filterWholesalersAsync,
    selectPages,
    selectTotalPages,
    selectTotalWholesaler, 
    setOptionItemPerPage, 
    setOptionSortBy } from '../../redux/slices/wholesalers'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--color2);
    margin-top: 1rem;
    background-color: #fff;
    border-radius: .5rem;
    width: 80%;

    @media screen and (min-width: 655px) {

    }
    @media screen and (min-width: 1253px) {
        flex-direction: row;
        padding: 1rem;
        width: 100%;
    }
`
const ResultText = styled.div`` 

const OptionsContainer = styled.div`
    display:none;
    flex-direction: column;
    gap: .6rem;
    align-items: center;
    @media screen and (min-width: 1253px) {
        display:flex;
        flex-direction: row;
    }
`
const TextContainer = styled.div`
    display: flex;
    align-items: center;
`

interface params {
    style?: React.CSSProperties;
}

const App = (params:params):JSX.Element => {

    const dispatch = useAppDispatch()
    const total = useAppSelector(selectTotalWholesaler)
    const page = useAppSelector(selectPages)


    const handleChangeSort = (value: string) => { 
        dispatch(setOptionSortBy(value))        
    }

    const handleChangePerPage = (value: string) => {
        const perPage:number = +value
        dispatch(setOptionItemPerPage(perPage))
        dispatch(filterWholesalersAsync(null))
    }

    return (
        <Container style={params.style}>
            <ResultText>
            {total} Resultados Encontrados - Páginas {`${page.currentPage} / ${page.totalPage}`}
            </ResultText>
            <OptionsContainer>
                <TextContainer>
                    <BiSortAlt2 size={"1.5rem"}/>
                    <span>Ordenar por</span>  
                </TextContainer>              
                <Select options={sortOptions} onChange={handleChangeSort}/>
                <Select options={itemOptionsPerPage} onChange={handleChangePerPage}/>
            </OptionsContainer>
        </Container>
    )
}

export default App