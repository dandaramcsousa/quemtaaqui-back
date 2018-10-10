const app = require('../server.js');
const request = require('supertest');

//user test
describe("POST /api/users", function(){
  let user = {
    name: "Dandara Sousa",
    email: "dandaramcsousa@gmail.com",
    id: "114110434",
    password: "help"
  };
  if("pass in time", function(done){
    this.timeout(7000);
    request(app)
    .post("/api/users")
    .send(user)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(err =>{
      if(err){
        return done(err);
      }
      done()
    });
  });
});
//student test

//teacher test
