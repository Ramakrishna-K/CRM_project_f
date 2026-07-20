// import Card from "../components/common/Card";
import InteractionForm from "../components/interaction/InteractionForm";
import ChatWindow from "../components/chat/ChatWindow";

const LogInteraction = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Log HCP Interaction
        </h1>

        <p className="text-gray-500 mt-2">
          Record meetings using the structured form or describe them naturally
          to the AI assistant.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Form */}
        {/* <div className="xl:col-span-2">
          <Card>
            <InteractionForm />
          </Card>
        </div> */}

        {/* AI Chat */}
        <div>
          <Card>
            <ChatWindow />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogInteraction;