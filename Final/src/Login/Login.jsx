import './Login.css'
function Login(){
    return(
        <div className="container">
            <div className="main">
            <input className="input" type="checkbox" id="chk"  aria-hidden="true" />
            <div className="login">
                <form action="" className="form">
                <label for="chk" aria-hidden="true">Log in</label>
                <input className="input" type="email" name="email" placeholder="Email" required />
                <input className="input" type="password" name="pswd" placeholder="Password" required />
                <button>Log in</button>
                </form>
            </div>
            <div className="register">
                <form action="" className="form">
                    <label htmlFor="chk" aria-hidden="true">Register</label>
                    <input type="text" className="input" name="txt" placeholder="UserName" required />
                    <input type="email" className="input" name="email" placeholder="Email" required />
                    <input type="password" className="input" name="pswd" placeholder="Password" required />
                    <button>Register</button>
                </form>
            </div>
    
                 </div>
        </div>
    )
}
export default Login