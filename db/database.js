import { Sequelize } from 'sequelize';

const db = new Sequelize('tani_db','root', '' ,{
   host :'localhost',
   dialect : 'mysql'
});

export default db;

(async () => {
   try {
      await db.authenticate();
      console.log('Succesfully connected to Database');
   } catch (error) {
      console.log('There was an error ');
   }
})();