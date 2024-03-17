import { Button, FrameContext } from "frog"
import { fetchEnsNamesFromAddresses, fetchEthAddressesFromFid } from "../hub"
import { getCurrentGameState, getTimestampInSeconds, checkIfGameIsActive, formatTimeRemaining } from "../utils"
import { ruleStyles } from "./styles";

export const statusScreen = async (c: FrameContext) => {
  
  const pfp1 = "https://i.imgur.com/S7jfJYg.png";
  const pfp2 = "https://i.imgur.com/mFsBea8.png";
  const uniqueAddresses = 20;
  const aliveTime = "2 days 23 hours and 21 minutes";

  // get user fid from signed POST req
  const { frameData } = c
  const { fid } = frameData as { fid: number }
	
	// get current game state
	const { passedFrom, passedTo, timestamp } = await getCurrentGameState()

	const burnerAddressPattern = new RegExp('0x000000000000000')
	let fromUser: string | null = ''
	let toUser = ''
	console.log('test 1')
	if (burnerAddressPattern.test(passedFrom)) {
		const name = await fetchEnsNamesFromAddresses([passedTo])
		fromUser = ''
		toUser = name.filter((name) => name.owner === passedTo)[0].name
	} else {
		const names = await fetchEnsNamesFromAddresses([passedFrom, passedTo])
		fromUser = names.filter((name) => name.owner === passedFrom)[0].name
		toUser = names.filter((name) => name.owner === passedTo)[0].name
	}
	console.log('2')

	// get all user verified addresses
	const userAddresses = await fetchEthAddressesFromFid(fid)

	// return true if one of the addresses matches
	const hasBase = userAddresses[0].userAssociatedAddresses.some((address) => (passedTo === address))

	console.log("3")
	// game is active if time remaining is less than 12 hours
	const timeRemaining = (43200 - (getTimestampInSeconds() - timestamp))
	const isGameActive = checkIfGameIsActive(timeRemaining, 12)
	
	console.log('4')
	const formattedTimeString = formatTimeRemaining(timeRemaining)

  if (isGameActive) {
    return c.res({
      image: (
        <div
          style={{
            ...ruleStyles,
            paddingTop: 110,
            alignItems: "stretch",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}>
          <img
            src="https://i.imgur.com/O7Ncgpv.png"
            style={{ position: "absolute", left: 0, bottom: 0, width: "100%" }}
          />
					<img
						src={pfp1}
						style={{
							position: "absolute",
							left: 100,
							bottom: 250,
							width: "4rem",
							height: "4rem",
							objectFit: "cover",
							borderRadius: 1000,
						}}
        	/>

					<img
						src={pfp2}
						style={{
							position: "absolute",
							left: 410,
							bottom: 252,
							width: "4rem",
							height: "4rem",
							objectFit: "cover",
							borderRadius: 1000,
						}}
					/>

          <div
            style={{
              fontSize: "3.5rem",
              display: "flex",
			  			alignItems: 'center',
              flexDirection: "column",
            }}
          >
						{fromUser} passed the base to {toUser}
          </div>

          <span
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              maxWidth: 500,
              right: 70,
              top: 380,
            }}
          >
            {toUser} has {formattedTimeString} to pass the base
          </span>
        </div>
      ),
      intents: [
        <Button action="/">Home</Button>,
        hasBase ? (
          <Button action="/pass">Pass</Button>
        ) : (
          <Button.Link href={`https://warpcast.com/~/compose?text=Hey%20@${toUser}%2C%20don%27t%20drop%20the%20Base`}>
            Let Them Know
          </Button.Link>
        ),
      ],
    });
  }

	  // return this if there is no active game
		return c.res({
			image: (
			<div
				style={{
					...ruleStyles,
					paddingTop: 80,
					alignItems: "stretch",
					justifyContent: "flex-start",
				}}>
					<img
						src="https://i.imgur.com/xDknA3X.png"
						style={{ position: "absolute", left: 0, bottom: 0, width: "100%" }}
					/>
	
					<img
						src={pfp1}
						style={{
							position: "absolute",
							left: 110,
							bottom: 220,
							width: "4rem",
							height: "4rem",
							objectFit: "cover",
							border: "2px solid black",
							borderRadius: 1000,
						}}
					/>
	
					<img
						src={pfp2}
						style={{
							position: "absolute",
							left: 390,
							bottom: 220,
							width: "4rem",
							height: "4rem",
							objectFit: "cover",
							border: "2px solid black",
							borderRadius: 1000,
						}}
					/>
	
					<span style={{ fontSize: "4rem" }}>
						{fromUser} passed the BASE to {toUser} and they dropped it {':('}
					</span>
	
					<span
						style={{
							position: "absolute",
							fontSize: "2.5rem",
							maxWidth: 500,
							right: 70,
							top: 330,
						}}
					>
						The BASE was passed to {uniqueAddresses} unique people and was alive
						for {aliveTime}
					</span>
				</div>
			),
			intents: [
				<Button action="/">Home</Button>,
				<Button action="/pass">Start New Game</Button>,
			],
		});
	};
	