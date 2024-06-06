export const Nav = [


    {
        id: 1,
        name: 'Home', 
        path: '/'
    },
    
        {
        id: 2,
        name: 'contacts', 
        path: '/contacts'
      },

      {
        id: 4,
        name: 'blog',
        path: '/blog'

      },
        
        


        {
        id: 3,
        name: 'admin', 
        path: '/admin',
        requiresAuth: true,
        requiredPermissions: ["delete:question"]

    }





]