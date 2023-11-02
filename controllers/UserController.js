const { User } = require('../models');



const findAllUsers = async (req, res) => {
    //ambil data dari db
    
    const data = await User.findAll();
    
    //tampilkan data
    res.json({
        message: "Ini adalah data user",
        data : data,
    });
};

const detailUser = async (req, res) => {
    let id = req.body.id;
    //ambil data dari db
    const data = await User.findByPk(id);
    

    //tampilkan data
    res.json({
        message: "Ini adalah data User by id",
        data : data,
    });
};

const tambahUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await User.create(data);

        res.json({
            result: result,
        });
    } catch (error) {
        res.json({
            message: "Gagal menambahkan data" + error,
        });
    }
};

const hapusUser = async (req, res) => {
    try {
        const data = req.body.id;
        await User.destroy({
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

const updateUser = async (req, res) => {
    try {
        const id = req.body.id
        const newData = req.body;
        const result = await User.update(newData, {
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

module.exports = { findAllUsers, detailUser, tambahUser, hapusUser, updateUser};