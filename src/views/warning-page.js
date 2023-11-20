import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import EliminarEvento from "./eliminar-evento";


const WarningPage = () => {
    const [showDelete, setShowDelete] = useState(true)
    return(
        <>
            {showDelete && (<Container>
                <h1>LAS ACCIONES REALIZADAS EN ESTA SECCION SON PERMANENTES</h1>
                <Btn color='second' onClick={() => setShowDelete(false)}>CONTINUAR</Btn>

            </Container>)}
            {!showDelete && <EliminarEvento showEliminar={true} />}  
        </>
    )
}

export default WarningPage;

const Container = styled.div`

`

