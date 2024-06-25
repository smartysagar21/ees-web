import Item from "./Item";
import { SUPPORT1,  SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 lg:ml-36">
      <Item Links={SUPPORT1} title="COLLEGE ELEC DEPARTMENT" />
      
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;