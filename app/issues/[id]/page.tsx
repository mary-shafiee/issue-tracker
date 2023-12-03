import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react';
import {Card, Flex, Heading, Text} from '@radix-ui/themes'
import {IssueStateBadge} from '@/app/components'
import ReactMarkdown from 'react-markdown';

interface Props {
    params : {id:string}
}
const IssueDetailPage = async ({params} : Props) => {
    const issue = await prisma.issue.findUnique({
        where : { id : parseInt(params.id)}
    })
    if(!issue)
        notFound()
  return (
    <div>
        <Heading as='h2'>{issue.title}</Heading>
        <Flex gap='5' my='2'>
            <IssueStateBadge status={issue.status}/>
            <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className='prose' mt='4'>
            <ReactMarkdown >
                {issue.description}
            </ReactMarkdown>
        </Card>
      
 
    </div>
  )
}

export default IssueDetailPage