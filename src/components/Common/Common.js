import { toast } from 'react-toastify';
import "../Common/common.scss";
import 'react-toastify/dist/ReactToastify.css'; 

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

export const GetConstants =  {    
    //TABLEAU
    TABLEAU_COLUMN_NUM: 10,

    //CARDS
    SYMBOL: ["♠"],
    SUIT: ["spade"],
    RANK: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    COMPLETE_QUEUE: ["13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
    CARD_RANKS: {
        A: "13",
        2: "12",
        3: "11",
        4: "10",
        5: "9",
        6: "8",
        7: "7",
        8: "6",
        9: "5",
        10: "4",
        J: "3",
        Q: "2",
        K: "1"
    },

    //TOAST MESSAGES
    MULTICARD_NOT_SEQUENTIAL: "Multi-card selection is not sequential.",
    SET_COMPLETED: "One set successfully completed.",
    SUCCESS_OPERATION: "The operation was successful.",

    //DICTIONARY
    CELEBRATION_MESSAGE: "Congratulations!",
    SCORE: "Score",
    PROFIT_MESSAGE: "You won",
    ADD_TRENDYOL_WALLET: "Add to my Trendyol wallet",
    CURRENCY: "TL"
}
