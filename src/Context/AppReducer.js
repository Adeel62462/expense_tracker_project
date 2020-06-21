export default (state, action) => {
    switch(action.type){
        case "delete_transaction":
            return{
                ...state,
                transactionList: state.transactionList
                .filter(transaction => transaction.id!=action.payload)
            };
        case "add_transaction":
            return{
                ...state,
                transactionList: [action.payload, ...state.transactionList]
            };
        default:
            return state;
    };
}