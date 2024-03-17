import { FrameContext, TextInput } from "frog";
import { Button } from "frog";
import { ruleStyles } from "./styles";

export const passScreen = (c: FrameContext) => {
  return c.res({
    image: (
      <div
        style={{...ruleStyles}}>
        Enter the address of the user you want to pass the BASE to
      </div>
    ),
    intents: [
      <TextInput placeholder="dwr.eth..." />,
      <Button action="/">Home</Button>,
      <Button.Transaction target="/transaction">Pass</Button.Transaction>,
    ],
  });
};
