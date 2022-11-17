# DRO Health Frontend Engineer Home Task

#### Front Technologies Used
- React
- TypeScript
- Axios
- React-Testing Library (unit tests)

#### Requires:

- [node](https://nodejs.org/en/download/)
- [Yarn](https://github.com/yarnpkg/yarn.) or [npm](https://github.com/npm/cli/)

#### Installation:

```
git clone https://github.com/siccoo/dro-books
cd dro-books
```

#### Running:

##### `yarn start` or `npm start`

This runs the app and can be visited at [http://localhost:3000](http://localhost:3000) on your browser.


#### Directory structure

#### Overview

```tree
├─ public/
│  ├─ index.html
├─ src/
|  ├─ assets/
|  |  ├─scss
|  |  |  ├─styles.scss
|  ├─ components/
|  |  ├─Books
|  |  ├─Loading
|  ├─ types/
|  |  ├─ books.ts
|  |  ├─ characters.ts
|  ├─ services/
|  |  ├─ bookservice.ts
|  |  ├─ characterservice.ts
|  |  ├─ index.js
|  |  ├─store.js
│  ├─ utils/
|  |  ├─ http-common.js
│  ├─ index.tsx
│  ├─ App.tsx
│  ├─ App.scss
│  ├─ App.test.tsx
│  ├─ index.scss
│  ├─ jest.config.js
├─ package.json
└─ README.md
```

#### Run Tests
There's test case for Books components, then the customer page also have unit test

```shell
# Run tests for different components e.g.
$ yarn test Books.test.tsx
$ yarn test App.test.tsx
or
# Run all tests
$ yarn test
```
#### Issues faced

I faced complicated challenge in writing the test cases and I didn't perform basic search operation and the infinite loading.

#### Feedback
If I had more time, I would have built basic search operation, as well as more test cases