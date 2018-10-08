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
            <section className="item">
                <header>
                    <h2>Colors</h2>
                </header>

                <div className="item-content">
                    {Object.keys(mars.colors).map((key: any, i) => {
                        const styles = {backgroundColor: mars.colors[key] }
                        return <li key={i} style={styles}>{key}</li>
                    })}
                </div>
            </section>
        )
    }
}

export default ButtonComponent;