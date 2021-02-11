import Button from './components/Button'

function HomePage() {
    return (
  <div>  
  <form>
    <label>
      <h4>Nome:</h4>
      <input type="text" style={{width: 400}} />
    </label>
    <label>
      <br />
      <h4>Mensagem:</h4>
      <textarea style={{width: 400}} defaultValue={""} />
    </label>
    <br />
    <Button />
  </form>

    </div>
    )
    
  }
  
  export default HomePage