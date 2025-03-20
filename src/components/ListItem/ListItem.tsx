import { useContext } from "react";
import Item from "../Item/Item";
import { MyContext } from "../../App";
import './ListItem.css';

const ListItem = () => {
    const {users} = useContext(MyContext)
    return (
      <div className="list-items">
        {users && users.map((user, id)=>(
          <Item user={user} id={id} />
        ))}
      </div>
    )
}

export default ListItem;