import React from "react";

function LoginScreen({
  username,
  password,
  setUsername,
  setPassword,
  onLogin,
}) {
  // Permite trimiterea formularului la apăsarea tastei Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        
        {/* Coloana Stângă: Branding & Inspirație */}
        <div className="login-sidebar">
          <div className="sidebar-content">
            <span className="sidebar-logo-icon">🚀</span>
            <h2>Pregătește-te pentru succes!</h2>
            <p>Accesează testele PCM 2026 și verifică-ți cunoștințele capitol cu capitol.</p>
          </div>
          <div className="sidebar-footer">
            <span>Platformă de simulare © 2026</span>
          </div>
        </div>

        {/* Coloana Dreaptă: Formularul de Login */}
        <div className="login-form-area">
          <form className="login-card-modern" onSubmit={handleSubmit}>
            <div className="login-header">
              <h1>Autentificare</h1>
              <p className="login-subtitle">Introdu datele de acces pentru a începe</p>
            </div>

            <div className="input-group">
              <label htmlFor="username">Utilizator</label>
              <input
                id="username"
                type="text"
                placeholder="Ex: pcm2026"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Parolă</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button type="submit" className="btn-login-submit">
              Intră în aplicație →
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default LoginScreen;