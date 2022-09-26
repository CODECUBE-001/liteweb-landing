import { BsChatDots } from "react-icons/bs";
import {
  FaAngleRight,
  FaCheck,
  FaCheckDouble,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

const Chatbot = () => {
  return (
    <div className="fixed bottom-[50px] right-0 m-6 z-10" data-scroll-sticky>
      <div className="chat-container shadow-md rounded-md p-5 flex flex-col justify-between translate-y-[20px] w-[300px] h-[400px] bg-gray-900">
        <div className="chat-header">
          <div className="bg-black/20 relative flex items-center p-2 gap-[5px] rounded-md h-[50px]">
            <div className="avatar bg-red-500 w-[30px] h-[30px] rounded-full ring-3 ring-gray-900"></div>
            <div className="">
              <h3 className="font-[500]">CodeCube BOT</h3>
              <p className="text-xs">
                <span className="status"></span>Online
              </p>
            </div>
          </div>
        </div>

        <div className="message-box py-2 flex-1  overflow-auto">
          <div className="receive bg-primary text-gray-900 rounded-b-full justify-between w-[200px] text-sm rounded-tr-full p-3 flex gap-1">
            <span>Hey, need my help : ) ?</span>
            <span className="text-xs self-end">{/* <FaSpinner /> */}</span>
          </div>
          {/*  */}
          <div className="sent m-2 bg-gray-800 ml-auto rounded-bl-full justify-between w-[200px] text-sm rounded-t-full p-3 flex gap-1">
            <span>Hey</span>
            <span className="text-xs self-end opacity-50">
              <FaCheck />
            </span>
          </div>
        </div>

        <div className="actions relative flex items-center gap-[10px]">
          <div>
            {" "}
            <FaAngleRight />
          </div>
          <input
            type="text"
            placeholder="Write Something..."
            className="py-2  outline-0 px-3 bg-transparent text-sm w-[180px] rounded-full"
          />
          <button className="w-[40px] h-[40px] text-sm flex-shrink-0 flex-center bg-primary rounded-full">
            <FaPaperPlane />
          </button>
        </div>
      </div>
      <div className="icon  w-[60px] ml-auto h-[60px] cursor-pointer flex-center rounded-full bg-gray-900 shadow-sm">
        <BsChatDots />
      </div>
    </div>
  );
};

export default Chatbot;
