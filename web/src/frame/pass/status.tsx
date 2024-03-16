import { Button } from "frog"
import { CustomFrameContext } from "."

export const statusScreen = (c: CustomFrameContext) => {
  
	const prevUser = 'limes.eth' // placeholder string
	const currentUser = 'slobo.eth' // placeholder string
	
	return c.res({
    image: (
      <div style={{ 
				display: 'flex', 
				flexDirection: 'column', 
				color: 'white', 
				fontSize: '50',
				alignItems: 'center',
				backgroundColor: 'red',
				justifyContent: 'center',
			}}>
				{prevUser} passed the base to {currentUser}
			</div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
      <Button.Link href={`https://warpcast.com/${currentUser}`}>Remind {currentUser}</Button.Link>,
    ]
  })
}