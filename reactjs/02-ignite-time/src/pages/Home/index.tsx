import { Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdonwContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separater,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { useForm } from 'react-hook-form'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos.')
    .max(60, 'O ciclo presisa ser de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="De um nome para op seu projeto..."
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmout', { valueAsNumber: true })}
          />
          <span>minutos,</span>
        </FormContainer>

        <CountdonwContainer>
          <span>0</span>
          <span>0</span>
          <Separater>:</Separater>
          <span>0</span>
          <span>0</span>
        </CountdonwContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={25} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
