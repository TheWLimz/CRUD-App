import Tani from '../Models/TaniModel.js';


export const getTaniData = async (req, res) => {
   try {
     const response = await Tani.findAll();
     return res.status(200).json(response);
   } catch (error) {
      console.log(error);
   }
};

export const createTaniData = async (req, res) => {
    const { namaTanaman, fungsi, harga } = req.body;
    try {
        const taniBaru = await Tani.create({
            namaTanaman : namaTanaman,
            fungsi : fungsi, 
            harga : harga
        });
        res.status(201).json(taniBaru);
    } catch (error) {
        console.log(error);
    }
};

export const getTaniDataById = async ( req, res ) => {
    const { id } = req.params;
    try {
        const response = await Tani.findByPk(id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const updateTaniData = async (req, res) => {
    const { id } = req.params; 
    const { namaTanaman, fungsi, harga } = req.body;
    try {
        await Tani.update(req.body, {
            values : {
            namaTanaman : namaTanaman,
            fungsi : fungsi,
            harga : harga
        },
          where : {
            id : id
          }   
        
    });
        res.status(201).json({message : 'Successfully updated a Tani'});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTaniData = async ( req, res ) => {
    const { id } = req.params; 
    try {
        await Tani.destroy({
            where : {
                id : id
            }
        });
        res.status(201).json({ message: 'Successfully deleted a Tani' })
    } catch (error) {
        
    }
}