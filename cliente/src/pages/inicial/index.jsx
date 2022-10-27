import Aside from '../..//components/aside/index.jsx'
import Navbar from '../..//components/navbar/index.jsx'
import Pesquisar from '../../components/inicialComponents/pesquisar/index.jsx'
import Grids from '../../components/inicialComponents/grids/index.jsx'
function Inicial(){
    return(
        <div>
            <Navbar/>
            <Aside/>
            <Pesquisar/>
            <br />
            <br />
            <Grids/>
         
        </div>
    )
}
export default Inicial