

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/interactionSlice";

const materials = [
  "Product Brochure",
  "Clinical Study",
  "Patient Guide",
  "Presentation",
];

const materialMap = {
  "Product Brochure": "Brochure",
  "Clinical Study": "Clinical Study",
  "Patient Guide": "Patient Guide",
  "Presentation": "Presentation",
};

const MaterialSelector = () => {
  const dispatch = useDispatch();

  const selectedMaterials = useSelector(
    (state) => state.interaction.materials || []
  );

  // Convert backend values -> UI values
  const normalizedMaterials = selectedMaterials.map(
    (item) =>
      Object.keys(materialMap).find(
        (key) => materialMap[key] === item
      ) || item
  );


  const handleChange = (material) => {
    let updatedUIValues;

    if (normalizedMaterials.includes(material)) {
      updatedUIValues = normalizedMaterials.filter(
        (item) => item !== material
      );
    } else {
      updatedUIValues = [
        ...normalizedMaterials,
        material,
      ];
    }


    // Convert UI values -> backend values
    const backendValues = updatedUIValues.map(
      (item) => materialMap[item] || item
    );


    dispatch(
      updateField({
        field: "materials",
        value: backendValues,
      })
    );
  };


  return (
    <div>
      <label className="font-semibold block mb-2">
        Shared Materials
      </label>

      <div className="grid md:grid-cols-2 gap-3">
        {materials.map((material) => (
          <label
            key={material}
            className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition"
          >

            <input
              type="checkbox"
              checked={normalizedMaterials.includes(material)}
              onChange={() => handleChange(material)}
            />

            <span>{material}</span>

          </label>
        ))}
      </div>
    </div>
  );
};

export default MaterialSelector;