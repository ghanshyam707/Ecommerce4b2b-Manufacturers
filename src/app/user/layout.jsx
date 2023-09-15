import Navbar from "../Components/NavBar/NavBar";
import styles from './user.module.scss'
export default function userlayout({ children }) {
  return (
    <>
      <div className="d-flex">
        <div className= {`${styles['layout']} w-25`}>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
