import { Play } from 'phosphor-react'
import React from 'react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'


export const Home = () => {
  return (
    <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em:</label>
            <TaskInput placeholder='Dê um nome para o seu projeto' list="task-suggestions" id='task' type="text"/>
            <datalist id='task-suggestions'>
              <option value="Projeto 1"></option>
              <option value="Projeto 2"></option>
              <option value="Projeto 3"></option>
              <option value="banana"></option>           
            </datalist>
            <label htmlFor="minutesAmount">durante:</label>
            <MinutesAmountInput id="minutesAmount" step={5} min={5} max={60} type="number" placeholder='00' />
            <span>minutos.</span>
          </FormContainer>
          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>
          <StartCountdownButton disabled type='submit'><Play size={24}/> Começar </StartCountdownButton>
        </form>
    </HomeContainer>
  )
}
