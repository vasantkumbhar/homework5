var appInstance = require("../app");
var { app, db, jwt } = appInstance.appConst;

// get all users
app.get("/api/users", (req, res) => {
  jwt.verify(req.headers.authorization, "secret", err => {
    if (err) {
      //If error send Forbidden (403)
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data
      res.status(200).send({
        success: "true",
        message: "Users retrieved successfully",
        data: db.users
      });
    }
  })
});
