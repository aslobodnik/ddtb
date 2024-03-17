import { Button, FrameContext } from "frog";
import { getEthAddressFromFid, getGameState } from "../hub";
import { ruleStyles } from "./styles";

export const statusScreen = async (c: FrameContext) => {
  // get user fid from signed POST req
  const { frameData } = c;
  const { fid } = frameData as { fid: number };

  // get verified addresses from fid
  // const userAddress = await getEthAddressFromFid(fid);

  // check if the user currently has the base
  const hasBase = true; // placeholder value   // viemClient.readContract({...})

  // const { passedFrom, passedTo, timeRemaining } = await getGameState();

  // const isGameActive = checkIsGameActive(timeRemaining);

  const isGameActive = true;
  const passedFrom = "ncale.eth";
  const passedTo = "greg";
  const timeRemaining = "00h:07m:23s";

  const pfp1 = "https://gregskril.com/img/profile.jpg";
  const pfp2 = "https://euc.li/goerli/swagalicious.eth";
  const fromUser = "ncale.eth";
  const toUser = "greg";
  const uniqueAddresses = 20;
  const aliveTime = "2 days 23 hours and 21 minutes";

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
          }}
        >
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
            border: "2px solid black",
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
            border: "2px solid black",
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
              {passedFrom} passed the base to {passedTo}
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
            {passedTo} has {timeRemaining} to pass the base
          </span>
        </div>
      ),
      intents: [
        <Button action="/">Home</Button>,
        hasBase ? (
          <Button action="/pass">Pass</Button>
        ) : (
          <Button.Link href={`https://warpcast.com/~/compose?text=Hey%20@${passedTo}%2C%20don%27t%20drop%20the%20Base`}>
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
        }}
      >
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
          {fromUser} passed the BASE to {toUser} and they dropped it :(
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
