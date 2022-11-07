import { Containner } from "./styled.js";
import Aside from "../../components/aside/index.jsx"
import Navbar from "../../components/navbar/index.jsx";
import Header from "../../components/header/index.jsx";
import Form from "../../components/proprietariosComponents/formPesquisar/index.jsx"
import Table from "../../components/proprietariosComponents/table/index.jsx"
import Modal from "../../components/proprietariosComponents/modal/index.jsx"
import Pesquisar from "../../components/proprietariosComponents/pesquisar/index.jsx";
function Proprietarios(){

    return(
        <div>
            <Containner>
                {/* <Modal/> */}
                <Navbar/>
                <Aside/>
                <br />
                <Header/>
                <br /><br />
                <Pesquisar/>
                <br /><br /><br /><br /><br /><br />
                {/* <Form/> */}
                <br />
                <Table/>
                
            </Containner>
        </div>
    )
}

export default Proprietarios