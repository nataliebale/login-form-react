import '../../styles/button.css';

function Button({ title, mode, onClick }){
  return (
    <button
      className={`button ${mode === 'black' ? "black-btn" : "white-btn"}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  )
}

export default Button;
