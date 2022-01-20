import * as React from "react";

interface Props {
    title: string,
    text: string,
    size: number,
}

interface State {
}

export class TextCard extends React.Component<Props, State> {
    public static defaultProps = {
        title: "Example",
        text: "A nice text here!",
        size: 3,
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        const CustomHeadingTag = `h${this.props.size}` as keyof JSX.IntrinsicElements;
        return (
            <div className="card" style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                width: "100%",
            }}>
                <CustomHeadingTag style={{
                    marginBottom: "1px",
                    marginTop: "1px",
                    paddingBottom: "1px",
                    paddingTop: "1px",
                }}>

                </CustomHeadingTag>
                <hr></hr>
                <p>{this.props.text}</p>
            </div >
        )
    }
}