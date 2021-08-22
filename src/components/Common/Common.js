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

export const InfoPopUp = () => {
    return(
    <div class="tooltip">
        <FaQuestionCircle size={30} color="white">Hover</FaQuestionCircle>
        <span class="tooltiptext">{GetConstants.GAME_GOAL_INFO}</span>
    </div>
    )
}