import { Link } from "react-router-dom"

function PortfolioItems({items,index}){
   
    console.log('index',items)
    const item = {
        name: "example",
        // other properties of the item object
      };

    return(
        <>
            
            <h2>{items.title}</h2>
            
            {/* <Link to={{pathname:'/Inspection'}}></Link> */}
            <Link to={`/Inspection?title=${encodeURIComponent(items.title)}&image=${encodeURIComponent(items.imagelink)}&url=${encodeURIComponent(items.imageUrl)}&link=${encodeURIComponent(items.buttonlink)}&desc=
            ${encodeURIComponent(items.description)}`}>
        <img src={items.imagelink} alt="" style={{width:'400px'}} />
    </Link>
            
            <p>{items.description}</p>
        </>
    )
}
export  {PortfolioItems}