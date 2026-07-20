

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/interactionSlice";

const sentiments = [
  "Positive",
  "Neutral",
  "Negative",
];

const sentimentMap = {
  positive: "Positive",
  neutral: "Neutral",
  negative: "Negative",
};


const SentimentSelector = () => {
  const dispatch = useDispatch();

  const sentiment = useSelector(
    (state) => state.interaction.sentiment || "Neutral"
  );


  const normalizedSentiment =
    sentimentMap[sentiment.toLowerCase()] || sentiment;


  const handleChange = (e) => {
    dispatch(
      updateField({
        field: "sentiment",
        value: e.target.value,
      })
    );
  };


  return (
    <div>
      <label className="font-semibold block mb-2">
        Doctor Sentiment
      </label>


      <select
        className="w-full border rounded-lg p-3"
        value={normalizedSentiment}
        onChange={handleChange}
      >

        {sentiments.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}

      </select>

    </div>
  );
};


export default SentimentSelector;