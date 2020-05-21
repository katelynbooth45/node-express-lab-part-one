const logger = require("morgan");
const express = require("express");
const routes = express.Router();
const pool = require("../connection");

router.use(logger());


function getTable(req, res) {
  pool.query("select * from shopping_cart order by id").then(result => {
    res.json(result.rows);
  });
}
routes.get("/cart-items", function(req, res) {
  getTable(req, res);
});

router.use("/api/cart-items", (req, res) => {
  res.json("Hi, from Routes Server files");
});

router.get("/cart-items", (req, res) => {
  const {maxPrice, prefix, pageSize} = req.query;
  let items;
  let cached = {};
  if (maxPrice) {
    items = cart.item.filter((x) => x.maxPrice <= Number(maxPrice));
    cached["maxPrice"] = items.sort((a, b) => a - b);
  }
  if (pageSize) {
    items = cached['maxPrice'] 
    ? cache['maxPrice'].slice(0, Number(page.pageSize))
    : CartItem.slice(0, Number(pageSize));
    cached["pageSize"] = item.sort((a, b) => a - b);
  }
  if (prefix) {
    // ? cache['maxPrice'].slice(0, Number(page.pageSize))
    // : CartItem.slice(0, Number(pageSize));
    items = CartItem.filter((x) =>x.product.startsWith(prefix));
  }
  console.log("Cached Items", cached);
  res.json(items);
});

router.get('/cart-items', (req, res) => {
  const item = CartItem.filter((x) => x.id === Number(req.param.id))
  if (item.length >= 1) {
    res.status(200);
    res.json(item);
  } else {
    res.status(404);
    res.json({
      message: `ID: ${req.params.id} not found`
    });
  } 
});

// router.post('cart-items', (req, res) => {
//   CartItem.push(req.body);
//   res.status(201)
//   res.json(CartItem);
// });

routes.post("/cart-items", function(req, res) {
  pool.query("insert into shopping_cart (name) values($1::text)", [req.body.name]).then(() => {
    getTable(req, res);
  });
});

// router.put('/cart-items:id', (req, res) => {
//   const idx = CartItem.indexOf(req.param.id);
//   CartItem.splice(idx, 1, req.body);
//   res.status(200);
//   res.json(CartItem);
// })

routes.put("/cart-items:id", function(req, res) {
  pool.query("update Animals set name=$1::text where id=$2::int",
  [req.body.name, req.params.id]).then(() => {
    getTable(req, res);
  });
});

// router.delete('/cart-items:id', (req, res) => {
//   const idx = CartItem.indexOf(req.param.id);
//   CartItem.splice(idx, 1);
//   res.status(200);
//   res.json(CartItem);
// })

routes.delete("/cart-items/:id", function(req, res) {
  pool.query("delete from shopping-cart where id=$1::int", [req.params.id]).then(() => {
    getTable(req, res);
  });
});

module.exports = router;