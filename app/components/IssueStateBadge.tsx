import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap : Record<Status , {label : string , color : 'green' | 'red' | 'violet'}> ={
    OPEN : {label: 'Open' , color :'red'},
    IN_PROGRESS : {label: 'In-progress' , color:'violet'},
    CLOSED : {label: 'Closed' , color:'green'},
}

const IssueStateBadge = ({status} : {status : Status}) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default IssueStateBadge