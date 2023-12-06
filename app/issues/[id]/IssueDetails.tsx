import { IssueStateBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Heading, Flex, Card, Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}: {issue:Issue}) => {
  return (
    <>
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
    </>
  )
}

export default IssueDetails