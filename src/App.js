import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-content">
          <h1>Twins Prospects</h1>
          <div className="nav-links">
            <a href="#top-prospects">Top Prospects</a>
            <a href="#news">News</a>
            <a href="#analysis">Analysis</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Future Stars of the Minnesota</h1>
          <p>Tracking the next generation of Twins baseball talent</p>
        </div>
      </section>

      <section id="top-prospects" className="prospects-grid">
        <h2>Top Prospects</h2>
        <div className="prospect-cards">
          <div className="prospect-card">
            <div className="prospect-image brooks-lee"></div>
            <h3>Brooks Lee</h3>
            <p className="position">SS</p>
            <p className="rank">#1 Prospect</p>
          </div>
          <div className="prospect-card">
            <div className="prospect-image walker-jenkins"></div>
            <h3>Walker Jenkins</h3>
            <p className="position">OF</p>
            <p className="rank">#2 Prospect</p>
          </div>
          <div className="prospect-card">
            <div className="prospect-image emmanuel-rodriguez"></div>
            <h3>Emmanuel Rodriguez</h3>
            <p className="position">OF</p>
            <p className="rank">#3 Prospect</p>
          </div>
        </div>
      </section>

      <section id="news" className="news-section">
        <h2>Latest Updates</h2>
        <div className="news-grid">
          <article className="news-card">
            <h3>Spring Training Highlights</h3>
            <p>Top prospects making waves in Fort Myers...</p>
          </article>
          <article className="news-card">
            <h3>Minor League Rankings</h3>
            <p>Minnesota's farm system ranked top 5 in MLB...</p>
          </article>
          <article className="news-card">
            <h3>Prospect Watch</h3>
            <p>Weekly performance updates from the minors...</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p> 2025 Twins Prospects | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
