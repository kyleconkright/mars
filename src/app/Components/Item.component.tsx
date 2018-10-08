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
        console.log(props);
    }

    render() {
        return (
            <section className="item">
                <header>
                    <h2>Item Header</h2>
                </header>
            </section>
        )
    }
}

export default ItemComponent;