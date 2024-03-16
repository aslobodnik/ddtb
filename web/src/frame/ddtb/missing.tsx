import { Button, FrameContext } from "frog"

export const missingScreen = (c: FrameContext) => {
  
	const prevUser = 'limes.eth' // placeholder string
	const currentUser = 'slobo.eth' // placeholder string
	
	return c.res({
    image: (
      <div style={{ 
				display: 'flex', 
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<div style={{ color: 'white', display: 'flex', fontSize: 50 }}>{prevUser} passed the BASE to</div>
				<div style={{ color: 'white', display: 'flex', fontSize: 50 }}>{currentUser} ... they dropped it {':('}</div>
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Rules</Button>,
      <Button action={'/status'}>Start</Button>,
    ]
  })
}