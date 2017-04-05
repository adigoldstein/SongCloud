export default function Signup() {


  return (
    <div className="sign-up">
      <div className="logo-and-heading">
        <i className="sign-cloud cloud-fa fa fa-mixcloud  fa-5x" aria-hidden="true"></i>
        <h1>SongCloud</h1>

      </div>

      <div className="sign-up-form">
        <h2>Create account</h2>

        <form className="form-container" action="">
          <label htmlFor="user">E-mail</label>
          <input id="user"type="text"/>
          <label htmlFor="password"> Password</label>
          <input id="password" type="text"/>
          <button>Continue</button>
        </form>
      </div>

      <div className="sign-up-bottom">
        <p>Already have an account? <a href="#">Sign In</a></p>
      </div>


    </div>
  )
}
