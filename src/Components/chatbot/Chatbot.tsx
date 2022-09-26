import { BsChatDots } from "react-icons/bs";

const Chatbot = () => {
  return (
    <div className="fixed top-[50%] right-0" data-scroll-sticky>
      <div className="icon w-[60px] h-[60px] cursor-pointer flex-center rounded-full bg-gray-900 shadow-sm">
        <BsChatDots />
      </div>

      <div className="chat-container">chat bbot</div>
    </div>
  );
};

export default Chatbot;
