const { Book } = require('../models');



const findAllBooks = async (req, res) => {
    //ambil data dari db
    
    const data = await Book.findAll();
    
    //tampilkan data
    res.json({
        message: "Ini adalah data buku",
        data : data,
    });
};

const detailBook = async (req, res) => {
    let id = req.body.id;
    //ambil data dari db
    const data = await Book.findByPk(id);
    

    //tampilkan data
    res.json({
        message: "Ini adalah data buku",
        data : data,
    });
};

const tambahBuku = async (req, res) => {
    try {
        const data = req.body;
        const result = await Book.create(data);

        res.json({
            result: result,
        });
    } catch (error) {
        res.json({
            message: "Gagal menambahkan data" + error,
        });
    }
};

const hapusBuku = async (req, res) => {
    try {
        const data = req.body.id;
        await Book.destroy({
            where: {
                id: data,
            },
        });

        res.json({
            message: "Data berhasil dihapus",
        });
    } catch (error) {
        res.json({
            message: "Data gagal dihapus karena " + error,
        });
    }
};

const updateBuku = async (req, res) => {
    try {
        const id = req.body.id
        const newData = req.body;
        const result = await Book.update(newData, {
            where: {
                id: id,
            },
        }
        )

        res.json({
            message: "Data berhasil ditambahkan",
        });
    } catch (error) {
        res.json({
            message: "Data gagal ditambahkan karena " + error,
        });
    }
};

module.exports = { findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku};