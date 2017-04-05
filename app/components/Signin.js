export default function Signin() {


  return (
    <div className="sign-up">
      <div className="logo-and-heading">
        <i className="sign-cloud cloud-fa fa fa-mixcloud  fa-5x" aria-hidden="true"></i>
        <h1>SongCloud</h1>

      </div>

      <div className="sign-up-form">
        <h2>Sign In</h2>

        <form className="form-container" action="">
          <label htmlFor="user">E-mail</label>
          <input id="user"type="text"/>
          <label htmlFor="password"> Password</label>
          <input id="password" type="text"/>
          <button>Continue</button>
        </form>
      </div>

      <div className="sign-up-bottom">
        <p>Don't have an account yet? <a href="#">Create Account</a></p>
      </div>


    </div>
  )
}
