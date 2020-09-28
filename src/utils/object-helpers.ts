export const updateObjectInArray = (items:any,itemId:string, itemProps:string, newObjProps:any) => {
    return  items.map((user:any)=> {
    if (user[itemProps] === itemId) {
            return {...user, ...newObjProps}
        }
        return user;
    })
}