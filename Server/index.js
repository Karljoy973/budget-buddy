const app = require('./app/index');

const PORT = 3000; 

app.listen(PORT, () => console.log(
    `Server started on port ${PORT}
whatch Server on localhost:${PORT}`
));