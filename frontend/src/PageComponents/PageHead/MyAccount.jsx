export default function MyAccount() {
  return (
    <div className="my_account_tab">
      <form>
        <h4>Accedi al tuo account:</h4>
        <div className="form_login_div">
          <label htmlFor="">Indirizzo email:</label>
          <input type="text" />
        </div>
        <div className="form_login_div">
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <button type="submit">Accedi</button>
        <a href="">Password dimenticata?</a>
        <a href="">Non hai ancora un account? Registrati qui</a>
      </form>
    </div>
  );
}
