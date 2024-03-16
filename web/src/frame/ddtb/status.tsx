import { Button, FrameContext } from "frog"
import { getEthAddressFromFid } from "../hub"
import { viemClient } from "../viemClient"

export const statusScreen = async (c: FrameContext) => {

	// get user fid from signed POST req
  const { frameData } = c
  const { fid } = frameData as { fid: number }
	
	// get verified addresses from fid
	const userAddress = await getEthAddressFromFid(fid)
	
	// check if the user currently has the base
	const hasBase = true // placeholder value   // viemClient.readContract({...})

	const passedFrom = 'limes.eth' // placeholder string
	const passedTo = 'slobo.eth' // placeholder string
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