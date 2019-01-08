'use strict';

const routes = require('./routes');
const PORT = 3002;

routes.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}` );
});