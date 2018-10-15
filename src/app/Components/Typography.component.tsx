import * as React from 'react';
import { match } from 'react-router-dom';

const mars = require('./../../MARS/mars.js');

interface ItemProps {
    match: match<any>;
}

interface ItemState {
    title: string;
}

class TypographyComponent extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return (
            <section id="typography-component" className="item">
                <header>
                    <h2>Typography</h2>
                </header>

                <div className="item-content">
                    <h1>h1 Heading</h1>
                    <h2>h2 Heading</h2>
                    <h3>h3 Heading</h3>
                    <h4>h4 Heading</h4>
                </div>
            </section>
        )
    }
}

export default TypographyComponent;