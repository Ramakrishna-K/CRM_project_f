



import { useDispatch, useSelector } from "react-redux";

import HCPSelector from "./HCPSelector";
import MaterialSelector from "./MaterialSelector";
import SampleSelector from "./SampleSelector";
import SentimentSelector from "./SentimentSelector";
import AISuggestions from "./AISuggestion";

import { updateField } from "../../redux/interactionSlice";
import { createInteraction } from "../../services/api";

const InteractionForm = () => {
  const dispatch = useDispatch();

  const interaction = useSelector((state) => state.interaction);

  const handleChange = (field, value) => {
    dispatch(
      updateField({
        field,
        value,
      })
    );
  };

  const handleSave = async () => {
    try {
      console.log("========== SENDING DATA ==========");
      console.log(interaction);

      const response = await createInteraction(interaction);

      console.log("========== SUCCESS ==========");
      console.log(response);

      alert("Interaction saved successfully.");
    } catch (error) {
      console.log("========== ERROR ==========");
      console.log("Status:", error.response?.status);
      console.log("Backend Error:", error.response?.data);
      console.log("Request Data:", interaction);
      console.error(error);

      alert("Failed to save interaction.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold">
        Log HCP Interaction
      </h2>

      <HCPSelector />

      <div>
        <label className="font-semibold block mb-2">
          Interaction Type
        </label>

        <select
          className="w-full border rounded-lg p-3"
          value={interaction.interaction_type}
          onChange={(e) =>
            handleChange("interaction_type", e.target.value)
          }
        >
          <option>Meeting</option>
          <option>Call</option>
          <option>Email</option>
          <option>Conference</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          className="border rounded-lg p-3"
          value={interaction.date}
          onChange={(e) =>
            handleChange("date", e.target.value)
          }
        />

        <input
          type="time"
          className="border rounded-lg p-3"
          value={interaction.time}
          onChange={(e) =>
            handleChange("time", e.target.value)
          }
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          Discussion Topics
        </label>

        <textarea
          rows={3}
          className="border rounded-lg p-3 w-full"
          value={interaction.topics.join(", ")}
          onChange={(e) =>
            handleChange(
              "topics",
              e.target.value
                .split(",")
                .map((item) => item.trim())
            )
          }
        />
      </div>

      <MaterialSelector />

      <SampleSelector />

      <SentimentSelector />

      <div>
        <label className="font-semibold block mb-2">
          Outcomes
        </label>

        <textarea
          rows={3}
          className="border rounded-lg p-3 w-full"
          value={interaction.outcomes}
          onChange={(e) =>
            handleChange("outcomes", e.target.value)
          }
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          Follow Up
        </label>

        <textarea
          rows={2}
          className="border rounded-lg p-3 w-full"
          value={interaction.follow_up}
          onChange={(e) =>
            handleChange("follow_up", e.target.value)
          }
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
      >
        Save Interaction
      </button>

      <AISuggestions />
    </div>
  );
};

export default InteractionForm;