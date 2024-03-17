import { Button, FrameContext } from "frog";

export const startScreen = async (c: FrameContext) => {
	return c.res({
		image: (
			<div style={{ 
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'white', 
				color: 'black', 
				fontSize: '50',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<div style={{
					display: 'flex',
					fontWeight: 'bold',
					fontSize: '90px'
				}}>Don't Drop the</div>
				<div style={{
					display: 'flex',
					color: '#0277FF',
					fontWeight: 'bold',
					fontSize: '300px'
				}}>BASE!</div>
			</div>
			
		),
		intents: [
			<Button action="/rules-screen-1">Rules</Button>,
			<Button action="/stats">Stats</Button>,
			<Button action="/status">Start</Button>,
		]
	})
}