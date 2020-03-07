const sup= require("supertest");
//const app = require("../server/routers/events-router");
const app = require("../server/server");
var eventsData = require('../server/data/events-data');

var events = eventsData;
//console.log("here");
//console.log(events);
describe("tests start from here", () => {
	test('get is working well', async done => {
	  const response = await sup(app).get('/events');
	  //console.log(response.body);
	  //console.log(events)
	  expect(response.status).toBe(200);
	  expect(response.body).toStrictEqual(events)
	  done();
	});

	test('get one id works', async done => {
	  const response = await sup(app).get('/events/1');
	  //console.log(events)
	  //expect(response.status).toBe(200);
	  //console.log(events[0])
	  expect(response.body).toStrictEqual(events[0])
	  done();
	});

	test('post is woking well', () => {

	  const event = {
        "topics": "",
        "thumbnail": "/img/tr-3.jpeg",
        "url": "index.html",
        "overrideURL": "",
        "linkType": "",
        "title": "Created by Postman",
        "summary": "Lorem ipsum dolor sit amet",
	   "id": '13'
    		}
	  //const response = await sup(app).post('/events');

		return sup(app)
	     .post("/events")
	     .send(event)
		.set('Accept', 'application/json')
	     .then((response) => {
		 //console.log(response.body)
	      expect(response.body).toStrictEqual(event);
		 expect(response.statusCode).toBe(201);
	     });
	});

	test('delete is woking well', () => {
	  //const response = await sup(app).post('/events');
	  	ans = events[3]
		return sup(app)
		.delete("/events/4")
		.then((response) => {
		 //console.log(response.body)
		 //console.log(ans)
		 expect(response.body).toStrictEqual(ans);
		 expect(response.statusCode).toBe(200);
		});
	});

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
