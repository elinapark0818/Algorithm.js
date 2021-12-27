function asynchronousRequest(args, callback) {
  if (!args) {
    return callback(new Error("삐빅삐빅! 에러발생! 에러를 던진다!"));
  } else {
    return setTimeout(
      () =>
        callback(null, { body: args + " " + Math.floor(Math.random() * 10) }),
      500
    );
  }
}

function callbackHell() {
  asynchronousRequest("First", function first(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(response.body);
    asynchronousRequest("Second", function second(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(response.body);

      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error);
          return;
        }
        console.log(response.body);
      });
    });
  });
}

callbackHell();
