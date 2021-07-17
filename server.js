const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const userdb = JSON.parse(fs.readFileSync('./server/db.json', 'UTF-8'));
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}
// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err,
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password,
    ) !== -1
  );
}
// const check = server.get('/users', (req, res) => {
//   console.log(res);
// });
server.use(jsonServer.bodyParser);
server.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body;
  // if (isAuthenticated({ email, password }) === false) {
  //   res.json();
  // }
  try {
    const response = await userdb.create({
      email,
      password,
    });
    console.log('User created');
  } catch (err) {
    console.log('Lỗi: ', err);
    return res.json({ status: 'error' });
  }
});
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});
server.use(router);
findindex = () => {
  const res = router.db.find('user');
  console.log(res.users)
}
server.listen(3000, () => {
  console.log('Run Auth API Server');
  console.log('jsonServer ', router.db.__wrapped__.users.join({name:'name',email:'cc',password:'???',id:'2'}));
});
