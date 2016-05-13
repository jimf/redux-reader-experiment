const initialState = () => ({});

const reducers = {};

const appReducer = (state = initialState(), action) => (
    action.type in reducers
        ? reducers[action.type](state, action)
        : state
);

export default appReducer;
