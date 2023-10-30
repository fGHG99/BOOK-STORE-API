const express = require("express");

const app = express();

const port = 3333; //port yang digunakan
app.use(express.json());

const route = require("./routes/index");
app.use(route);
// const { Client } = require("pg");


// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "book_store_api",
//   password: "010807",
//   port: 8888, //port database
// });

// client
//   .connect()
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((error) => {
//     console.error("Connection failed", error);
//   });

// // app.get("/users", (req, res) => {
// //   //akses database
// //   //   client
// //   //     .connect()
// //   //     .then(() => {
// //   //       console.log("Connected to database");
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error("Connection failed", error);
// //   //     });
// //   //   res.send("Hello ini express");
// //   //ambil data
// //   //   let data;
// //   client.query("SELECT * FROM users;", (req, result) => {
// //     res.json(result.rows);
// //     // data = result.rows;
// //     // res.json({
// //     //   message: "Data berhasil diambil",
// //     //   status: 200,
// //     //   data: data,
// //   });
//   //   });
// //});
// app.post("/users", async (req, res) => {
//     let data = req.body;
    
//     const query = "INSERT INTO public.users(user_id, nama, alamat) VALUES ($1, $2, $3);";

//     client.query(query, [data.user_id, data.nama, data.alamat] , (err, result) => {
//         if(err) {
//             return res.status(500).json({
//                 error: "Error " + err
//             });
//         } else {
//             res.json({
//                 message: "Data berhasil ditambahkan",
//                 status: 200,
//                 data: data,
//             });
//         }
//     });
//     // res.json({
        
//     // });
// });

// app.get("/users/:id", async (req, res) => {
// //   let id = parseInt(req.params.id);

// //   try {
// //     const query = "SELECT * FROM users WHERE user_id = $1";
// //     const {rows} = await client.query(query, [id]);

// //     if (rows.length === 0) {
// //         return res
// //         .status(404)
// //         .json({ error: "User not found" });
// //     }else {
// //         res.json({
// //             data: rows[0],
// //         })
// //     }
// //   } catch (error) {
// //     return res.status(404).json({
// //         error: "Database nya lagi ngaco",
// //     });
// //   }

//   //res.send("Ini ID ke-" + id);
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
//  const data_users = [
//         { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
//         { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
//         { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
//         { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
//     ];

//     app.get('/',(req,res) =>{
//         res.send("Hello ini express")
//     })

// app.get("/users", (req, res) => {
//     //mendapatkan data dari database
//     const data = data_users;

//     //memberikan respon json data
//     let result = {
//         status: 200,
//         data: data,
//     };

//     res.json(result);
// });

// app.get("/users/:id", (req, res) => {
//     // get data dari parameter */
//     let id = parseInt(req.params.id);

//get data dari database
//  let result;
//         const user = data_users.find((user) => user.id === id);
//         if (user) {
//             result = {
//             status: 200,
//             data: user,
//             };
//         } else {
//             res.status(404).json({ error: "User not found" });
//         }
//         res.json(result);
//     });

//     app.get("/json", (req, res) => {
//         res.json({
//             message: "Hallo ini response json",
//         });
//     });
