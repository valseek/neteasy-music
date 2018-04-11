export const isEmpty = (value)=>{
    if(value === undefined || value === "" || value === null){
        return true;
    }
    if(value instanceof Array && value.length === 0){
        return true;
    }

    let hasKey = false;
    for (let i in value){
        hasKey = true;
        break;
    }
    if (hasKey === false){
        return true;
    }

    return false;
}
