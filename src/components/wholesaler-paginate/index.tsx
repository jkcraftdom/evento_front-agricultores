import React from 'react'
import styled from 'styled-components'
import { Button } from '../form'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { filterWholesalersAsync, reduceOrIncreasePage, selectPaginate } from '../../redux/slices/wholesalers'

const Container = styled.div`
    display:flex;
    justify-content: center;
    gap: 10px;
`
interface params {
    style?: React.CSSProperties;
}

const App = (params: params) => {
    const dispatch = useAppDispatch()
    const paginate = useAppSelector(selectPaginate)

    const handlePrevious = () => { 
        dispatch(reduceOrIncreasePage(false))
        dispatch(filterWholesalersAsync(null))
    }
    
    const handleNext = () => { 
        dispatch(reduceOrIncreasePage(true))
        dispatch(filterWholesalersAsync(null))
    }

    return (
        <Container style={params.style}>
            <Button onClick={handlePrevious} disabled={!paginate.isPreviousInitial}>Anterior</Button>
            <Button onClick={handleNext} disabled={!paginate.isNextFinal}>Siguiente</Button>
        </Container>
    )
}

export default App