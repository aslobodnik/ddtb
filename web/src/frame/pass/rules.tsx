import { Button } from "frog"
import { CustomFrameContext } from "."

export const rulesScreen1 = (c: CustomFrameContext) => {
	return c.res({
    image: (
      <div style={{ display: 'flex', color: 'white', fontSize: '50' }}>
				Rules pg 1: dont drop the BASE is a game of hot potato on the Base blockchain.
			</div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
      <Button action={'/rules-screen-2'}>Next</Button>
    ]
  })
}

export const rulesScreen2 = (c: CustomFrameContext) => {
	return c.res({
    image: (
      <div style={{ display: 'flex', color: 'white', fontSize: '50' }}>
				Rules pg 2
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Back</Button>,
      <Button action={'/rules-screen-3'}>Next</Button>
    ]
  })
}

export const rulesScreen3 = (c: CustomFrameContext) => {
	return c.res({
    image: (
      <div style={{ display: 'flex', color: 'white', fontSize: '50' }}>
				Rules pg 3
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-2'}>Back</Button>,
      <Button action={'/rules-screen-4'}>Next</Button>
    ]
  })
}

export const rulesScreen4 = (c: CustomFrameContext) => {
	return c.res({
    image: (
      <div style={{ display: 'flex', color: 'white', fontSize: '50' }}>
				Rules pg 4
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-3'}>Back</Button>,
      <Button action={'/'}>Next</Button>
    ]
  })
}
