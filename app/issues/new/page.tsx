'use client'
import { Button, Callout, TextField , Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { TypeOf, z } from 'zod';



type IssueForm= z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
 const route = useRouter()
 const [error , setError] = useState('')
  const {register , control , handleSubmit , formState : {errors}}= useForm<IssueForm>({
    resolver : zodResolver(createIssueSchema)
   });
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
          {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>}
          <Controller 
          name='description'
          control={control}
          render={({field})=> <SimpleMDE placeholder="Description" {...field}/>}
          />
          {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
          
          <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage