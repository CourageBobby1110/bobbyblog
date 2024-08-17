interface Inputs{
    role: string;
    whatsapp: string;
    description: string;
    tutor_image: string;
    courses: string[];
    department: string;
    price: number;
    id: string;
    isVerified: string;
}

export const Updatetutor = async ( {whatsapp, role, description, id, tutor_image, courses, department, price, isVerified}: Inputs ) =>{
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
              role,
              whatsapp,
              description,
              tutor_image,
              courses,
              department,
              price,
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