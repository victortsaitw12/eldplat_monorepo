/* {A_Ab_Bc:1} to {a_ab_bc:1} */
export function keysToLowercase(obj: { [key: string]: string }) {
    console.log(obj);
    const newObj: { [key: string]: string } = {};
    Object.keys(obj).map((key) => {
        newObj[key.toLowerCase()] = obj[key]
    })
    return newObj;
}
