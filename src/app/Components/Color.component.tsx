import * as React from 'react';
import { match } from 'react-router-dom';

const mars = require('./../../MARS/mars.js');

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
            <section id="color-component" className="item">
                <header>
                    <h2>Colors</h2>
                </header>

                <div className="item-content">
                    {Object.keys(mars.color).map((key: any, i) => {
                        const styles = {backgroundColor: mars.color[key] }
                        return (
                            <li key={i}>
                                <div style={styles} className="swatch"></div>
                                <p>{key}</p>
                                <p>{mars.color[key]}</p>
                            </li>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default ButtonComponent;