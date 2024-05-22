import './Login.css';

function Login() {
    return (
        <div className="container">
            <div className="main">
                <input className="input" type="checkbox" id="chk" aria-hidden="true" />
                <div className="login">
                    <form action="" className="form">
                        <label htmlFor="chk" aria-hidden="true">Log in</label>
                        <input className="input" type="email" name="email" placeholder="Email" required />
                        <input className="input" type="password" name="pswd" placeholder="Password" required />
                        <button>Log in</button>
                        <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
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
            <div id="forgot-password">
                <div className="modal-overlay"></div>
                <div className="forgot-password-modal">
                    <form action="" className="form">
                        <label htmlFor="email" aria-hidden="true">Reset Password</label>
                        <input className="input" type="email" name="email" placeholder="Enter your email" required />
                        <button>Send Reset Link</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
