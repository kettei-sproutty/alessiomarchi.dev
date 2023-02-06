import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './button'

storiesOf('Button', module)
  .add('Primary', () => (
    <Button theme='primary' ariaLabel='button primary' onClick={() => {}}>
      Primary
    </Button>
  ))
  .add('Secondary', () => (
    <Button theme='secondary' ariaLabel='button secondary' onClick={() => {}}>
      Secondary
    </Button>
  ))
  .add('Error', () => (
    <Button theme='error' ariaLabel='button error' onClick={() => {}}>
      Error
    </Button>
  ))
  .add('Info', () => (
    <Button theme='info' ariaLabel='button info' onClick={() => {}}>
      Info
    </Button>
  ))
