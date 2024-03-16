import { Button, FrameContext } from "frog"

export const statusScreen = async (c: FrameContext) => {
	const prevUser = 'limes.eth' // placeholder string
	const currentUser = 'slobo.eth' // placeholder string
	const timeRemaining = '00:02:56' // placeholder time
	
	return c.res({
    image: (
      <div style={{ 
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				color: 'white', 
				fontSize: '50',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<div style={{
					display: 'flex'
				}}>{prevUser} passed the base to {currentUser}</div>
				<div style={{
					display: 'flex'
				}}>{currentUser} has {timeRemaining} to pass the BASE</div>
			</div>
    ),
    intents: [
      <Button action={'/rules-screen-1'}>Rules</Button>,
      <Button.Link href={`https://warpcast.com/${currentUser}`}>Remind {currentUser}</Button.Link>,
    ]
  })
}