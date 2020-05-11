const router = require("express").Router();
const logger = require("morgan");


router.use(logger());

router.get("/api/items", (req,res) => {
  const item = {
    id: 281904,
    product: "shirt",
    quantity: 1
  }
})

router.use("api/items", (req, res) => {
  res.json("Hi, from Routes Server files");
});

module.exports = router;

