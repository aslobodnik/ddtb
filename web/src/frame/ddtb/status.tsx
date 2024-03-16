import { Button, FrameContext } from "frog"
import { viemClient } from "../viemClient"
import { CONTRACT_ADDRESS } from "../../config"

export const statusScreen = async (c: FrameContext) => {

	const data = await viemClient.readContract({
		address: CONTRACT_ADDRESS,
		abi: (['abi']), // placeholder abi
		functionName: '',
	})
	
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
      <Button action='/rules-screen-1'>Rules</Button>,
			// if they have the BASE
			<Button action='/pass'>Pass</Button>,
			// if they don't have the BASE
      <Button.Link href={`https://warpcast.com/${currentUser}`}>Remind {currentUser}</Button.Link>,
    ]
  })
}