import * as React from "react";
import "./FlexRowContainer.css";

interface Props {
}

interface State {
}

export class FlexRowContainer extends React.Component<Props, State> {
    public static defaultProps = {
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        console.log("childs: ", this.props.children)
        return (
            <div className="flex-row-container">
                {this.props.children}
            </div>
        )
    }
}