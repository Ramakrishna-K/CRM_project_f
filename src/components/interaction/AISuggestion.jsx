import { Sparkles } from "lucide-react";

const AISuggestions = () => {
  return (
    <div className="mt-6 rounded-xl bg-blue-50 border border-blue-200 p-5">

      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="text-blue-600" size={22} />
        <h3 className="font-bold text-lg">
          AI Suggestions
        </h3>
      </div>

      <div className="space-y-3 text-gray-700">

        <p>
          ✅ Doctor showed positive interest in Product X.
        </p>

        <p>
          📌 Schedule a follow-up meeting within 2 weeks.
        </p>

        <p>
          📄 Share additional clinical efficacy documents.
        </p>

        <p>
          ⭐ Overall sentiment: Positive
        </p>

      </div>

    </div>
  );
};

export default AISuggestions;