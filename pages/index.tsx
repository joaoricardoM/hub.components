import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Button from "./components/Button";
import TextField from "./components/TextField";
import ProgressBar from "./components/Loader";

const App = () => {
  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
      <br /> <br />
      <Modal />
      <br />
      <Button />
      <br />
      <div className="bg-paleWhite">
        <h1 className="text-center text-3xl">React Tailwind Components</h1>

        <div className="w-3/4 mx-auto grid grid-cols-2 gap-4 my-6">
          <div className="bg-white p-4 rounded-md">
            <h3>Input Component</h3>
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="you@youremail.com"
              containerclassname="mt-4"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3>Progress Bar</h3>
            <div className="w-96 mt-4">
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
