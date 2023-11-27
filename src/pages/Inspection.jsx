import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"


function Inspection(){
    const location = useLocation();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] =useState('')
    const [git, setGit] = useState('')
    const [link, setLink] = useState('')
    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search)
        const titleParam = searchParams.get('title')
        const imageParam = searchParams.get('image')
        const descParam = searchParams.get('desc')
        const gitParam = searchParams.get('link')
        const linkParam = searchParams.get('url')
        setTitle(titleParam)
        setDesc(descParam)
        setGit(gitParam)
        setImage(imageParam)
        setLink(linkParam)


    },[location.pathname])
    
    // console.log(title,image,desc,git, link)
return(
    <>
    <article>
    <h1>{title}</h1>
    <Link to={link} target="_blank">
    <img src={image} alt=""style={{width: '400px'}}  /></Link>
    <a href={git} target="_blank"><button>github</button></a>
    <p>{desc}</p>
    </article>
   
    </>
)
}

export default Inspection