var appInstance = require("../app");
const express = require("express");
const router = express.Router();

var {app,db,jwt} = appInstance.appConst;
console.log('product js');

app.use('/', router);

router.get('/api/products', (req, res) => {
  console.log('get product');
  jwt.verify(req.headers.authorization, 'secret', (err) => {
    if(err){
      //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      console.log('get product else');
      res.status(200).send({
        success: 'true',
        message: 'Products retrieved successfully',
        data: db.product
      })
    }
  });
});

router.post("/api/products", (req, res) => {
  jwt.verify(req.headers.authorization, 'secret', (err) => {
    if(err){
      //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      if (!req.body.name || req.body.name === "") {
        return res.status(400).send({
          success: "false",
          message: "Name is required"
        });
      }
      const product = {
        id: db.product.length + 1,
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        options: req.body.options,
        reviews: req.body.reviews
      };
      db.product.push(product);
      res.status(200).send({
        success: "true",
        message: "Products Added successfully",
        data: product
      });
    }
  })
});

// get specific products
router.get("/api/products/:id", (req, res) => {
  jwt.verify(req.headers.authorization, 'secret', (err) => {
    if(err){
      //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      const id = req.params.id;
      db.product.map(product => {
        if (product.id === id) {
          res.status(200).send({
            success: "true",
            message: "Product retrieved successfully",
            data: product
          });
        }
      });
    }
  })
});

router.get("/api/products/:id/reviews", (req, res) => {
  jwt.verify(req.headers.authorization, 'secret', (err) => {
    if(err){
      //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      const id = req.params.id;
      db.product.map(product => {
        if (product.id === id) {
          res.status(200).send({
            success: "true",
            message: "Product review retrieved successfully",
            data: product.reviews
          });
        }
      });
    }
  })
});
