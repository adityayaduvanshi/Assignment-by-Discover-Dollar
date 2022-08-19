import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </div>
      <div className="search-bar">
        <SearchBar data={menuItems} />
      </div>
    </nav>
  );
};

export default Navbar;
