const addtocart = (counterValue) =>{
    return{
        type: 'ADDTOCART',
        payload : counterValue
    }
}

 export default addtocart;