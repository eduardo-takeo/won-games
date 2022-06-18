import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'gray',
          height: '30rem',
          width: '40rem',
          position: 'relative'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <Ribbon {...args}>{args.children}</Ribbon>
)
