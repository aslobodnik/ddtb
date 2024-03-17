import { FrameContext, TextInput } from "frog";
import { Button } from "frog";

export const passScreen = (c: FrameContext) => {
  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontSize: "50",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
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
