const {DECREMENT, INCREMENT} = require("./constants");

module.exports={
    incrementAction:(num)=>({
        type:INCREMENT,
        payload:num
    }),
    decrementAction:(num)=>({
        type:DECREMENT,
        payload:num
    })
}