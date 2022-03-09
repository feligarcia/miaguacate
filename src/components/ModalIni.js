import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../redux/actions/showModal";
import { Button } from "react-bootstrap";

const DivInt = styled.div`
  /* width: 50px; */
  margin: 50px;
  background-color: transparent;
`;

const ImgDes = styled.div`
  width: 220px;
  height: 200px;
  transform: skewX(25deg) rotate(330deg) translateX(-25px);
`;

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;
export const ModalIni = () => {
  const dispatch = useDispatch();
  const { lgShow } = useSelector((store) => store.app);
  console.log(lgShow);
  const getUserLocalST = JSON.parse(localStorage.getItem("usermiaguacate"));
  return (
    <>
      <Modal
        // size="sm"
        show={lgShow}
        onHide={() => dispatch(CloseModal())}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        <DivDescription>
          <DivInt>
            <h2>Queremos conocer tu perfil.</h2>
            <p>
              Necesitamos que respondas unas preguntas relacionadas con tu
              perfil para brindarte la mejor experiencia de usuario.
            </p>
            <form>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label class="form-check-label" for="check1">
                ¿Tienes un terreno propio o alquilado para siembra?
              </label>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="check2"
                
              />
              <label class="form-check-label" for="check2">
                ¿Tienes conocimiento sobre el cultivo de aguacate?
              </label>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="check3"
                
              />
              <label class="form-check-label" for="check3">
                ¿Cuentas con recursos propios o creditos?
              </label>
            </div>
            </form>
           
          <br></br>
            <Button variant="success">Continuar</Button>
          </DivInt>
        </DivDescription>
      </Modal>
    </>
  );
};
