import { Button } from "frog"
import { CustomFrameContext } from "."

export const startScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
				<div style={{ color: 'white', display: 'flex', fontSize: 30 }}>dont drop the</div>
				<div style={{ color: 'white', display: 'flex', fontSize: 30 }}>BASE</div>
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Rules</Button>,
      <Button action={'/status'}>Start</Button>,
    ]
  })
}