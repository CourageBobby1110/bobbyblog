"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../adminstyles/form.module.css";
import { Toaster, toast } from 'sonner'
import { DNA, InfinitySpin, Triangle } from "react-loader-spinner";
import { useRouter } from "next/navigation";



interface Inputs  {
  title: string;
  body: string;
  

  tags: string[];
  categories: string;
  author: string;
 
 
  image: string[];
};




const FormInput = ( ) => {
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
   
    try {
      
      await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          body: data.body,
          image: data.image,
          tags: data.tags,
          categories: data.categories,
          author: data.author,
          

          // Add other fields as needed, such as author or date.
          
        }),
        
      }
    
      
    
    
    );
    toast.success("Post has been added successfully")
    reset()
    
  

     
      
    } catch (error) {
      console.error(error);
      alert('Failed to add post')
      
    }
    
    // Handle the data here
   
  

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      <h2>Add a Post 🔥</h2>

      <div>
        <input
          type="text"
          {...register("title", { required:'Title is Required' })}
          placeholder="Title"
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <textarea
          {...register("body", { required: 'Body is Required'})}
          placeholder="Body"
          maxLength={1000}
        />
        {errors.body && <p>{errors.body.message}</p>}
      </div>
      <div>
        <input
          type="text"
          {...register("tags", { required: 'Tag is required'})}
          placeholder="Tags"
        />
        {errors.tags && <p>{errors.tags.message}</p>}
      </div>
     <div>
     <input
          type="text"
          {...register("categories", { required: 'Categories is required',  validate: (value) => ['Trending', 'Top', 'Recent'].includes(value) || 'Invalid category' })}
          placeholder="Categories eg: Trending, Top, Recent"
        />
        {errors.categories && <p>{errors.categories.message}</p>}


     </div>
     <div>
     <input
          type="text"
          {...register("author", { required: 'author\'s name is required' })}
          placeholder="author"
        />
        {errors.author && <p>{errors.author.message}</p>}


     </div>
      <div>
        <input
          type="text"
          {...register("image", { required: 'Image Url is required' })}
          placeholder="ImageUrl"
        />
        {errors.image && <p>{errors.image.message}</p>}
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

export default FormInput;
