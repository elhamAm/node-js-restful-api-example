const sup= require("supertest");
//const app = require("../server/routers/events-router");
const app = require("../server/server");
var eventsData = require('../server/data/events-data');

var events = eventsData;
//console.log("here");
//console.log(events);

it('gets the test endpoint', async done => {
  const response = await sup(app).get('/events');
  //console.log(response.body);
  //console.log(events)
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(events)
  done();
});

console.log("her");

// describe("Test the root path", () => {
//   test("It should response the GET method", done => {
//     request(app)
//       .post("/")
//       .then(response => {
//
//         expect(response.statusCode).toBe(201);
// 	   console.log(response);
//         done();
//
//       });
//   });
// });
