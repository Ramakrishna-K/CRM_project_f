// import Card from "../components/common/Card";
import ChatWindow from "../components/chat/ChatWindow";
import InteractionForm from "../components/interaction/InteractionForm";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          AI-First CRM Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Record and manage Healthcare Professional interactions using AI.
        </p>
      </div>
{/* 
      {/* Stats
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <h3 className="text-gray-500 text-sm">Today's Meetings</h3>
          <p className="text-4xl font-bold mt-3 text-blue-600">8</p>
        </Card>

        <Card>
          <h3 className="text-gray-500 text-sm">Doctors Visited</h3>
          <p className="text-4xl font-bold mt-3 text-green-600">5</p>
        </Card>

        <Card>
          <h3 className="text-gray-500 text-sm">Follow-ups</h3>
          <p className="text-4xl font-bold mt-3 text-yellow-600">3</p>
        </Card>

        <Card>
          <h3 className="text-gray-500 text-sm">Positive Sentiment</h3>
          <p className="text-4xl font-bold mt-3 text-purple-600">92%</p>
        </Card>
      </div> */}

      {/* Main Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <InteractionForm />

        <ChatWindow />
      </div>
    </div>
  );
};

export default Dashboard;
