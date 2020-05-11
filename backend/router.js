const router = require("express").Router();
const logger = require("morgan");


router.use(logger());

router.get("/api/items", (req,res) => {
  const CartItem = 
  {
    id: "281904",
    product: "shirt",
    quantity: 89023,
  }
})

router.use("/api/cart-items", (req, res) => {
  res.json("Hi, from Routes Server files");
});

module.exports = router;

