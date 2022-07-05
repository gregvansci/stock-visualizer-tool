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
    <div className="flex flex-col items-center justify-center h-screen text-black bg-white">
      <h1 className="">Auth</h1>
      <button className="btn" onClick={() => signInWithGoogle()}>Sign in with Google</button>
      <button className="btn" onClick={() => signInWithGithub()}>Sign in with Github</button>
      <button className="btn" onClick={() => logOut()}>Sign Out</button>

    </div>
  );
}