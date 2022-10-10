import { Sequelize } from 'sequelize';
import db from '../db/database.js';

const { DataTypes } = Sequelize;

const Tani = db.define('tani', {
  
    namaTanaman : {
        type : DataTypes.STRING,
        allowNull : false
    },

    fungsi : {
        type : DataTypes.STRING,
        allowNull : false
    },

    harga : {
        type : DataTypes.INTEGER,
        allowNull : false
    }

});

export default Tani;

(async () => {
   await db.sync();
})();

