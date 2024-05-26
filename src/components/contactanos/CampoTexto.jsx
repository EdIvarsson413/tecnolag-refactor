import PropTypes from 'prop-types'

const CampoTexto = ({ label, value, onChange, placeholder, type = 'text', loading }) => {
    return (
        <div className='flex flex-col'>
            <label className={`${loading? ' text-gray-400' : 'text-black'} mb-2`}>{label}</label>
            <input 
                type={type} 
                value={value}
                disabled={loading}
                onChange={onChange}
                placeholder={placeholder}
                className={`${loading? 'border-gray-400 text-gray-400 animate-pulse' : 'border-black text-black'} p-2 border rounded-md bg-inherit`}
            />
        </div>
    )
}

CampoTexto.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    loading: PropTypes.bool
}

export default CampoTexto