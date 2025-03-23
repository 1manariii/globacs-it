import { useContext } from "react";
import "./Pagination.css";
import { MyContext } from "../../context/Context";

const Pagination = () => {
    const {page, setPage} = useContext(MyContext)
    const {activePage, lastPage} = page
    const buttons = []
    if(typeof lastPage === 'number') {
        for(let i = 1; i<=lastPage; i++) {
            buttons.push(<button 
                key={i} 
                onClick={()=>setPage({...page, activePage: i})}
                className={activePage === i ? 'active-page' : ''}    
            >{i}</button>)
        }
    } 

    return (
        <div className="wrapper__pagination">
            {buttons}
        </div>
    )
}

export default Pagination