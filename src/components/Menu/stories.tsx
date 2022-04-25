import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  argTypes: {
    username: {
      type: 'string'
    }
  },
  component: Menu
} as Meta

export const Default: Story = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
