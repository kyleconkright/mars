import * as React from 'react';
import { match } from 'react-router-dom';

interface ItemProps {
    match: match<any>;
}

interface ItemState {
    title: string;
}

class CardComponent extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return (
            <section className="item">
                <header>
                    <h2>Cards</h2>
                </header>
            </section>
        )
    }
}

export default CardComponent;