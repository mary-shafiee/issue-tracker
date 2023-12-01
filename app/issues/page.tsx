import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '@/prisma/client'
import IssueStateBadge from '../components/IssueStateBadge'

const IssuesPage =  async() => {
  const Issues = await prisma.issue.findMany();
  return (
    <div>
      <div className='mb-5'>
        <Button variant="classic">
          <Link href={'/issues/new'}>New issues</Link>
        </Button>
      </div>
      
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell  className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Issues.map((issue) => <Table.Row key={issue.id}>
            <Table.Cell>{issue.title}
            <div className='block mt-1 md:hidden '><IssueStateBadge status={issue.status}/></div>
            </Table.Cell>
            <Table.Cell  className='hidden md:table-cell'><IssueStateBadge status={issue.status}/></Table.Cell>
            <Table.Cell  className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
        </Table.Row>)}
      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default IssuesPage