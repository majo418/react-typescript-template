import { Component } from "react";

let nextId: number = 0

export class UniqueComponent<P, S> extends Component<P, S> {
    public readonly id: number = nextId++;

    constructor(props: P) {
        super(props);
    }

    markAsDirty = () => this.setState({})
}