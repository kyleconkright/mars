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
        return (
            <section className="item">
                <header>Item Header</header>
            </section>
        )
    }
}

export default ItemComponent;