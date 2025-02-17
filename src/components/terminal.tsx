import Ascii from "./ascii";
import Header from "./header";
import Command from "./command-area";

const Terminal = () => {
  return (
    <div className="bg-black text-slate-300 w-screen min-h-screen overflow-x-hidden">
      <Ascii />
      <Header />
      <Command />
    </div>
  );
};

export default Terminal;
