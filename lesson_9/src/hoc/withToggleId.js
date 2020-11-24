import React from 'react'

export default Component =>
    class WithToggleId extends React.Component {
        state = {
            openId: false,
            openIdTeachers: false,
        }

        toggle = id =>
            this.setState(({ openId }) => ({
                openId: openId === id ? null : id,
            }))
        
        toggleTeachers = id =>
            this.setState(({ openIdTeachers }) => ({
                openIdTeachers: openIdTeachers === id ? null : id,
            }))

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.state}
                    toggle={this.toggle}
                    toggleTeachers={this.toggleTeachers}
                />
            )
        }
    }
