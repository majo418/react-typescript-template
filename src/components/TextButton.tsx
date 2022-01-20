import * as React from "react";

interface Props {
    callback?: (button: TextButton) => Promise<void> | void,
    text?: string,
}

interface State {
    text: string,
}

export class TextButton extends React.Component<Props, State> {
    static defaultProps = {
        callback: (button: TextButton) => console.log("TextButton: Clicked!"),
        text: "Click me!",
    };

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        }
    }

    render = () => {
        return (
            <button onClick={() => this.props.callback(this)}>
                {this.state.text}
            </button>
        )
    }
}