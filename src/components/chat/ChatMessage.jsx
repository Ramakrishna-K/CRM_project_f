import { Bot, User } from "lucide-react";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="mr-3">
          <div className="bg-blue-600 text-white p-2 rounded-full">
            <Bot size={18} />
          </div>
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-white border rounded-bl-sm"
        }`}
      >
        <p className="text-sm leading-7 whitespace-pre-wrap">
          {message.text}
        </p>
      </div>

      {isUser && (
        <div className="ml-3">
          <div className="bg-gray-300 p-2 rounded-full">
            <User size={18} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
