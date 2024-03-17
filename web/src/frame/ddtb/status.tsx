import { Button, FrameContext } from "frog"
import { fetchEnsNamesFromAddresses, fetchEthAddressesFromFid } from "../hub"
import { getCurrentGameState, getTimestampInSeconds, checkIfGameIsActive, formatTimeRemaining } from "../utils"

export const statusScreen = async (c: FrameContext) => {

	// get user fid from signed POST req
  const { frameData } = c
  const { fid } = frameData as { fid: number }
	
	// get current game state
	const { passedFrom, passedTo, timestamp } = await getCurrentGameState()

	let passedFromEns: string | null = ''
	let passedToEns = ''
	if (passedFrom === "0x0000000000000000000000000000000000000000") {
		const name = await fetchEnsNamesFromAddresses([passedTo])
		passedFromEns = null
		passedToEns = name.filter((name) => name.owner === passedTo)[0].name
	} else {
		const names = await fetchEnsNamesFromAddresses([passedFrom, passedTo])
		passedFromEns = names.filter((name) => name.owner === passedFrom)[0].name
		passedToEns = names.filter((name) => name.owner === passedTo)[0].name
	}
	
	// get all user verified addresses
	const userAddresses = await fetchEthAddressesFromFid(fid)
	// return true if one of the addresses matches
	const hasBase = userAddresses.some((address) => (passedTo === address.userAssociatedAddresses))

	// game is active if time remaining is less than 12 hours
	const timeRemaining = (43200 - (getTimestampInSeconds() - timestamp))
	const isGameActive = checkIfGameIsActive(timeRemaining, 12)
	
	const formattedTimeString = formatTimeRemaining(timeRemaining)

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
					}}>{passedFromEns ? `${passedFromEns} passed the base to ${passedToEns}` : `${passedToEns} was passed the first base!`}</div>
					<div style={{
						display: 'flex'
					}}>{passedToEns} has {formattedTimeString} to pass the BASE</div>
				</div>
			),
			intents: [
				<Button action='/rules-screen-1'>Rules</Button>,
				hasBase ? (
					<Button action='/pass'>Pass</Button>
				) : (
					<Button.Link href={`https://warpcast.com/${passedToEns}`}>Remind {passedToEns}</Button.Link>
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