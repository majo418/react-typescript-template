import * as React from "react";
import { TextButton } from "./components/TextButton";
import { ImageCard } from "./components/ImageCard";
import { TextCard } from "./components/TextCard";
import { CenteredContainer } from "./components/CenteredContainer";
import { FlexRowContainer } from "./components/FlewRowContainer";

interface Props {
}

interface State {
}

export class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render = () => {
    let i: number = 0
    return (
      <React.Fragment>
        <h1 style={{
          padding: "10px",
          margin: "10px",
        }}>
          Hello World
        </h1>
        <CenteredContainer>
          <TextButton text="hello world"></TextButton>
          <TextButton></TextButton>
          <TextButton
            callback={
              (b) => {
                b.setState({ text: "counter: " + i++ })
              }
            }
          >
          </TextButton>
          <FlexRowContainer>
            <TextCard title="test123"></TextCard>
            <TextCard title="test321" size={5}></TextCard>
            <TextCard title="wow" size={2}></TextCard>
            <ImageCard
              imagePercents={40}
              left={true}
              imageSrc="https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg?w=1200"
            ></ImageCard>
          </FlexRowContainer>
        </CenteredContainer>
      </React.Fragment>
    )
  }
}