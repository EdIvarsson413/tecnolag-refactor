import PropTypes from 'prop-types'

const SelectAsunto = ({ label, value, onChange, opciones, loading }) => {
    return (
        <div className='flex flex-col mt-7'>
            <label className={`${loading? ' text-gray-400' : 'text-black'} mb-2`}>{label}</label>
            <select 
                value={value}
                onChange={onChange}
                disabled={loading}
                className={`${loading? 'border-gray-400 text-gray-400 animate-pulse' : 'border-black text-black'} p-2 border rounded-md bg-inherit`}
            >
                <option value="">-- SELECCIONAR --</option>
                {
                    opciones.map( op => (
                        <option 
                            key={op.value}
                            value={op.value}
                        >
                            {op.value}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

SelectAsunto.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    opciones: PropTypes.array,
    loading: PropTypes.bool
}

export default SelectAsunto