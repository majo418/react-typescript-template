import * as React from "react";

interface Props {
    callback?: (button: ImageButton) => Promise<void> | void,
    imageSrc: string,
    altText: string,
}

interface State {
    imageSrc: string,
    altText: string,
}

export class ImageButton extends React.Component<Props, State> {
    static defaultProps = {
        callback: (button: ImageButton) => console.log("ImageButton: Clicked!"),
        altText: "Can't load image!",
    };

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: this.props.imageSrc,
            altText: this.props.altText,
        }
    }

    render = () => {
        return (
            <button onClick={() => this.props.callback(this)}>
                <img src={this.state.imageSrc} alt={this.state.altText}></img>
            </button >
        )
    }
}