import '../../styles/input.css';

function Input({title, type, handleChange}){
  return (
    <div className='input-block'>
      <p className='label'>{title}</p>
      <input
        type={type}
        className='input'
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Input;
