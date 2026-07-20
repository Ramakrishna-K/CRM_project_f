

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/interactionSlice";

const sampleList = [
  "Product X Sample",
  "Product Y Sample",
  "Starter Kit",
  "Trial Pack",
];

const sampleMap = {
  "Product X Sample": "Product X",
  "Product Y Sample": "Product Y",
  "Starter Kit": "Starter",
  "Trial Pack": "Trial",
};


const SampleSelector = () => {
  const dispatch = useDispatch();

  const selectedSamples = useSelector(
    (state) => state.interaction.samples || []
  );


  // Backend values -> UI values
  const normalizedSamples = selectedSamples.map(
    (item) =>
      Object.keys(sampleMap).find(
        (key) => sampleMap[key] === item
      ) || item
  );


  const handleChange = (sample) => {
    let updatedUIValues;


    if (normalizedSamples.includes(sample)) {
      updatedUIValues = normalizedSamples.filter(
        (item) => item !== sample
      );
    } else {
      updatedUIValues = [
        ...normalizedSamples,
        sample,
      ];
    }


    // UI values -> Backend values
    const backendValues = updatedUIValues.map(
      (item) => sampleMap[item] || item
    );


    dispatch(
      updateField({
        field: "samples",
        value: backendValues,
      })
    );
  };


  return (
    <div>
      <label className="font-semibold block mb-2">
        Samples Shared
      </label>


      <div className="grid md:grid-cols-2 gap-3">
        {sampleList.map((sample) => (
          <label
            key={sample}
            className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition"
          >

            <input
              type="checkbox"
              checked={normalizedSamples.includes(sample)}
              onChange={() => handleChange(sample)}
            />


            <span>{sample}</span>

          </label>
        ))}
      </div>
    </div>
  );
};


export default SampleSelector;