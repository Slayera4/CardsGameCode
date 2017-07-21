const changeAttempts = (dispatch) => {
    console.log("Changing")
    return{
        type: "INCREMENT",
        numberAttempts: 3
        
    }
};

export default changeAttempts;