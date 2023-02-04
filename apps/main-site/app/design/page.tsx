import React, { type FC } from 'react'
import { Button } from '@alessiomarchi/ui/components'

export const metadata = {
  title: 'Design',
}

const DesignPage: FC = () => {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold'>Design Page</h1>
      <section title='Simple Buttons' className='space-x-3'>
        <Button ariaLabel='Button primary'>Primary</Button>
        <Button ariaLabel='Button secondary' theme={'secondary'}>
          Secondary
        </Button>
        <Button ariaLabel='Button error' theme={'error'}>
          Error
        </Button>
        <Button ariaLabel='button info' theme={'info'}>
          Info
        </Button>
      </section>
    </div>
  )
}

export default DesignPage
