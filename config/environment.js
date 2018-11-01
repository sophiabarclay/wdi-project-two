const port = process.envPORT || 4000;
const dbUri = process.env.MONGODB_URI ||
'mongodb://localhost/wdi-project-two';

module.exports = { port, dbUri };
