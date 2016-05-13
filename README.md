# Redux Reader Experiment

This is an experiment that uses [Fantasyland Readers][readers] with [Redux][]
to manage a "global confguration" without resorting to globals or keeping said
configuration tucked within the Redux state tree. I've also used the Reader to
perform dependency injection with the `fetch` implementation, which proved
helpful with testing.

Note that the applicaton does nothing more than present a button to click. The
important bit is that the request is made with a mockish CSRF header, and the
value for that header is provided via the Reader interface.

## Usage

To run this application:

    $ npm install
    $ npm start

And to run the tests:

    $ npm test

## Resources

- [Monad a day 1: Reader](https://vimeo.com/105300347)
- [fantasy-ramda Reader docs](https://github.com/ramda/ramda-fantasy/blob/master/docs/Reader.md)

## License

MIT

[readers]: https://github.com/fantasyland/fantasy-readers
[Redux]: https://github.com/reactjs/redux
