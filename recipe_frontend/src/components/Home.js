import React from "react";
import "./Home.css";

const SearchIcon = () => (
  <svg className="search__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="#292d32" strokeWidth="1.5" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#292d32" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Star = ({ filled = true }) => (
  <span style={{ color: filled ? "var(--color-rating)" : "#ddd" }}>★</span>
);

function Home() {
  // Dishes cards per Figma (title, time, rating)
  const dishes = [
    { id: 1, title: "Classic Greek Salad", time: "15 Mins", rating: "4.5" },
    { id: 2, title: "Crunchy Nut Coleslaw", time: "10 Mins", rating: "3.5" },
    { id: 3, title: "Shrimp Chicken Andouille Sausage Jambalaya", time: "10 Mins", rating: "3.0" },
    { id: 4, title: "Barbecue Chicken Jollof Rice", time: "10 Mins", rating: "4.5" },
    { id: 5, title: "Portuguese Piri Piri Chicken", time: "10 Mins", rating: "4.5" },
  ];

  // New Recipes per Figma
  const newRecipes = [
    { id: 1, title: "Steak with tomato sauce and bulgur rice.", rating: 5, creator: "By James Milner", time: "20 mins" },
    { id: 2, title: "Pilaf sweet with lamb-and-raisins", rating: 5, creator: "By Laura wilson", time: "20 mins" },
    { id: 3, title: "Rice Pilaf, Broccoli and Chicken", rating: 5, creator: "By Lucas Moura", time: "20 mins" },
    { id: 4, title: "Chicken meal with sauce", rating: 5, creator: "By Issabella Ethan", time: "20 mins" },
    { id: 5, title: "Stir-fry chicken with broccoli in sweet and sour sauce and rice.", rating: 5, creator: "By Miquel Ferran", time: "20 mins" },
  ];

  const categories = [
    { id: "all", label: "All", active: true },
    { id: "indian", label: "Indian" },
    { id: "italian", label: "Italian" },
    { id: "asian", label: "Asian" },
    { id: "chinese", label: "Chinese" },
    { id: "fruit", label: "Fruit" },
    { id: "vegetables", label: "Vegetables" },
    { id: "protein", label: "Protein" },
    { id: "cereal", label: "Cereal" },
    { id: "local", label: "Local Dishes" },
  ];

  return (
    <main className="home">
      <div className="home__frame">
        <div className="home__status-spacer" />
        {/* Header */}
        <div className="home__header">
          <div className="home__greeting">
            <div className="home__hello">Hello Jega</div>
            <div className="home__question">What are you cooking today?</div>
          </div>
          <div className="home__avatar" aria-label="Profile">
            😊
          </div>
        </div>

        {/* Search + Filter */}
        <div className="home__search-row">
          <label className="search hide-text-input-caret">
            <SearchIcon />
            <input className="search__input" placeholder="Search recipe" aria-label="Search recipe" />
          </label>
          <button className="btn-filter" aria-label="Open filters">
            ⚙️
          </button>
        </div>

        {/* Category Chips */}
        <div className="home__chips" role="tablist" aria-label="Categories">
          <div className="chips__row">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`chip ${c.active ? "chip--active" : ""}`}
                aria-pressed={c.active ? "true" : "false"}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes section */}
        <h2 className="section-title">New Recipes</h2>
        <div className="dishes" aria-label="Dishes">
          <div className="dishes__row">
            {dishes.map((d) => (
              <article className="dish-card" key={d.id}>
                <div className="dish-card__circle" aria-hidden="true" />
                <div className="dish-card__image-rect" aria-hidden="true" />
                <button className="dish-card__bookmark" aria-label="Bookmark">
                  🔖
                </button>
                <div className="dish-card__title">{d.title}</div>
                <div className="dish-card__meta">
                  <div className="meta__time">
                    <span className="meta__label">Time</span>
                    <span className="meta__value">{d.time}</span>
                  </div>
                  <div className="meta__rating-pill" aria-label={`Rating ${d.rating}`}>
                    <span className="star">★</span>
                    <span>{d.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* New Recipes row of smaller cards */}
        <div className="new-recipes" aria-label="New Recipes List">
          <div className="new-recipes__row">
            {newRecipes.map((n) => (
              <article className="nr-card" key={n.id}>
                <div className="nr-card__image-circle" aria-hidden="true" />
                <div className="nr-card__panel" aria-hidden="true" />
                <h3 className="nr-card__title">{n.title}</h3>
                <div className="nr-card__rating" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < n.rating} />
                  ))}
                </div>
                <div className="nr-card__bottom">
                  <div className="nr-card__creator">
                    <div className="avatar" aria-hidden="true" />
                    <div className="name">{n.creator}</div>
                  </div>
                  <div className="nr-card__time" aria-label={`Time ${n.time}`}>
                    <span className="icon">⏱</span>
                    <span className="value">{n.time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="home__navbar" role="navigation" aria-label="Bottom navigation">
          <div className="nav">
            <div className="nav__fab" aria-label="Create">＋</div>
            <div className="nav__icons">
              <div className="icon" aria-label="Home">🏠</div>
              <div className="icon" aria-label="Bookmarks">🔖</div>
              <div className="icon" aria-label="Notifications">🔔</div>
              <div className="icon" aria-label="Profile">👤</div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="home__indicator" aria-hidden="true" />
      </div>
    </main>
  );
}

export default Home;
