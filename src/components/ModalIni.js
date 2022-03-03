
import {  Modal } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../redux/actions/showModal";



const DivImg = styled.div`
  margin: 5%;
  background-color: transparent;
`

const ImgDes = styled.img`
  width: 220px;
  height: 200px;
  transform: skewX(25deg) rotate(330deg) translateX(-25px);
`
const Pdata = styled.p`
  color: #A7A9BE;
  font-size: 18px;
line-height: 27px;
`
const DivBtnModal = styled.div`
display: flex;
flex-direction:row;
max-height: 53px;
height:15%;
background-color: transparent;
`
const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const ModalIni =  () => {
  const dispatch = useDispatch();
  const { lgShow } = useSelector((store) => store.app);
console.log(lgShow)
   const getUserLocalST = JSON.parse(localStorage.getItem('usermiaguacate'))
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => dispatch(CloseModal())}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        <DivDescription>
          <h1>MOdal de prueba</h1>
        </DivDescription>
       
        
      </Modal>
    </>
  );
};
