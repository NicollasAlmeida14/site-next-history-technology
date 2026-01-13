import PropTypes from "prop-types"

import { PasswordIcon } from "./styles"

function DefaultPasswordIcon({ children, ...props }) {
    return (
        <PasswordIcon {...props}>{children}</PasswordIcon>
    )
}

DefaultPasswordIcon.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultPasswordIcon