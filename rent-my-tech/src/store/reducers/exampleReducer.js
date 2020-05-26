const initalState = {
    msg: "Example State"
}

export const exampleReducer = (state=initalState, action) => {
    switch(action.type) {
        default:
            return (
                {...state}
            )
    }
}