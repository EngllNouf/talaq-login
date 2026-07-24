import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    alert("تم تسجيل الدخول بنجاح");
  };

  return (
    <main className="login-page" dir="rtl">
      <div className="decor decor-one" />
      <div className="decor decor-two" />
      <div className="decor decor-three" />

      <section className="login-card">
        <div className="brand">
          <div className="brand-symbol">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="brand-name">TLAQI</div>
        </div>

        <div className="heading">
          <p className="welcome">أهلًا بك في تلاقي</p>
          <h1>تسجيل الدخول</h1>
          <p>حيث تلتقي العقول لتصنع الفرق</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>

            <input
              id="email"
              type="email"
              value={email}
              placeholder="name@example.com"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">كلمة المرور</label>

            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="أدخل كلمة المرور"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "إخفاء" : "إظهار"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>تذكرني</span>
            </label>

            <a href="#">نسيت كلمة المرور؟</a>
          </div>

          {error && <p className="error">{error}</p>}

          <button className="login-button" type="submit">
            تسجيل الدخول
          </button>
        </form>

        <p className="footer-text">
          لا تملك حسابًا؟ <a href="#">إنشاء حساب</a>
        </p>
      </section>

      <p className="page-message">هُنا المستقبل</p>
    </main>
  );
}

export default App;