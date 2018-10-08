import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavComponent extends React.Component {

    render() {
        return (
            <aside className="nav">
                <ul>
                    <li>
                        <h3>Components</h3>
                        <ul>
                            <li><NavLink to="/color">Color</NavLink></li>
                            <li><NavLink to="/button">Button</NavLink></li>
                            <li><NavLink to="/card">Card</NavLink></li>
                            <li><NavLink to="/panel">Panel</NavLink></li>
                        </ul>
                    </li>
                    
                    <li>
                        <h3>Icons</h3>
                        <ul>
                            <li><NavLink to="/item">Button</NavLink></li>
                            <li><NavLink to="/item">Card</NavLink></li>
                            <li><NavLink to="/item">Panel</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        )
    }
}

export default NavComponent;