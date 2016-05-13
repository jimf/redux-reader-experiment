import Reader from 'fantasy-readers';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => Reader(({ csrfToken, fetch }) => ({
    type: FETCH_USERS,
    payload: fetch('https://randomuser.me/api/', {
        headers: { 'X-Fake-CSRF-Token': csrfToken }
    })
}));
