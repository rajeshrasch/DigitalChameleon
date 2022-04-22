# Job Portal DigitalChameleon

Job Portal DigitalChameleon
- MERN based Saas 
- Applicant/Recrutier roles
- JWT based verification
- Upload resume, picture etc and can edit profile on fly
- Recruiter can CURD on jobs
- Applicant can serach jobs and filter them
- Connects to online MongoDB cluster


# Directory structure of the web app is as follows:

```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

## Instructions for initializing web app:

- Ensure build tools are installed, https://github.com/nodejs/node-gyp#on-windows 
- Start MongoDB server: `sudo service mongod start`
- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.
- DataBase is auto configured to connect to MongoDB online cluster

## Dependencies:

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid

## Editing Pages:

Edit `frontend/src/components/Home.js` to add your content to the Home page. The default contents include:

```js
class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
```

## Author
Rajesh Surapaneni
Email: emailforrajesh@gmail.com
http://rajeshsurapaneni.herokuapp.com

## Note
Hard reload if the page does not load for the first time