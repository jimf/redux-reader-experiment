import test from 'tape';
import sinon from 'sinon';
import * as subject from '../src/actions';

test('actions - action types', t => {
    const expected = { FETCH_USERS: 'FETCH_USERS' };
    Object.keys(expected).forEach(key => {
        t.equal(subject[key], expected[key]);
    });
    t.end();
});

test('action creators - fetchUsers()', t => {
    const env = {
        csrfToken: 'abcd1234',
        fetch: sinon.stub()
    };
    env.fetch.returns('<FETCH RESULT>');

    const actual = subject.fetchUsers().run(env);

    t.ok(env.fetch.calledWith('https://randomuser.me/api/', {
        headers: { 'X-Fake-CSRF-Token': 'abcd1234' }
    }), 'runs with expected environment');
    t.deepEquals(actual, {
        type: subject.FETCH_USERS,
        payload: '<FETCH RESULT>'
    }, 'returns expected action after calling `run`');
    t.end();
});
