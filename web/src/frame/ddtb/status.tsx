import { Button, FrameContext } from "frog"
import { getEthAddressFromFid, getGameState } from "../hub"

export const statusScreen = async (c: FrameContext) => {

	// get user fid from signed POST req
  const { frameData } = c
  const { fid } = frameData as { fid: number }
	
	// get verified addresses from fid
	const userAddress = await getEthAddressFromFid(fid)
	
	// check if the user currently has the base
	const hasBase = true // placeholder value   // viemClient.readContract({...})

	const { passedFrom, passedTo, timeRemaining } = await getGameState()

	const isGameActive = checkIsGameActive(timeRemaining)
	if (isGameActive) {
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
					}}>{passedFrom} passed the base to {passedTo}</div>
					<div style={{
						display: 'flex'
					}}>{passedTo} has {timeRemaining} to pass the BASE</div>
				</div>
			),
			intents: [
				<Button action='/rules-screen-1'>Rules</Button>,
				hasBase ? (
					<Button action='/pass'>Pass</Button>
				) : (
					<Button.Link href={`https://warpcast.com/${passedTo}`}>Remind {passedTo}</Button.Link>
				),
			]
		})
	}
	
	// return this if there is no active game
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
				}}>{passedFrom} passed the base to {passedTo}</div>
				<div style={{
					display: 'flex'
				}}>{passedTo} dropped it</div>
			</div>
    ),
    intents: [
      <Button action='/rules-screen-1'>Rules</Button>,
			<Button action="/pass">Start New Game</Button>,
    ]
  })
}