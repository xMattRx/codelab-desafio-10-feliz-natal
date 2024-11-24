import React, { useEffect, useState } from 'react';
import './App.scss';

const App: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const nextChristmas = new Date(now.getFullYear(), 11, 25);
      if (now.getMonth() === 11 && now.getDate() > 25) {
        nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
      }

      const diff = nextChristmas.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeRemaining(
        `${days}d - ${String(hours).padStart(2, '0')}h - ${String(minutes).padStart(2, '0')}m - ${String(seconds).padStart(2, '0')}s`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="natal">
      <header className="natal__header">
        <div className="natal__header-container">
          <div className="natal__header-left">
            <img className="natal__logo" src="/logo.svg" alt="Logo da plataforma" />
            <h1 className="natal__title">
              Uma <span className="natal__title-highlight">plataforma de doação</span> para espalhar alegria
            </h1>
            <p className="natal__description">
              Nessas festas de fim de ano mande um presente para a pessoa amada
              e compartilhe a alegria do Natal.
            </p>
            <button className="natal__button">Fazer uma doação</button>
          </div>
          <div className="natal__header-right">
            <img className="natal__header-image" src="/image__header.png" alt="Imagem de cabeçalho" />
          </div>
        </div>
      </header>

      <main className="natal__main">
        <div className="natal__main-container">
          <h2 className="natal__main-title">Tempo limitado</h2>
          <p className="natal__main-text">
            Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.
          </p>
          <p className="natal__main-timer">{timeRemaining}</p>
          <img className="natal__main-image" src="/image2.png" alt="Imagem principal" />
          <div className="natal__main-content">
            <img className="natal__main-subimage" src="/image3.png" alt="Imagem secundária" />
            <div className="natal__main-text-container">
              <h3 className="natal__main-subtitle">Conectando generosidade ao redor do mundo</h3>
              <p className="natal__main-description">
                Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação
                de presentes significativos para aqueles que mais precisam. Faça parte do movimento e
                compartilhe o verdadeiro espírito da generosidade.
              </p>
              <button className="natal__main-button">Fazer uma doação</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="natal__footer">
        <div className="natal__footer-container">
          <img className="natal__footer-logo" src="/logo.svg" alt="Logo do rodapé" />
          <div className="natal__footer-icons">
            <img className="natal__footer-icon" src="/logo-twitter.png" alt="Twitter" />
            <img className="natal__footer-icon" src="/logo-whatsapp.png" alt="WhatsApp" />
            <img className="natal__footer-icon" src="/logo-instagram.png" alt="Instagram" />
            <img className="natal__footer-icon" src="/logo-facebook.png" alt="Facebook" />
            <img className="natal__footer-icon" src="/logo-google.png" alt="Google" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
