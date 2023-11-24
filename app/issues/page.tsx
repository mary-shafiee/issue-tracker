import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const IssuesPage = () => {
  return (
    <Button variant="classic"><Link href={'/issues/new'}>New issues</Link></Button>
    
  )
}

export default IssuesPage