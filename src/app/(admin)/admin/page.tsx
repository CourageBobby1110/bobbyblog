import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import styles from '../adminstyles/admin.module.css'
import { redirect } from 'next/navigation';

const Admin = async() => {
  const {isAuthenticated, getPermission} = getKindeServerSession();
  const isLoggedIn = await  isAuthenticated();
  if (!isLoggedIn) {
    redirect('/api/auth/login')
  }
  const requiredPermission = await getPermission('delete:question')
  if(!requiredPermission?.isGranted) {
    redirect('/')
  }
  return (
    <div className={styles.dashboard_container}>
        <h1>This is my dashboard</h1>





    </div>
  )
}

export default Admin