import { toast } from 'react-toastify';
import "../Common/common.scss";
import 'react-toastify/dist/ReactToastify.css'; 
import "./common.scss";
import { GetConstants } from './Constant';
import { FaQuestionCircle } from 'react-icons/fa';

export const ToastMessage = {
    success(message, options = {}){
        return toast.success(message, {position: toast.POSITION.TOP_RIGHT});
    },

    info(message, options = {}){
        return toast.error(message, {position: toast.POSITION.TOP_RIGHT});
    },

    error(message, options = {}){
        return toast.error(message, {position: toast.POSITION.TOP_RIGHT});
    },
}

//Reusable pop up
export const PopUp = props => {
    return (
      <div className="popup-box" id="win-popup">
        <div className="box">
          {props.content}
        </div>
      </div>
    );
  }

export const InfoPopUp = () => {
    return(
    <div className="tooltip">
        <FaQuestionCircle size={30} color="white">Hover</FaQuestionCircle>
        <span className="tooltiptext">{GetConstants.GAME_GOAL_INFO}</span>
    </div>
    )
}