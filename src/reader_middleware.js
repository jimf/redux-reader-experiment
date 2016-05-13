const readerMiddleware = (Reader, env) => ({ dispatch }) => next => action =>
    action instanceof Reader ? dispatch(action.run(env)) : next(action);

export default readerMiddleware;
