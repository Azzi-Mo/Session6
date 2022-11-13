import Nav from "./Nav"
import SideBar from "./Pages/SideBar"
import 
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
           <div className="sec_products col-10">test2</div>

          </section>
         


    </section>

     </>
        

    )
}
export default App