const router = require('express').Router();

router.get("/users", (req, res) => {
    res.json({
        message: "Ini respon router",
    });
});

module.exports = router;