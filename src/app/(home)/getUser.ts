interface Users {
    _id: String | undefined| null;
    firstName: String | undefined| null;
    lastName: String | undefined| null;
    email: String | undefined| null;
    image: String | undefined| null;
}



    export async function addUser({_id, firstName, lastName, email, image}: Users) {
        try {
          
    
            // If user does not exist, proceed with the POST request
            const response = await fetch('http://localhost:3000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id, firstName, lastName, email, image }),
            });
           
    
            const data = await response.json();
            return data;
        } catch (error) {
            
           
        }
    }

