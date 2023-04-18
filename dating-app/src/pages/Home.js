import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [ isSignUp, setIsSignUp ] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  };
  return (
    <div className="overlay">
      <NavBar
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsSignUp={setIsSignUp}
        isSignUp={isSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Free Date </h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />}
      </div>
    </div>
  );
};

export default Home;
