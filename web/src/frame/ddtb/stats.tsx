import { Button, FrameContext } from "frog"
import { ruleStyles } from "./styles"

export const statsScreen = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles, flexDirection: "column", alignItems: 'flex-start' }}>
        <div style={{ fontSize: '75px', color: '#0277FF'}}>
          Dont Drop the BASE
        </div>
        <div>Game ID: _____</div>
        <div>Game Runtime: ______</div>
        <div>Unique Passers: ______</div>
      </div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
    ]
  })
}