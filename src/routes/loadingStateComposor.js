export default function loadingStateComposor({REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED}) {
   return (state=initialState, action)=>{
     return () => {
       switch (action.type) {
         case REQUEST_STARTED:
         case REQUEST_COMPELTED:
         case REQUEST_FAILED:
           return Object.assign({}, state, action);
         default:
           return state;
        }
     }
   }
 }
