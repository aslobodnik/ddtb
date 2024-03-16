import { TextInput } from "frog";
import { Button } from "frog";
import { CustomFrameContext } from ".";

export const passScreen = (c: CustomFrameContext) => {
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
				Enter the username of the user you want to pass the base to
			</div>
    ),
    intents: [
			<TextInput placeholder="dwr.eth..." />,
      <Button action={'/start'}>Pass</Button>,
    ]
  })
}