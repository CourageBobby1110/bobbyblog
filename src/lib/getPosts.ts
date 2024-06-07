



export const getPosts = async () => {
    try {
        const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
          cache: 'no-store'
        });
        return res.json();
        
      } catch (error) {
        console.log(error);
        return[];
        
      }
     
    }
