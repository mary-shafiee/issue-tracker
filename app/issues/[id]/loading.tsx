import { Box, Card, Flex } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const loadingDetailIssue = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton/>
        <Flex gap='5' my='2'>
            <Skeleton width='5rem'/>
            <Skeleton  width='8rem'/>
        </Flex>
        <Card className='prose'>
            <Skeleton count={3}/>
        </Card>
    </Box>
  


  )
}

export default loadingDetailIssue