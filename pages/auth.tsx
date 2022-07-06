import { auth } from '../firebase/firebase-config';
import { signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";


export default function Auth() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup( auth, provider )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup( auth, provider )
    .then((result) => {
      console.log(result);
      })
    .catch((error) => {
        console.log(error);
    })
  }
  
  const logOut = () => {
    signOut(auth).then(() => {
      console.log('logout');
    }
    ).catch((error) => {
      console.log(error);
    }
    )

  }

  onAuthStateChanged(auth, user=>{
    console.log(`You are logged in as`, user);});
  


  return (
    <div className="h-screen text-black bg-white">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/*Page content here*/}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
            {/*Sidebar content here*/}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}