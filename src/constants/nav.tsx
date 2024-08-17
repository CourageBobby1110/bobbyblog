



export const Nav = [


    {
        id: 1,
        name: 'Home', 
        path: '/'
    },
    
        {
        id: 5,
        name: 'contacts', 
        path: '/contacts'
      },
        {
        id: 6,
        name: 'About Us', 
        path: '/aboutus'
      },
       



     
        
        


        {
        id: 4,
        name: 'admin', 
        path: '/admin',
        requiresAuth: true,
        requiredPermissions: ["delete:question"]

    },

        {
        id: 2,
        name: 'search', 
        path: '/search',
        requiresAuth: true,
  

    },
   





 ]