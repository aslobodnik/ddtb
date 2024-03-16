import { Button, FrameContext } from "frog";


export const startScreen = async (c: FrameContext) => {

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
				}}>dont drop the</div>
				<div style={{
					display: 'flex'
				}}>BASE</div>
			</div>
		),
		intents: [
			<Button action="/rules-screen-1">Rules</Button>,
			<Button action="/status">Start</Button>
		]
	})
}