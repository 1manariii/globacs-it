import { useContext } from "react";
import Item from "../Item/Item";
import './ListItem.css';
import { MyContext } from "../../context/context";

const ListItem = () => {
    const {users} = useContext(MyContext)
    return (
      <div className="list-items">
        {users && users.map((user, id)=>(
          <Item user={user} id={id} key={id+1} />
        ))}
      </div>
    )
}

export default ListItem;