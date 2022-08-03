import { CardFilters, Input, Label, ButtonRed} from '../form'
import { styleContainterItemLabel } from '../styles/index'
import { useState } from "react";
import { property } from '../../types';

export interface params {
  title: string; 
  placeholder: string;
  name: string;
  onChange?: (property:property)=>void;
}

function CardFilter(params: params) {

  const [valueInput, setValueInput] = useState<string[]>([])
  const [isEnter, setIsEnter] = useState<boolean>(false)

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setValueInput([event.target.value])

  const handleEvent= (event:any) => {
    if(event.key === 'Enter'){
      setIsEnter(true)
      if(typeof params.onChange === 'function') 
        params.onChange({name:params.name, value: valueInput[0]})
    }else{
      setIsEnter(false)
    }
  }

  const handleDelete= () => {
    setIsEnter(false)
    if(typeof params.onChange === 'function') 
      params.onChange({name: params.name, value: ''})
  }
  
  return (
    <CardFilters>
      <Label>{params.title}</Label>
      <Input 
        type="text"
        placeholder={params.placeholder}
        onChange={handleChange}
        onKeyDown={handleEvent}
      />
      {
        isEnter===true ? 
          valueInput.map((val, index)=> (
            <div key={index} style={styleContainterItemLabel}>
              <Label>{val}</Label>
              <ButtonRed onClick={handleDelete}>X</ButtonRed>
            </div>
          ))
        : <></> 
      }
    </CardFilters>
  )
}

export default CardFilter