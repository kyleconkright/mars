import * as React from 'react';
import { match } from 'react-router-dom';

interface ItemProps {
    match: match<any>;
}

interface ItemState {
    title: string;
}

class ItemComponent extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return <p>{this.props.match.params.id}</p>
    }
}

export default ItemComponent;