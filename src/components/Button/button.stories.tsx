import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';

storiesOf('Button', module)
  .add('hello', () => (
    <Button label="hello"/>
  ))
  .add('bye', () => (
    <Button label="bye"/>
  ))