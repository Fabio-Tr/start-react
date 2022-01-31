import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
    const {text} = props;
    return <button>
        {text}
    </button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    text: "Cliccami"
}

export default Button