const increment = (counterValue) =>{
    return{
        type: 'INCREMENT',
        payload : counterValue
    }
}

 export default increment;