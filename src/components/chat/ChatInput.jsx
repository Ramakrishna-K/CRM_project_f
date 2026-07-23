import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t bg-white p-4 flex gap-3">
      <textarea
        rows={2}
        value={text}
        placeholder="Describe today's interaction..."
        onChange={(e) => setText(e.target.value)}
        className="flex-1 resize-none border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl flex items-center justify-center"
      >
        <SendHorizontal size={22} />
      </button>
    </div>
  );
};

export default ChatInput;
