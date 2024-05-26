import PropTypes from 'prop-types'

const Error = ({children}) => {
    return (
        <p className="px-5 py-3 font-bold text-white uppercase rounded-lg bg-gradient-to-br from-red-300 to-red-500">
            { children }
        </p>
    )
}

Error.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]))
    ])
};

export default Error