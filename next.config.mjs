/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns:[
            {
                protocol :"https",
                hostname :
                    "lh3.googleusercontent.com",
                    
                
                // hostname: "lh3.googleusercontent.com",
               
              
            
            },

            {
                protocol: 'https',
                hostname: 'utfs.io'
              },
              {
                protocol: 'https',
                hostname: 'images.unsplash.com'
              },
              {
                protocol: "https",
                hostname: 'i02.appmifile.com'
              },

             
        
        ]
    }



};

export default nextConfig;
