const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateIdentity, validateUpdateIdentity, validateGetIdentity, validateDeleteIdentity } = require('../validators/identity');
const { createIdentity, updateIdentity, getIdentity, deleteIdentity } = require('../controllers/identity');

const router = express.Router();

/**
 * @swagger
 * /identities:
 *  post:
 *      summary: creates an identity
 *      tags: [Identity]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          profileId:
 *                              type: string
 *                              description: id of the identity
 *                              example: aa79f43e0dd8431188bfd614406ed61b
 *      responses:
 *          200:
 *              description: Identity is sucessfully created
 *              content:
 *                  application/json:
 *                      schema: '#/components/schemas/identity'
 *          401:
 *              description: Unauthorized to create identity
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errors/unauthorized'
 *          500:
 *              description: Internal Server Error
*/
router.post('/', validateAuth, validateCreateIdentity, createIdentity);

/**
 * @swagger
 * /identities/{id}:
 *  patch:
 *      summary: updates the identity
 *      tags: [Identity]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the identity
 *            schema:
 *              type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          profileId:
 *                              type: string
 *                              description: id of the profile
 *      responses:
 *          200:
 *              description: identity is updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/identity'
 *          404:
 *              description: Identity not found
 *          401:
 *              description: Unauthorized to update the identity
 */
router.patch('/:identityId', validateAuth, validateUpdateIdentity, updateIdentity);
router.delete('/:identityId', validateAuth, validateDeleteIdentity, deleteIdentity);

router.get('/:identityId', validateGetIdentity, getIdentity);

module.exports = router;