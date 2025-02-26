import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

const meta: Meta<GameCardProps> = {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    title: {
      type: 'string'
    },
    developer: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    price: {
      type: 'string'
    }
  }
}


export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj<GameCardProps> = (args: any) => <GameCard {...args} />

Basic.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1jyc.jpg',
  price: 'R$ 235,00'
}
