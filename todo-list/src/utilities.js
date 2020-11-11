let id=0;
export function createId(){
    let result = id;
    id++;
    return result;
};