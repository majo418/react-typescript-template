import * as React from "react";

interface Props {
    title?: string,
    text?: string,
    size?: number,
    imagePercents?: number,
    imageSrc: string,
    altText?: string,
    left?: boolean,
}

interface State {
    title: string,
    text: string,
    size: number,
    imagePercents: number,
    imageSrc: string,
    altText: string,
    left: boolean,
}

export class ImageCard extends React.Component<Props, State> {
    public static defaultProps = {
        title: "Example",
        text: "A nice text here!",
        size: 3,
        left: false,
        imagePercents: 40,
        altText: "Can't load image!",
    }

    constructor(props) {
        super(props);
        this.setState(props)
    }

    render = () => {
        const CustomHeadingTag = `h${this.props.size}` as keyof JSX.IntrinsicElements;
        if (this.props.imagePercents < 1) {
            this.setState({
                imagePercents: 1
            })
        } else if (this.props.imagePercents > 99) {
            this.setState({
                imagePercents: 99
            })
        }
        const imageComponent = <img
            src={this.props.imageSrc}
            alt={this.props.altText}
            style={{
                width: this.props.imagePercents + "%"
            }}>
        </img>

        return (
            <div className="card" style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                width: "100%",
                display: "flex",
            }}>
                {this.props.left && imageComponent}
                <span
                    style={{
                        width: (100 - this.props.imagePercents) + "%"
                    }}
                >
                    <CustomHeadingTag style={{
                        marginBottom: "1px",
                        marginTop: "1px",
                        paddingBottom: "1px",
                        paddingTop: "1px",
                    }}>
                        {this.props.title}
                    </CustomHeadingTag>
                    <hr></hr>
                    <p >
                        {this.props.text}
                    </p>
                </span>
                {!this.props.left && imageComponent}
            </div >
        )
    }
}