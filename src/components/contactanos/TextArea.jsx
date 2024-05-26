import PropTypes from 'prop-types'

const TextArea = ({ label, value, onChange, placeholder, loading }) => {
    return (
        <div className='flex flex-col mt-7'>
                <label className={`${loading? ' text-gray-400' : 'text-black'} mb-2`}>{label}</label>
                <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={loading}
                className={`${loading? 'border-gray-400 text-gray-400 animate-pulse' : 'border-black text-black'} p-2 border rounded-md bg-inherit`}
                rows={5}
            ></textarea>
        </div>
    )
}

TextArea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    loading: PropTypes.bool
}

export default TextArea