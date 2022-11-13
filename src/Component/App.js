import {Routes , Route} from 'react-router-dom'
import Nav from "./Nav"
import Gategories from './Pages/Gategories'
import Products from './Pages/products'
import SideBar from "./Pages/SideBar"
function App()
{
    return (
        
     <>

    <section className="App" >

          <Nav/>
          <section className="row">

           <div className="sec_sideBar col-2"> 
           
           <SideBar/>
            </div>
           <div className="sec_products col-10">
           
             <Routes>
                <Route path='/Products' element={ <Products/> }/>
                <Route path='/Gategories' element={ <Gategories/> }/>
             </Routes>


            </div>

          </section>
         


    </section>

     </>
        

    )
}
export default App