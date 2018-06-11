# F1 Champs!

F1 Champs is a SPA that shows the Formula One World Champions from 2005 to today. Clicking "view"
on a row will take the user to a new page showing them all of the Grand Prix winners from that
year, highlighing the years' World Champion. (I hope I'm using the correct terminology, I'm new
to Formula One :))

## Installing
- `git clone https://github.com/micahelriceio/f1-champs.git`
- `cd f1-champs`
- Using Yarn
  - `yarn install`
  - `yarn start`
- Using NPM
  - `npm install`
  - `npm start`

A browser window should open to [localhost:3000](http://localhost:3000)

## Building
To run production ready code make sure you're in the root directory then:
- Using Yarn
  - `yarn build`
  - `yarn global add serve`
- Using NPM
  - `npm run build`
  - `npm -g i serve`

Then type `server -s build`
The site will be available for viewing at [localhost:3000](http://localhost:3000)

## Architecture
The site has a simple architecture. All code is in `/src/` with `Index.js` being the entry point to
the application. `App.js` is used to set the header and define the routes. All components are in
`/src/components`. `styled-components` is used to style the site and all styles are kept
in `/src/components/styled`.

## Technologies Used
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/ReactTraining/react-router)
- [Prop-Types](https://github.com/facebook/prop-types)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Polished](https://github.com/styled-components/polished)
- [Styled Normalize](https://github.com/sergeysova/styled-normalize)
- [Axios](https://github.com/axios/axios)

## Dev Dependencies
ESLint is used to keep the code clean. A slightly modified version of Airbnb's eslint
config is being used. The changes can be viewed in `.eslintrc`
- [ESLint](https://github.com/eslint/eslint)
- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)

## IDE Used
VS Code - Version 1.24.0 (1.24.0)