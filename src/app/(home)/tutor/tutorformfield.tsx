"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./student_form.module.css";
import { Toaster, toast } from 'sonner'
import { DNA, InfinitySpin, Triangle } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { Updatetutor } from "./gettutor";



interface Inputs  {
  
  whatsapp: string;
 
  description: string;
  

  courses: string[];
  department: string;
  price: number;
  role: string;
  departmnet: string;
 
 
  tutor_image: string;
};

interface PageProps{
  id : string;
}





const TutorForm = ({id}: PageProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
   
  
    formState: { errors, isSubmitting },
    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 4000)); 
    
    // Simulate a delay for server response
   
   await  Updatetutor({whatsapp: data.whatsapp, description: data.description, courses: data.courses, department: data.department, price: data.price, role: data.role,tutor_image:data.tutor_image,id: id } )
    toast.success("User updated successfully")
    router.push('/tutor')
   
    // Handle the data here
 
  

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      <h2>BECOME A TUTOR🔥</h2>
     

      <div>
        <input
          type="text"
          {...register("whatsapp", { required:'whatapp number is Required' })}
          placeholder="Whatsapp number"
        />
        {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
      </div>
      <div>
        <textarea
          {...register("description", { required: 'description is Required'})}
          placeholder="Description"
          maxLength={1000}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
     
     <div>
     <input
          type="text"
          {...register("courses", { required: 'Categories is required',   })}
          placeholder="Enter the name of Courses That you would be taking for one month"
        />
        {errors.courses && <p>{errors.courses.message}</p>}


     </div>
     <div>
     <input
          type="text"
          {...register("role", { required: 'Your role is required', validate: (value) => ['tutor'].includes(value) || 'Invalid category' })}
          placeholder={ `Enter your role, input ${"tutor"}`}
        />
        {errors.courses && <p>{errors.courses.message}</p>}


     </div>
     <div>
     <input
          type="text"
          {...register("department", { required: 'Your department is required',  })}
          placeholder='Enter Your department'
        />
        {errors.courses && <p>{errors.courses.message}</p>}


     </div>











     <div>
     <input
          type="text"
          {...register("price", { required: 'Price Is required' })}
          placeholder="Enter your Total price for one month"
        />
        {errors.price && <p>{errors.price.message}</p>}


     </div>
      

      <div>


      <button disabled={isSubmitting} type="submit" className={styles.btn}>
          {isSubmitting ? (
            
           <div className={styles.loader}>
             {/* <InfinitySpin
            
           
            
            width="100"
            color="#FFFFFF"
           
            
           
            /> */}

<Triangle
  visible={true}
  height="50"
  width="80"
  color="#FFFFFF"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
           </div>
              
            
          ) : (
            'Submit'
          )}
        </button>
    
      </div>
      <Toaster richColors position="top-center" /> 
    </form>
  );
};

export default TutorForm;
