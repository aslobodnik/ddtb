import { Button, FrameContext } from "frog";
import { ruleStyles } from "./styles";

export const congratsScreen = (c: FrameContext) => {
  return c.res({
    image: (
      <div
        style={{
          ...ruleStyles,
        }}
      >
        <span>congrats</span>
      </div>
    ),
    intents: [
      <Button action={"/"}>Home</Button>,
      <Button action={"/"}>Remind</Button>,
    ],
  });
};
