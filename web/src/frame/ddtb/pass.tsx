import { FrameContext, TextInput } from "frog";
import { Button } from "frog";

export const passScreen = (c: FrameContext) => {
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
				Enter the ens name or address of the user you want to pass to
			</div>
    ),
    intents: [
			<TextInput placeholder="dwr.eth..." />,
			<Button action="/">Back</Button>,
      <Button.Transaction target="/transaction">Pass</Button.Transaction>,
    ]
  })
}