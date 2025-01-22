import { useState } from 'react';
import useFormStore from '../stores/formStore';
import { Input } from './common';

const SystemRequirements = () => {
  const formData = useFormStore((state) => state.formData);
  const updateFormData = useFormStore((state) => state.updateFormData);

  const [requirements, setRequirements] = useState([
    { name: 'OS', value: formData.systemRequirements.OS },
    { name: 'RAM', value: formData.systemRequirements.RAM },
    { name: 'Storage', value: formData.systemRequirements.Storage },
    { name: 'DirectX', value: formData.systemRequirements.DirectX },
    { name: 'Processor', value: formData.systemRequirements.Processor },
    { name: 'Graphics', value: formData.systemRequirements.Graphics }
  ]);

  const handleReqFieldChange = (e, index) => {
    const { name, value } = e.target;

    const updatedRequirements = [...requirements];
    updatedRequirements[index] = { ...updatedRequirements[index], value };
    setRequirements(updatedRequirements);

    updateFormData({
      systemRequirements: { [name]: value }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {requirements.map((requirement, index) => (
        <Input
          key={index}
          label={requirement.name}
          value={requirement.value}
          name={requirement.name}
          type="text"
          onChange={(e) => handleReqFieldChange(e, index)}
        />
      ))}
    </div>
  );
};

export default SystemRequirements;
