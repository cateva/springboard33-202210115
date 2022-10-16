process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");



describe("POST /", function() {
  test("Return developer information", async function() {
    const resp = await request(app)
      .post(``)
      .send({
        "developers": ["joelburton", "elie"]
      });
    
    expect(resp.body.length).toEqual(2);
    expect(resp.statusCode).toBe(200);

  });



/** 

describe("POST /", function() {
  test("Check for return array length equals 2", async function() {
    const resp = await request(app)
      .post(``)
      .send({
        "developers": ["joelburton", "elie"]
      });
    expect(resp.body.length).toEqual(2);
  
  });

  test("Check for status code to be 200", async function() {
    const resp = await request(app)
      .post(``)
      .send({
        "developers": ["joelburton", "elie"]
      });
    expect(resp.statusCode).toBe(200);
        
  });



  test("Check for invalid input", async function() {
    const resp = await request(app)
      .post(``)
      .send({
      });
    
    expect(resp.statusCode).toBe(400);
  });

  */
}); 

