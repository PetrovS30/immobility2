import React, { useState } from 'react';

interface GenderOptionProps {
    id: number;
    title: string;
    genderSelection: string[];
    onGenderSelect: (id: number, selectedGender: string) => void;
}

const GenderOptions: React.FC<GenderOptionProps> = ({
    id,
    title,
    genderSelection,
    onGenderSelect,
}) => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    console.log(selectedGender);
    

    const handleGenderSelect = (selectedItem: string) => {
        setSelectedGender(selectedItem);
        onGenderSelect(id, selectedItem);
    };
    console.log(genderSelection);
    console.log(onGenderSelect);
    
    
    return (
        <div className="gender">
            <span className="gender-label">{title}</span>
            <div className="gender-options">
                {genderSelection.map((option, index) => (
                    <input
                        key={index}
                        onClick={() => handleGenderSelect(option.value)}
                        className={`border ${selectedGender === option.value ? 'selected' : '' } ${selectedGender === 'Male' && option.value === "Male" ? 'gender-male': null } ${selectedGender === 'Female' && option.value === "Female" ? 'gender-female': null }`}
                        type="button"
                        value={option.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default GenderOptions;