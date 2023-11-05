import { useEffect, useState } from "react";

function useMultiform(...forms) {

   const [currentStepIndex,setCurrentStepIndex] = useState(0);
   const [currentPage, setCurrentPage] = useState(forms[0]);

   useEffect(()=> {
    setCurrentPage(forms[currentStepIndex])
   },[currentStepIndex]);

   function next() {
    console.log(currentStepIndex)
    if(currentStepIndex < forms.length - 1){
        setCurrentStepIndex(currentStepIndex+1);
    }
   }
   function previous(){
    console.log(currentStepIndex)
    if(currentStepIndex > 0){
        setCurrentStepIndex(currentStepIndex-1);
    }
   }
   return {
    currentStepIndex,
    currentPage,
    next,
    previous
    }
    
}

export default useMultiform;