interface Inputs{
    
    id: string;
    isVerified: string;
}

export const Updatetutor = async ( { isVerified, id}: Inputs ) =>{
    if (!id) {
        console.error('ID is undefined');
        return;
    }

    try {
        const Xres = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            
              isVerified,
            })
        })
  
        const {user} = await  Xres.json();
  
        if(user){
          console.log('user already exists')
          return;
        }
        
        
       } catch (error) {
        console.log(error);
       }
}