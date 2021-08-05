


export const usersHalper = (items, idOther, idOur, bulValue) => {
   return items.map(u => {
    if (u[idOther] === idOur) {
        return { ...u, ...bulValue}
    }
    return u;
})
}