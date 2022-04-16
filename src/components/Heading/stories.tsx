import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    lineLeft: {
      type: 'boolean'
    },
    lineBottom: {
      type: 'boolean'
    }
  },
  component: Heading
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most populars',
  color: 'white',
  lineLeft: false,
  lineBottom: false
}
