'use client'
import { Button, Callout, TextField , Text } from '@radix-ui/themes'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { TypeOf, z } from 'zod';
import {Spinner , ErrorMessage} from '@/app/components'

const SimpleMDE = dynamic(() => import('react-simplemde-editor') , {ssr:false})

type IssueForm= z.infer<typeof createIssueSchema>


const NewIssuePage = () => {

 const route = useRouter()
 const [error , setError] = useState('');
 const [isSubmiting , setIsSubmiting] = useState(false)
  const {register , control , handleSubmit , formState : {errors}}= useForm<IssueForm>({
    resolver : zodResolver(createIssueSchema)
   });
  const onSubmit = handleSubmit(async(data) =>
{
  try{
    setIsSubmiting(true)
    await axios.post('/api/issues' , data)
    route.push('/issues')
  }catch(error){
    setIsSubmiting(false)
    setError('An Usexpected Error Accurred ')
  }

})
  return (
    <div className='max-w-xl '>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form className='space-y-2' onSubmit={onSubmit}>
          <TextField.Root>
          <TextField.Input placeholder="Write Title" {...register('title')}/>
          </TextField.Root>
          <ErrorMessage >{errors.title?.message}</ErrorMessage>

          <Controller 
          name='description'
          control={control}
          render={({field})=> <SimpleMDE placeholder="Description" {...field}/>}
          />
         <ErrorMessage >{errors.description?.message}</ErrorMessage>
          
          <Button disabled={isSubmiting}>Submit New Issue {isSubmiting && <Spinner/>}</Button>
      </form>
    </div>
  )
}

export default NewIssuePage