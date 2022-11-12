import {Link} from 'react-router-dom'
function SideBar()
{
    return(

        <>
         
            <section className="Side_bar">
                <ul>
                    <Link to='/Products' >
                       All products
                    </Link>
                </ul>
                <ul>
                <Link to='/Gategories'>All Gategories</Link>

                </ul>

            </section>         
 
        </>

    )
}
export default SideBar