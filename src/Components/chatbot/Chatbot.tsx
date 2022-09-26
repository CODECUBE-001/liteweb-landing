import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import {
  FaAngleRight,
  FaCheck,
  FaCheckDouble,
  FaPaperPlane,
  FaSpinner,
  FaTimes,
} from "react-icons/fa";

const Chatbot = () => {
  //   {
  //       id: "gedt2336g-fbdfh5568-ax34kn218h",
  //       type: "send",
  //       msg: "Hello There !!!",
  //       status: "sent", // sent sending failed
  //     }
  //     {
  //       id: "e3d436d-1af23h55a-za3swdknd8ar",
  //       type: "receive",
  //       msg: "How may i help you ?",
  //     }
  //     {
  //       id: "gedt2336g-fbdfh5568-ax34kn218h",
  //       type: "send",
  //       msg: "Hello !!!",
  //       status: "sending", // sent sending failed
  //     }
  //     {
  //       id: "gedt2336g-fbdfh5568-ax34kn218h",
  //       type: "send",
  //       msg: "HEY !!!",
  //       status: "failed", // sent sending failed
  //     }

  interface messageInterface {
    id: string;
    type: string;
    msg: string;
    status?: string;
  }

  const [messages, setMessages] = useState<Array<messageInterface>>([]);
  const [isOpen, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const SubmitHandler = () => {
    console.log(msg);
    setMessages([
      ...messages,
      {
        id: "34",
        type: "send",
        msg,
        status: "sending",
      },
    ]);
    setMsg("");
  };

  return (
    <div className="fixed bottom-[50px] right-0 m-6 z-10" data-scroll-sticky>
      {isOpen && (
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
            {messages.map((message, i) => (
              <div
                key={i}
                className={`${
                  message.type === "send"
                    ? "sent m-2 rounded-bl-full rounded-t-full bg-gray-800 ml-auto"
                    : "receive bg-primary rounded-b-full rounded-tr-full"
                } "flex justify-between w-[200px] text-sm p-3 flex gap-1"`}
              >
                <span>{message.msg}</span>
                <span className="text-xs self-end opacity-50">
                  {message.status == "sent" ? (
                    <FaCheck />
                  ) : message.status == "sending" ? (
                    <FaSpinner className="spin" />
                  ) : message.status == "failed" ? (
                    <FaTimes />
                  ) : null}
                </span>
              </div>
            ))}
          </div>

          {/* <div className="message-box py-2 flex-1  overflow-auto">
              <div className="receive bg-primary text-gray-900 rounded-b-full justify-between w-[200px] text-sm rounded-tr-full p-3 flex gap-1">
                <span>Hey, need my help : ) ?</span>
            
              </div>
             

              <div className="sent m-2 bg-gray-800 ml-auto rounded-bl-full justify-between w-[200px] text-sm rounded-t-full p-3 flex gap-1">
                <span>Hey</span>
                <span className="text-xs self-end opacity-50">
                  <FaCheck />
                </span> 
              </div>
            </div>
              */}

          <div className="actions relative flex items-center gap-[10px]">
            <div>
              {" "}
              <FaAngleRight />
            </div>
            <input
              type="text"
              onChange={(e: any) => setMsg(e.target.value)}
              value={msg}
              placeholder="Write Something..."
              className="py-2  outline-0 px-3 bg-transparent text-sm w-[180px] rounded-full"
            />
            <button
              onClick={SubmitHandler}
              className="w-[40px] h-[40px] active:scale-[.9] text-sm flex-shrink-0 flex-center bg-primary rounded-full"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!isOpen)}
        className="icon  w-[60px] ml-auto h-[60px] active:scale-[.9] cursor-pointer flex-center rounded-full bg-gray-900 shadow-sm"
      >
        <BsChatDots />
      </button>
    </div>
  );
};

export default Chatbot;
