import React, { Component } from 'react';

class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu} >
                    <img className="tent_logo" src={window.footerURL} />
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className="drop_menu">
                                    <button className="nav_logged_in_logout" onClick={logout}>Log Out</button>
                                </div>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default DropDown;