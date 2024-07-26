'use client'

import {useForm, SubmitHandler} from 'react-hook-form'	
import styles from '../adminstyles/form.module.css'

type Inputs ={
   title: string,
   body: string,
   Date: string,
   Image: string[],
   tags: string[],
   categories: string[]
   ImageUrl: string


}


const FormInput = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
const onSubmit: SubmitHandler<Inputs> = (data) =>{
  console.log(data)
}
  return (

    
        
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >

            <h2>Add a Post 🔥</h2>



<input type="text" {...register('tags', { required: true })} placeholder='Title' />
<textarea {...register('body', {required: true})} placeholder='Body' />
<input type="text" {...register('tags', {required: true})} placeholder='tags' />
<input type="text" {...register('ImageUrl',{required: true})}  placeholder='ImageUrl' />

<select multiple {...register('categories',{required: true})} ></select>

<input type="submit" />
{errors.tags && <p>Tags are required</p>}
{errors.categories && <p>Categories are required</p>}
{errors.title && <p>Title is required</p>}

{errors.body && <p>Body is required</p>}

{errors.ImageUrl && <p>ImageUrl is required</p>}






</form>


      
      

        
   
  )
}

export default FormInput