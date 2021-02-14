const app = require('./app');
const  Port = 5000 || process.env.PORT;

app.listen(Port, () => {
  console.log(`Server running on Port ${Port}`);
});