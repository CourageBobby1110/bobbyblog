"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/app/(home)/tutor/student_form.module.css"
import { Toaster, toast } from 'sonner'
import { DNA, InfinitySpin, Triangle } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { Updatetutor } from "./gettadmin";



interface Inputs  {
  
 isVerified: string;
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
   
   await  Updatetutor({id: id, isVerified: data.isVerified } )
    toast.success("User updated successfully")
   
   
    // Handle the data here
 
  

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      <h2>Verify User</h2>
     

      <div>
        <input
          type="text"
          {...register("isVerified", { required:'Isverified is Required',   validate: value => value === "true"|| value === "false" || "Value must be true or false" }, )}
          placeholder="Verify User eg: True/False"
        />
        {errors.isVerified && <p>{errors.isVerified.message}</p>}
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
