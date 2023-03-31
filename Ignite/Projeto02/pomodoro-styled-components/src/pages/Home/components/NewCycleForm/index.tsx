import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { ContextCycles } from '../../../../contexts/ContextCycles'


export const NewCycleForm = () => {
  
  const {activeCycle} = useContext(ContextCycles)
  const {register} = useFormContext()

  return (
    <FormContainer>
            <label htmlFor="task">Vou trabalhar em:</label>
            <TaskInput 
              placeholder='Dê um nome para o seu projeto' 
              list="task-suggestions" 
              id='task' 
              {...register("task")}
              disabled={!!activeCycle}
            />
            <datalist id='task-suggestions'>
              <option value="Projeto 1"></option>
              <option value="Projeto 2"></option>
              <option value="Projeto 3"></option>
              <option value="banana"></option>           
            </datalist>
            <label htmlFor="minutesAmount">durante:</label>
            <MinutesAmountInput 
            id="minutesAmount" 
            step={5} 
            min={1} 
            max={60} 
            type="number" 
            placeholder='00'
            disabled={!!activeCycle}
            {...register("minutesAmount",{valueAsNumber:true})}
            />
            <span>minutos.</span>
    </FormContainer>
  )
}
