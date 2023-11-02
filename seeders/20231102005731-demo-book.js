"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        judul: "Laut Bercerita",
        penerbit: "Leila S. Chudori",
        deskripsi: "Laut Bercerita, novel terbaru Leila S. Chudori",
        gambar: "Laut Bercerita.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "The Subtle Art of Not Giving a F*ck",
        penerbit: "Mark Manson",
        deskripsi: "Buku ini berisi tentang bagaimana seharusnya kita menyikapi kehidupan",
        gambar: "THE-SUBTLE-ART-OF-NOT-GIVIN.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
