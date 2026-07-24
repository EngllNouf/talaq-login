import { type FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("يرجى تعبئة جميع الحقول");
      return;
    }

    if (password.length < 8) {
      setError("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    if (!acceptTerms) {
      setError("يرجى الموافقة على الشروط والأحكام");
      return;
    }

    alert("تم إنشاء الحساب بنجاح");

    console.log({
      fullName,
      email,
      password,
    });
  };

  return (
    <main className="login-page" dir="rtl">
      <div className="decor decor-one" />
      <div className="decor decor-two" />
      <div className="decor decor-three" />

      <section className="login-card register-card">
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
          <p className="welcome">انضم إلى مجتمع تلاقي</p>
          <h1>إنشاء حساب</h1>
          <p>حيث تلتقي العقول لتصنع الفرق</p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="fullName">الاسم الكامل</label>

            <input
              id="fullName"
              type="text"
              value={fullName}
              placeholder="أدخل اسمك الكامل"
              autoComplete="name"
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

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

          <div className="password-row">
            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>

              <input
                id="password"
                type="password"
                value={password}
                placeholder="8 أحرف على الأقل"
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                placeholder="أعد كتابة كلمة المرور"
                autoComplete="new-password"
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
              />
            </div>
          </div>

          <label className="terms">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(event) => setAcceptTerms(event.target.checked)}
            />

            <span>
              أوافق على <a href="#">الشروط والأحكام</a> و
              <a href="#"> سياسة الخصوصية</a>
            </span>
          </label>

          {error && <p className="error register-error">{error}</p>}

          <button className="login-button" type="submit">
            إنشاء الحساب
          </button>
        </form>

        <p className="footer-text">
          لديك حساب بالفعل؟ <a href="#">تسجيل الدخول</a>
        </p>
      </section>

      <p className="page-message">هُنا المستقبل</p>
    </main>
  );
}

export default App;