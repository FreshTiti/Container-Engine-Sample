const should = require("should");
const request = require("request");
const portfinder = require("portfinder");

describe("Start server", function() {
  let port;
  before(function(done) {
    portfinder.getPort(function(err, portReply) {
      should.not.exist(err);
      port = portReply;
      done();
    });
  });

  it('should start server and response to requests with the content "hello world"', function(
    done
  ) {
    this.slow("1s");
    done();
  });
});
