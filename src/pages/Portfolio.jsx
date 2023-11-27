import portfolioimages from "../assets/Portfoliolinks"
import { NavLink } from "react-router-dom"
import {PortfolioItems} from "../components/PortfolioItems"
function Portfolio({isGaming}){
        // console.log(portfolioimages)
return(
    <>
    
    {isGaming ? (<>
            <h1 className="text-center">gaming</h1>
    </>):(<>
    <h1 className="text-center">coding</h1>
        <section>
                {portfolioimages.map(( items, index) =>(
                         <article key={index}>
                                 <PortfolioItems items={items} index={index}  />
                         </article>
                        
                ))}
        </section>
         
    </>)}
            <p className="text-center">this is in both</p>
    
    </>
)
}
export default Portfolio