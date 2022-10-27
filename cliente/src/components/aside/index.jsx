import {Containner} from './styled.js'
import Logo from "/src/assets/logo.png"
import { FaHome,FaUsers,FaUserTie,FaHotel,FaHospitalUser,FaCogs} from 'react-icons/fa';

function Aside(){
   
    return(
        <div>
          <Containner>
    
            <div class="sidebar">
                <img src={Logo} alt="" />
                <div class="combo">
                <a class="active" href="/"> <FaHome/> Inicial</a>
                <a href="/clientes"><FaUsers/>  Clientes</a>
                <a href="#contact"><FaUserTie/>  Proprietarios</a>
                <a href="#about"><FaHotel/>    Imoveis</a>
                <a href="#about"><FaHospitalUser/>  Corretores</a>
                <br /><br /><br />
                <a href="#about" ><FaCogs/>       Configurações</a>
                </div>
            </div>  
            </Containner> 
           
        </div>
    )
}

export default Aside
