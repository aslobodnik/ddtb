import { Button, FrameContext } from "frog"
import { ruleStyles } from "./styles"

export const rulesScreen1 = (c: FrameContext) => {
	return c.res({
    image: (
      <div style={{ ...ruleStyles }}>
        Congratulations! You passed the BASE to __________
      </div>
    ),
    intents: [
      <Button action={'/'}>Home</Button>,
      <Button action={'/'}>Remind</Button>
    ]
  })
}