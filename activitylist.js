
 const dbc = require('/home/vvdn/Desktop/hapi-pg/core/db');
 var db=dbc.db
 //export default {
 
      var activity  = ({
  create: async( {activity}) => {
     
    return db('todolist').insert( { activity}).returning('*')
  },


    find : async({ activitynum}) => {
      console.log(activitynum)
    return db('todolist').select('*').where({activitynum}).first()
  },

  findall : async() => {
  
  return db('todolist').select('*')
},

   edit : async({activity , activitynum}) => {
       
    return db('todolist').where({activitynum}).update({activity}).returning('activity')
  },

   del : async({ activitynum}) => {
    return db('todolist').where({activitynum}).del('*').returning('*')
  }

})
//}
module.exports.activity=activity;