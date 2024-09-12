"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../adminstyles/form.module.css";
import { Toaster, toast } from 'sonner'
import { DNA, InfinitySpin, Triangle } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import UploadCard from "./uploadCard";



interface Inputs  {
  title: string;
  body: string;
  

  tags: string[];
  categories: string;
  author: string;
 
 
  image: string[];
};




const FormInput = ( ) => {
  const [ImageFile, setImageFile] = useState<string[]>([]);
  const router = useRouter();
  const handleDelete = (deletefile: string) => {
    const newFiles = ImageFile.filter((file: string) => file!== deletefile);
    setImageFile(newFiles);
   
    // You could also delete the file from the server here.

  }
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
      
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          body: data.body,
          image: ImageFile,
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
          {...register("title", { required: 'Title is Required' })}
          placeholder="Title" />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <textarea
          {...register("body", { required: 'Body is Required' })}
          placeholder="Body"
           />
        {errors.body && <p>{errors.body.message}</p>}
      </div>
      <div>
        <input
          type="text"
          {...register("tags", { required: 'Tag is required' })}
          placeholder="Tags" />
        {errors.tags && <p>{errors.tags.message}</p>}
      </div>
      <div>
        <input
          type="text"
          {...register("categories", { required: 'Categories is required', validate: (value) => ['Trending', 'Top', 'Recent'].includes(value) || 'Invalid category' })}
          placeholder="Categories eg: Trending, Top, Recent" />
        {errors.categories && <p>{errors.categories.message}</p>}


      </div>
      <div>
        <input
          type="text"
          {...register("author", { required: 'author\'s name is required' })}
          placeholder="author" />
        {errors.author && <p>{errors.author.message}</p>}


      </div>

      <div>
        <input
          type="text"
          {...register("image", { required: 'Image Url is required' })}
          placeholder="ImageUrl" />
        {errors.image && <p>{errors.image.message}</p>}
      </div>
      <div>
        <UploadDropzone
          className="custom-class"
          endpoint="imageUploader"
          appearance={{
            button: "ut-ready:primarybtn ut-uploading:cursor-not-allowed ut-uploading: border-none rounded-r-none primarybtn bg-none after:primarybtn after:outline-none",
            label: {
              color: 'black'
            }

          }}
          onClientUploadComplete={async (res) => {
            // Do something with the response
            console.log("Files: ", res);

            setImageFile((prevState) => [...prevState, res[0].url]);
            alert("Upload Completed");
          } }
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          } } />
        {ImageFile.length > 0 &&
          <div className={styles.pictures}>
            {ImageFile.map((file: any, index: any) => (

              <UploadCard file={file} handleDelete={handleDelete} key={index} />

            ))}
          </div>}
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
                wrapperClass="" />
            </div>


          ) : (
            'Submit'
          )}
        </button>

      </div><Toaster richColors position="top-center" />
    </form>
  );
};

export default FormInput;
