const router = require('express').Router();
const {findAllBooks,
        detailBook,
        tambahBuku,
        hapusBuku,
        updateBuku,
        } = require('../controllers/BookController');

const {
        findAllUsers,
        detailUser,
        tambahUser,
hapusUser,
updateUser
                } = require('../controllers/UserController');

        


//endpoint book
router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", hapusBuku);
router.put("/book", updateBuku);

//endpoint user
router.get("/users", findAllUsers);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", hapusUser);
router.put("/user", updateUser);

module.exports = router;