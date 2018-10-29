const app = require('express')();

// zoo collection
const zoo = [];

// animal model
const animal = {
  id: 0
  name: "",
  type: ""
};

// routes
app.get('/', (req, res) => {

});

// start app
app.listen('5000', () => {
  console.log('App started on Port 5000');
});
