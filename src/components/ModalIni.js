import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../redux/actions/showModal";

const DivImg = styled.div`
  margin: 5%;
  background-color: transparent;
`;

const ImgDes = styled.img`
  width: 220px;
  height: 200px;
  transform: skewX(25deg) rotate(330deg) translateX(-25px);
`;
const Pdata = styled.p`
  color: #a7a9be;
  font-size: 18px;
  line-height: 27px;
`;
const DivBtnModal = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 53px;
  height: 15%;
  background-color: transparent;
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
        size="lg"
        show={lgShow}
        onHide={() => dispatch(CloseModal())}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        <DivDescription>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDisabled"
              disabled
            />
            <label class="form-check-label" for="flexSwitchCheckDisabled">
              Disabled switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
            </label>
          </div>
        </DivDescription>
      </Modal>
    </>
  );
};
