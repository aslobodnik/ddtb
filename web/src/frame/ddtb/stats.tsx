import { Button, FrameContext } from "frog"
import { ruleStyles } from "./styles"

export const rulesScreen1 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        Don't Drop the BASE <br />
        Game ID: _____ <br />
        Game Runtime: ______ <br />
        Unique Passers: ______
      </div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
      <Button action={'/'}>Remind</Button>
    ]
  })
}