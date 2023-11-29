'use client'
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title : string ,
  description : string
}

const NewIssuePage = () => {
 const route = useRouter()
  const {register , control , handleSubmit}= useForm<IssueForm>();
  return (
    <form className='max-w-xl space-y-2' onSubmit={handleSubmit(async(data) =>
      {
      await axios.post('/api/issues' , data)
      route.push('/issues')
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
  )
}

export default NewIssuePage