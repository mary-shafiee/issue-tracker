import React from 'react'
import {  Table } from '@radix-ui/themes'
import prisma from '@/prisma/client'
import IssueStateBadge from '../components/IssueStateBadge'
import IssueActions from './IssueActions';
import delay from 'delay'
import Link from '../components/Link';

const IssuesPage =  async() => {
  const Issues = await prisma.issue.findMany();
  await delay(2000);

  return (
    <div>
      <IssueActions/>
      
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
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              
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