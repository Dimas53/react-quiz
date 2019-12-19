import React, {Component} from "react"
import cls from './Layout.module.sass'

class Layout extends Component {
    render() {
        return (
            <div className={cls.Layout}>


                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout