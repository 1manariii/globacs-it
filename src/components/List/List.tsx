import { useContext, useEffect } from "react";
import Item from "../Item/Item";
import './List.css';
import { MyContext } from "../../context/Context";

const ListItem = () => {
    const {users, page} = useContext(MyContext)
    const {activePage} = page
    useEffect(()=>{
    }, [page.activePage])
    return (
      <div className="list-items">
        {users && users.map((user, id)=>
        id < activePage*3 && 
        id >= activePage*3-3 && (
          <Item user={user} id={id} key={id+1} />
        ))}
      </div>
    )
}

export default ListItem;