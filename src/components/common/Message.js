import '../../styles/message.css';

function Message({message, type}){
  return (
    <div className='response-text'>
      <p className={`message ${type === 'error' && "error"}`}>
        {message}
      </p>
    </div>
  )
}

export default Message;
