import { Button, FrameContext } from "frog"
import { ruleStyles } from "./styles"

export const rulesScreen1 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        "Don't drop the BASE" is a game of hot potato on the Base blockchain.
      </div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
      <Button action={'/rules-screen-2'}>Next</Button>
    ]
  })
}

export const rulesScreen2 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        The game starts with Farcaster users passing the BASE NFT between each other
      </div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Back</Button>,
      <Button action={'/rules-screen-3'}>Next</Button>
    ]
  })
}

export const rulesScreen3 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        If the BASE NFT doesn't move for 12 hours, the BASE is considered 'dropped' and the NFT is immovable, forever shaming the recipient
      </div>
    ),
    intents: [
      <Button action={'/rules-screen-2'}>Back</Button>,
      <Button action={'/rules-screen-4'}>Next</Button>
    ]
  })
}

export const rulesScreen4 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        The point of the game is to pass the BASE NFT to as many unique users as possible and prolong the game for as long as possible without dropping it.
      </div>
    ),
    intents: [
      <Button action={'/rules-screen-3'}>Back</Button>,
      <Button action={'/'}>Home</Button>
    ]
  })
}
