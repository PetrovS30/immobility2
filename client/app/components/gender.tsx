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

    const handleGenderSelect = (selectedItem: string) => {
        setSelectedGender(selectedItem);
        onGenderSelect(id, selectedItem);
    };

    return (
        <div className="gender">
            <span className="gender-label">{title}</span>
            <div className="gender-options">
                {genderSelection.map((option, index) => (
                    <input
                        key={index}
                        onClick={() => handleGenderSelect(option)}
                        className={`border ${selectedGender === option ? 'selected' : ''}`}
                        type="button"
                        value={option.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default GenderOptions;
