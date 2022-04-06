const decrement = (counterValue) =>{
    return{
        type: 'DECREMENT',
        payload : counterValue
    }
}
export default decrement;