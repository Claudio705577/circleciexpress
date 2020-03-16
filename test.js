const assert = require("assert");
const httpMocks = require("node-mocks-http");
const exampleRouteHandler = require("./example-router");
describe("Example Test 2", () => {
  it("should return 'Goodbye Earthling2!' for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling3!";
    assert(actualResponseBody, expectedResponseBody);
  });
});