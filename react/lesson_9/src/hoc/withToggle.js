import React from 'react'

export default Component =>
    class withToggle extends React.Component {
        state = {
            isOpen: false,
        }

        toggle = () => this.setState({ isOpen: !this.state.isOpen })

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.state}
                    toggle={this.toggle}
                />
            )
        }
    }
