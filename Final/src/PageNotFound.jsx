import { Link } from "react-router-dom"

 function PageNotFound(){
    return(
        <div>
            <h1>404 page not found</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore facilis vel consectetur, voluptate, ipsum, quibusdam corporis molestias laborum eos veritatis cupiditate. Temporibus dolorem voluptatem tempore est minima molestias laboriosam?</p>
            <p>goes back to <Link to='/'> Home</Link></p>
        </div>
    )
}
export default PageNotFound