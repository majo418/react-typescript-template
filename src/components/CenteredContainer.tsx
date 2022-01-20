import * as React from "react";

interface Props {
}

interface State {
}

export class CenteredContainer extends React.Component<Props, State> {
    public static defaultProps = {
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }}>
                {this.props.children}
            </div>
        )
    }
}