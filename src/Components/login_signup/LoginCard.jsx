import "../../pages/login/login-page.css";

export default function LoginCard() {
  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <label className="input-email" htmlFor="email-id">
          <p>Email Address*</p>
          <input type="text" />
        </label>
        <label htmlFor="password" className="input-password">
          <p>Password*</p>
          <input type="password" />
        </label>
        <div className="input-container flex_r">
          <span className="remember-me-checkbox flex_r">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </span>
          <p className="cursor-pointer">Forgot your password ?</p>
        </div>
        <button className="login-btn">Login</button>
        <button className="btn-guestLogin">Login as Guest</button>
        <p className="cursor-pointer">Create a New Account &gt;</p>
      </div>
    </>
  );
}
