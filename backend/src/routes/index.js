const express = require('express');
const profileRouter = require('./profile');
const identityRouter = require('./identity');

const { register, login } = require('../controllers/user');
const { validateLogin, validateRegister } = require('../validators/user');
const { validateAuth } = require('../validators/auth');

const router = express.Router();


/**
 * @swagger
 * /register:
 *  post:
 *      summary: registers an user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              example: twinkle
 *                          email:
 *                              type: string
 *                              example: twinkle@gmail.com
 *                          password:
 *                              type: string
 *                              example: twinkle331
 *      responses:
 *          '200':
 *              description: >
 *                  Successfully authenticated.
 *                  The jwt token is returned in a cookie named `pahachaan`. You need to include this cookie in subsequent requests.
 *              headers:
 *                  Set-Cookie:
 *                      schema:
 *                          type: string
*/
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/authtest', validateAuth, (req, res) => res.send(req.username));

router.use('/profiles', profileRouter);
router.use('/identities', identityRouter);

module.exports = router;
