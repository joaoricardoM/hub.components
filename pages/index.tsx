import Modal from "./components/Modal";
import Loader from "./components/Loader";
const App = () => {
  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
      <Modal
        title="Ola Mundo"
        header="BLABLALBLBLBALBLBALBLBLBLBLBLALBABLAALBBLBL"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        footer="Button"
        visible={false}
        setVisible={function (): void {
          throw new Error("Function not implemented.");
        }}
        blur={false}
        preventClose={false}
        closeButton={false}
      />
      <Loader />
    </div>
  );
};

export default App;
