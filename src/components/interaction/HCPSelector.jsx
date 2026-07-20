

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/interactionSlice";

const defaultDoctors = [
  "Dr. Sunitha",
  "Dr. Kumar",
  "Dr. Ravi",
  "Dr. Meena",
];

const HCPSelector = () => {
  const dispatch = useDispatch();

  const hcpName = useSelector(
    (state) => state.interaction.hcp_name
  );

  const doctors = hcpName && !defaultDoctors.includes(hcpName)
    ? [...defaultDoctors, hcpName]
    : defaultDoctors;

  return (
    <div>
      <label className="font-semibold block mb-2">
        Healthcare Professional
      </label>

      <select
        className="w-full border rounded-lg p-3"
        value={hcpName}
        onChange={(e) =>
          dispatch(
            updateField({
              field: "hcp_name",
              value: e.target.value,
            })
          )
        }
      >
        <option value="">Select HCP</option>

        {doctors.map((doctor) => (
          <option key={doctor} value={doctor}>
            {doctor}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HCPSelector;