const { knex } = require("../dbConnecting");


//  add product
const kodeBarang = (category) => {
    if(category === "FASHION"){
        return "F12";
    } else if (category === "RUMAH TANGGA"){
        return "RT9";
    } else if (category === "SPORT"){
        return "S89";
    } else if (category === "HOBBY"){
        return "H65";
    } else if (category === "BEAUTY"){
        return "B35";
    }
};

const addProduct = async(req,res)=>{
    try {
        const lastProduct = await knex('product')
            .select(knex.raw(`split_part("kodeProduct", '-', 2)::int as urutan`))
            .orderBy('urutan', 'desc')
            .limit(1);

        
        let productCount = 1;
        if (lastProduct.length > 0) {
            productCount = parseInt(lastProduct[0].urutan) + 1;
        }
        
        const code = kodeBarang(req.body.categoryProduct) + '-' + productCount.toString().padStart(3, '0');

        await knex.table('product').insert({
            kodeProduct: code,
            namaProduct: req.body.namaProduct,
            categoryProduct: req.body.categoryProduct,
            hargaProduct: req.body.hargaProduct,
            picture1: req.body.picture1,
            picture2: req.body.picture2,
            picture3: req.body.picture3,
            picture4: req.body.picture4,
            desctription: req.body.desctription
        });
        
        res.json("berhasil input data");
    } catch (err) {
        console.log(err);
        res.status(500).json("An error occurred while adding the product.");
    }
};


//  delete product
const deleteProduct = async (req,res)=>{
    try {
        const code= req.params.kodeProduct
        const product = await knex.table('product').where({ kodeProduct: code}).first()
        if(!product){
            return res.status(404).send("Product not found");
        }
        await knex.table('product').where({kodeProduct: code}).del()
        res.json("berhasil delete barang")
    } catch (err) {
        console.log(err);
        res.status(500).json("An error occurred while adding the product.");
    }
}


module.exports = { addProduct,deleteProduct };
