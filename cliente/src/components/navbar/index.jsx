import {Containner} from './styled.js'
import {FaBell } from 'react-icons/fa';
function Navbar(){
    var user="Alexandre Justen"
    return(
        <div>
        <Containner>
           <ul>
               <li><a href=""><FaBell/></a></li>
               <li>|</li>
               <button>{user}</button>
           </ul>
        </Containner>
       </div>
    )
}

export default Navbar