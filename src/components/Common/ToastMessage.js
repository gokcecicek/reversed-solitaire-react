import { toast } from 'react-toastify';
import "../Common/common.scss";
import 'react-toastify/dist/ReactToastify.css'; 
const ToastMessage = {
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
export default ToastMessage;