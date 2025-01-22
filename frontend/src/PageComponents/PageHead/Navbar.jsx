import { useEffect, useState } from "react";
import MyAccount from "./MyAccount";
import UsTab from "./UsTab";
import CategoriesTab from "./CategoriesTab";
import SearchTab from "./SearchTab";

const navbarButtonsInitialState = [
  { name: "HOME", active: true },
  { name: "IL MIO ACCOUNT", active: false },
  { name: "LISTA DESIDERI", active: false },
  { name: "CHI SIAMO", active: false },
  { name: "CATEGORIE", active: false },
  { name: "CERCA", active: false },
];

export default function Navbar() {
  const [navbarButtons, setNavbarButtons] = useState(navbarButtonsInitialState);
  const [navbarOpen, setNavbarOpen] = useState(false);

  function openNavbarDropdownMenu({ btnIndex = 0 }) {
    setNavbarOpen(true);
    setNavbarButtons((prevState) => {
      return prevState.map((nb, i) => {
        return i === btnIndex ? { ...nb, active: true } : { ...nb, active: false };
      });
    });
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (e.target.closest(".navbar")) return;
      setNavbarOpen(false);
      setNavbarButtons((prevState) => {
        return prevState.map((nb) => {
          return { ...nb, active: false };
        });
      });
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
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
                  <button
                    className={`btn_type_main ${nb.active && "btn_type_active"}`}
                    onClick={() => {
                      openNavbarDropdownMenu({ btnIndex: i });
                    }}
                  >
                    {nb.name}
                  </button>
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
      {/* DROPDOWN MENU */}
      <div className={`navbar_dropdown ${navbarOpen && "navbar_dropdown_active"}`}>
        {navbarButtons[1].active && <MyAccount />}
        {navbarButtons[3].active && <UsTab />}
        {navbarButtons[4].active && <CategoriesTab />}
        {navbarButtons[5].active && <SearchTab />}
      </div>
    </>
  );
}
