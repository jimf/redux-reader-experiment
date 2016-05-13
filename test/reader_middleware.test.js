import test from 'tape';
import sinon from 'sinon';
import Reader from 'fantasy-readers';
import subject from '../src/reader_middleware';

const setup = () => {
    const store = { dispatch: sinon.stub() };
    const next = sinon.stub();
    const env = Math.random();
    store.dispatch.returns('<DISPATCH RESULT>');
    next.returns('<NEXT RESULT>');
    return [store, next, env];
};

test('reader middleware - runs Reader actions', t => {
    const [store, next, env] = setup();
    const action = Reader(innerEnv => ({
        type: 'DUMMY_ACTION',
        payload: innerEnv
    }));
    const result = subject(Reader, env)(store)(next)(action);
    t.ok(store.dispatch.calledWith({
        type: 'DUMMY_ACTION',
        payload: env
    }), 'dispatches result of calling action.run');
    t.ok(next.notCalled, 'does not call "next"');
    t.equals(result, '<DISPATCH RESULT>', 'returns "dispatch" result');
    t.end();
});

test('reader middleware - passes through non-Reader actions', t => {
    const [store, next, env] = setup();
    const action = {
        type: 'DUMMY_ACTION',
        payload: 42
    };
    const result = subject(Reader, env)(store)(next)(action);
    t.ok(store.dispatch.notCalled, 'does not call dispatch');
    t.ok(next.calledWith(action), 'passes through action to "next"');
    t.equals(result, '<NEXT RESULT>', 'returns "next" result');
    t.end();
});
