const navbarButtons = ["HOME", "IL MIO ACCOUNT", "LISTA DESIDERI", "CHI SIAMO", "CATEGORIE", "CERCA"];

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT CONTENT */}
      <div>
        <img />
      </div>
      {/* CENTRAL CONTENT */}
      <ul className="nav_items">
        {/* dinamically render the navbar elements */}
        {navbarButtons &&
          navbarButtons.map((nb, i) => {
            return (
              <li key={`nbb_${i}`}>
                <button className="btn_type_main">{nb}</button>
              </li>
            );
          })}
      </ul>
      {/* RIGHT CONTENT */}
      <div className="nav_cart">
        <img />
        <button>IL MIO CARRELLO</button>
      </div>
    </nav>
  );
}
