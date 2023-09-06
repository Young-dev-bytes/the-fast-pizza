import { useEffect } from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  console.log("home");
  const username = useSelector((state) => state.user.username);
  useEffect(() => {
    console.log("home effect");
  }, []);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-5  text-xl font-semibold md:text-3xl">
        This is my first react app , The Fast Pizza.
        <br />
        Young, keeping learning ! 😉
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, Straight to you. This is a my project 🍕
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
