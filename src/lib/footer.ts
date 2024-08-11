interface Inputs {
    mail: string;
    userId: string | undefined ;

}





export const addEmail = async ( {mail, userId }: Inputs ) =>{
    if (!userId) {
        console.error('ID is undefined');
        return;
    }

    try {
        const Xres = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            
              mail,
              userId
            })
        })
  
        const {userEmail} = await  Xres.json();
  
        if(userEmail){
          console.log('user already exists')
          return;
        }
        
        
       } catch (error) {
        console.log(error);
       }
}