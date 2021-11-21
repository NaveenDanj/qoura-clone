import React , {useState , createContext} from "react";


export const createQuestionModelContext = createContext();

export const QuestionModelProvider = (props) => {

    const [isOpen , setIsOpen] = useState(false);


    return (

        <createQuestionModelContext.Provider value={[ isOpen , setIsOpen ]}>

            {props.children}

        </createQuestionModelContext.Provider>

    );


}