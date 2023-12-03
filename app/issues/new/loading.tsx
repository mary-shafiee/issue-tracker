import { Box } from '@radix-ui/themes'
import React from 'react'
import { Skeleton} from '@/app/components'



const loadingNewIssue = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton/>
        <Skeleton height='20rem'/>
    </Box>
  )
}

export default loadingNewIssue