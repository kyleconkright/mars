import * as React from 'react';
import { match } from 'react-router-dom';

interface ItemProps {
    match: match<any>;
}

interface ItemState {
    title: string;
}

class ButtonComponent extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return (
            <section className="item">
                <header>
                    <h2>Buttons</h2>
                </header>
            </section>
        )
    }
}

export default ButtonComponent;