const jwt = require('jsonwebtoken');

const secretKey = jwt.sign({ data: 'secret-key' }, 'yWZoTKDxJ3ICOQu4spPipaMl5SocIKbacMMkoXsO', { expiresIn: '365d' });
console.log(secretKey);