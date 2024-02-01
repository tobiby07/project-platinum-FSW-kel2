const bcrypt = require("bcrypt");
const { knex } = require("../dbConnecting");

const addUsers = async(req,res)=>{
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

        await knex.table("users").insert({
            username: req.body.username,
            password: hashedPassword,
            nama: req.body.nama,
            email: req.body.email
          });
          res.json("berhasil input data");

    } catch (err) {
        console.log(err);
        res.status(500).json("An error occurred while registering the user.");
    }
}



module.exports = {
    addUsers,

}