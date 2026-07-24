import { type FormEvent, type MouseEvent, useState } from "react";
import "./App.css";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const clearForm = () => {
    setFullName("");
    setPassword("");
    setConfirmPassword("");
    setAcceptTerms(false);
    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    if (isRegister) {
      if (!fullName.trim() || !confirmPassword.trim()) {
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

      console.log({
        fullName,
        email,
        password,
      });

      alert("تم إنشاء الحساب بنجاح، يمكنك الآن تسجيل الدخول");

      setIsRegister(false);
      clearForm();
      return;
    }

    console.log({
      email,
      password,
    });

    alert("تم تسجيل الدخول بنجاح");
  };

  const toggleMode = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setIsRegister((currentMode) => !currentMode);
    clearForm();
  };

  return (
    <main className="login-page" dir="rtl">
      <div className="decor decor-one" />
      <div className="decor decor-two" />
      <div className="decor decor-three" />

      <section
        className={`login-card ${
          isRegister ? "register-card" : "login-mode-card"
        }`}
      >
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
          <p className="welcome">
            {isRegister ? "انضم إلى مجتمع تلاقي" : "أهلًا بعودتك"}
          </p>

          <h1>{isRegister ? "إنشاء حساب" : "تسجيل الدخول"}</h1>

          <p>
            {isRegister
              ? "حيث تلتقي العقول لتصنع الفرق"
              : "أدخل بيانات حسابك للمتابعة"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {isRegister && (
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
          )}

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

          <div className={isRegister ? "password-row" : "password-single"}>
            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>

              <input
                id="password"
                type="password"
                value={password}
                placeholder={
                  isRegister ? "8 أحرف على الأقل" : "أدخل كلمة المرور"
                }
                autoComplete={
                  isRegister ? "new-password" : "current-password"
                }
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {isRegister && (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  تأكيد كلمة المرور
                </label>

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
            )}
          </div>

          {!isRegister && (
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>تذكرني</span>
              </label>

              <a href="#">نسيت كلمة المرور؟</a>
            </div>
          )}

          {isRegister && (
            <label className="terms">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(event) =>
                  setAcceptTerms(event.target.checked)
                }
              />

              <span>
                أوافق على <a href="#">الشروط والأحكام</a> و
                <a href="#"> سياسة الخصوصية</a>
              </span>
            </label>
          )}

          {error && <p className="error">{error}</p>}

          <button className="login-button" type="submit">
            {isRegister ? "إنشاء الحساب" : "تسجيل الدخول"}
          </button>
        </form>

        <p className="footer-text">
          {isRegister
            ? "لديك حساب بالفعل؟ "
            : "لا تملك حسابًا؟ "}

          <a href="#" onClick={toggleMode}>
            {isRegister ? "تسجيل الدخول" : "إنشاء حساب"}
          </a>
        </p>
      </section>

      <p className="page-message">هُنا المستقبل</p>
    </main>
  );
}

export default App;