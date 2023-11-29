'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title : string ,
  description : string
}

const NewIssuePage = () => {
 const route = useRouter()
 const [error , setError] = useState('')
  const {register , control , handleSubmit}= useForm<IssueForm>();
  return (
    <div className='max-w-xl '>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form className='space-y-2' onSubmit={handleSubmit(async(data) =>
        {
          try{
            await axios.post('/api/issues' , data)
            route.push('/issues')
          }catch(error){
            setError('An Usexpected Error Accurred ')
          }
        
      })}>
          <TextField.Root>
          <TextField.Input placeholder="Write Title" {...register('title')}/>
          </TextField.Root>
          <Controller 
          name='description'
          control={control}
          render={({field})=> <SimpleMDE placeholder="Description" {...field}/>}
          />
          
          <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage