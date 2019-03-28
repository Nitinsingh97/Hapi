const activities= require('/home/vvdn/Desktop/hapi-pg/activitylist');
const activitylist=activities.activity
const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
    port: 8888,
    host: '127.0.0.1'
  }); 


module.exports.server=server
   
  server.route({
      method: 'POST',
      path: '/save',
      config: {
        auth: false,
        validate: {
          payload: {
            activity : Joi.string().required().description('activity')
            
          }
        },
        description: 'save data'
      },
      handler: async(request, handler) =>  {
        try {
  
          
          let activity = await request.payload.activity  
          
          let todolist = await  activitylist.create({activity : activity}) 
        
          return handler.response({
            statusCode: 200,
            status: true,
            error: "",
            message: "Activities saved",
            data: todolist
          })
  
        } 
        catch (e) {
               console.log(e)
            return handler.response({
              statusCode:405,
              status:false,
              error: e,
              message:"",
              data:null
            })
  
          }
        }
      });
  
  
  
  
  
  
  server.route({
      method: 'GET',
      path: '/list/{activitynum}',
      config: {
        auth: false,
        description: 'show data'
      },
      handler: async(request, handler) =>  {
        try {
  
          let activitynum =await encodeURIComponent(request.params.activitynum)
         let showlist = await activitylist.find({ activitynum : activitynum})
         return handler.response(showlist)  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: e,
              message:"",
              data:null
            })
  
          }}
        });
  
  
        server.route({
          method: 'GET',
          path: '/list',
          config: {
            auth: false,
            description: 'show all data'
          },
          handler:async (request, handler) =>  {
            try {
             
             let showlist = await activitylist.findall()
            
            return handler.response(showlist)
            } catch (e) {
              
                return handler.response({
                  statusCode:405,
                  status:false,
                  error: e,
                  message:"",
                  data:null
                })
      
              }}
            });
      
      
  server.route({
      method: 'PUT',
      path: '/edit/{activitynum}',
      config: {
        auth: false,
        validate: {
          payload: {
          
             activity : Joi.string().required().description('activity')
            
          }
        },
        description: 'edit data'
      },
      handler: async(request, handler)  => {
        try {
         
          let activitynum =await  encodeURIComponent(request.params.activitynum)
          let activity = await request.payload.activity
         
          let todolist = await activitylist.edit({activity : activity, activitynum : activitynum}) 
  
          return handler.response({
            statusCode: 200,
            status: true,
            error: "",
            message: "Edit saved",
            data: todolist
          })
  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: 'ERROR FOUND!',
              message:"",
              data:null
            })
  
          }}
        });
  
  
  server.route({
      method: 'DELETE',
      path: '/del/{activitynum}',
      config: {
        auth: false,
        
        description: 'delete data'
      },
      handler: async(request, handler)  => {
        try {
  
          let activitynum = await encodeURIComponent(request.params.activitynum)
          
                 
          let todolist = await activitylist.del({ activitynum : activitynum}) 
  
          return handler.response({
            statusCode: 200,
            status: true,
            error: "",
            message: "Sucessfully Deleted!",
            data: null
          })
  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: 'ERROR FOUND!',
              message:"",
              data:null
            })
  
          }
  
      }
    });
   
