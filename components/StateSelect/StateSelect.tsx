import React, { useState, useEffect } from "react";
import { StyledSelect } from "./styles";
import { ActionMeta } from "react-select";

interface StateSelectProps {
  onChange: (selectedOption: { label: string; value: string } | null) => void;
  selectedState: { label: string; value: string } | null;
  setSelectedState: React.Dispatch<React.SetStateAction<{ label: string; value: string } | null>>;
}

const StateSelect: React.FC<StateSelectProps> = ({ onChange, selectedState, setSelectedState }) => {
  const [localSelectedState, setLocalSelectedState] = useState<{ label: string; value: string } | null>(null);

  useEffect(() => {
    setLocalSelectedState(selectedState);
  }, [selectedState]);

  const options = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const handleSelectChange = (
    selectedOption: unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    // Process selectedOption if needed, then call the original onChange function
    // For example, extracting label and value properties from selectedOption
    const formattedSelectedOption = selectedOption as { label: string; value: string } | null;
    setSelectedState(formattedSelectedOption)
    onChange(formattedSelectedOption);

  };
  return (
    <StyledSelect
    id="state"
    name="state"
    options={options}
    onChange={handleSelectChange}
    value={localSelectedState} 
    isSearchable
    placeholder="Select a state"
    required
    />
  );
};

export default StateSelect;
