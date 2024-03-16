import { Button } from "frog"
import { CustomFrameContext } from "."

export const startScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={{ 
				display: 'flex', 
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				alignItems: 'center'
			}}>
				<div style={{ color: 'white', display: 'flex', fontSize: 50 }}>dont drop the</div>
				<div style={{ color: 'white', display: 'flex', fontSize: 50 }}>BASE</div>
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Rules</Button>,
      <Button action={'/status'}>Start</Button>,
    ]
  })
}