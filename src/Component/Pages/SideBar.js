import {Link} from 'react-router-dom'
function SideBar()
{
    return(

        <>
         
            <section className="Side_bar">
                <ul>
                    <Link to='/' >
                       All products
                    </Link>
                    <Link to='/'>All Gategories</Link>
                </ul>

            </section>         
 
        </>

    )
}
export default SideBar