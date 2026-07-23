
import { useState } from "react";
import { useDispatch } from "react-redux";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { fillInteraction } from "../../redux/interactionSlice";
import { sendChatMessage } from "../../services/api";

const ChatWindow = () => {
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: " Hello! Tell me about today's HCP interaction. I'll extract the details and automatically fill the interaction form.",
    },
  ]);


  // Convert AI time format (11:00 AM)
  // to HTML input time format (11:00)
  const convertTime = (time) => {
    if (!time) return "";

    const [timePart, modifier] = time.split(" ");

    let [hours, minutes] = timePart.split(":");


    if (modifier === "PM" && hours !== "12") {
      hours = String(Number(hours) + 12);
    }


    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }


    return `${hours.padStart(2, "0")}:${minutes}`;
  };


  const handleSend = async (text) => {
    if (!text.trim()) return;


    // User message
    const userMessage = {
      role: "user",
      text,
    };


    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);


    try {

      // Call FastAPI AI Agent
      const data = await sendChatMessage(text);


      console.log("AI Response:", data);



      // Convert AI response before Redux update
      const formattedData = {
        ...data,

        time: convertTime(data.time),
      };



      console.log(
        "Formatted Redux Data:",
        formattedData
      );



      // Auto fill Interaction Form
      dispatch(
        fillInteraction(formattedData)
      );



      // AI message
      const aiMessage = {

        role: "assistant",

        text: `
 Interaction Successfully


 Doctor Name:
${data.hcp_name || "Not Found"}


 Interaction Type:
${data.interaction_type || "Meeting"}


 Date:
${data.date || "Not Available"}


 Time:
${data.time || "Not Available"}


 Attendees:
${
  data.attendees?.length
    ? data.attendees.join(", ")
    : "None"
}


 Topics:
${
  data.topics?.length
    ? data.topics.join(", ")
    : "None"
}


 Materials:
${
  data.materials?.length
    ? data.materials.join(", ")
    : "None"
}


 Samples:
${
  data.samples?.length
    ? data.samples.join(", ")
    : "None"
}


 Sentiment:
${data.sentiment || "Neutral"}


 Outcomes:
${data.outcomes || "None"}


 Follow Up:
${data.follow_up || "None"}


 Summary:
${data.summary || "None"}


 Next Action:
${data.next_action || "None"}


        `,
      };



      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);


    } catch (error) {

      console.error(
        "AI Error:",
        error
      );


      const errorMessage = {

        role: "assistant",

        text:
          "❌ Failed to connect to the AI backend.",

      };


      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);

    }
  };



  return (

    <div className="bg-white rounded-xl shadow-lg h-[700px] flex flex-col">


      {/* Header */}

      <div className="border-b p-5">

        <h2 className="text-xl font-bold text-gray-800">
          AI CRM Assistant
        </h2>


        <p className="text-sm text-gray-500 mt-1">
          Describe today's HCP interaction in natural language.
        </p>

      </div>



      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">

        {messages.map((message, index) => (

          <ChatMessage
            key={index}
            message={message}
          />

        ))}

      </div>



      {/* Input */}

      <div className="border-t bg-white p-4">

        <ChatInput
          onSend={handleSend}
        />

      </div>


    </div>

  );
};


export default ChatWindow;



// ✅ The interaction form has been auto-filled.
