import { categories } from "../api/fakeData";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
