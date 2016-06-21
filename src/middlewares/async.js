export default function({ dispatch }){
    return next => action => {
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        // 确保action's promise resolves
        action.payload
            .then(function(response){
               const newAction =  {...action, payload: response};
                dispatch(newAction);
            });
    }
}