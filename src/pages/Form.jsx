import { useState, useEffect } from 'react';

import { ChevronUp, ChevronDown } from 'lucide-react';

import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Input, Label, Divider } from '../components/common';

import Section from '../components/FormSection';

import { SearchBar, Field } from '../components/features';
import Title from '../components/Title';

import { Header } from '../components/layout';
import EmbedCode from '../components/EmbedCode/EmbedCode';

import useFields from '../hooks/useFields';

import useFormStore from '../stores/formStore';

import SystemRequirements from '../components/SystemRequirements';

function FormBuilder() {
  const { fetchFieldInfo } = useFields();
  const [inputValue, setInputValue] = useState('');
  const formData = useFormStore((state) => state.formData);
  const updateFormData = useFormStore((state) => state.updateFormData);

  const removeField = (indexToRemove) => {
    setInputValue('');
    updateFormData({ fields: formData.fields.filter((_, index) => index !== indexToRemove) });
  };

  const addField = (data) => {
    setInputValue('');
    const { name: fieldTitle } = data[0];
    updateFormData({ fields: [...formData.fields, { title: fieldTitle, value: data }] });
  };

  const moveFieldUp = (oldIndex) => {
    if (oldIndex > 0 && oldIndex < formData.fields.length) {
      const currFields = [...formData.fields];

      const temp = currFields[oldIndex];
      currFields[oldIndex] = currFields[oldIndex - 1];
      currFields[oldIndex - 1] = temp;

      updateFormData({ fields: currFields });
    }
  };

  const moveFieldDown = (oldIndex) => {
    if (oldIndex >= 0 && oldIndex < formData.fields.length - 1) {
      const currFields = [...formData.fields];

      const temp = currFields[oldIndex];
      currFields[oldIndex] = currFields[oldIndex + 1];
      currFields[oldIndex + 1] = temp;

      updateFormData({ fields: currFields });
    }
  };

  const handleInputFieldChange = (e) => {
    const { name, value } = e.target;

    updateFormData({ [name]: value });
  };

  const handleAddFieldBtn = () => {
    if (inputValue === '') {
      return toast.error('URL is required', {
        theme: 'colored',
        autoClose: 2000,
        position: 'top-right'
      });
    }

    if (
      !inputValue.startsWith('https://drive.google.com/') &&
      !inputValue.startsWith('https://drive.usercontent.google.com/')
    ) {
      return toast.error('Invalid URL format', {
        theme: 'colored',
        autoClose: 2000,
        position: 'top-right'
      });
    }

    fetchFieldInfo(inputValue).then((data) => addField(data));
  };

  return (
    <>
      <div className="grid place-items-center overflow-hidden lg:max-h-svh lg:p-4">
        <div className="max-w-screen lg:w-100vw flex flex-col lg:grid lg:grid-cols-2">
          <div className="lg:scrollbar-hidden flex flex-col gap-8 overflow-auto overflow-x-hidden p-5 lg:max-h-svh">
            <div className="flex flex-col gap-2">
              <Header></Header>
              <SearchBar />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex flex-col gap-2">
                <Label>GAME INFO</Label>
                <div className="flex w-full max-w-[350px] flex-col items-center justify-center gap-4 rounded-lg bg-[#1C1C1E] p-4 lg:max-w-max">
                  <div className=" flex max-w-96  flex-col  gap-4 px-4 lg:px-0 ">
                    <Input
                      label={'Name'}
                      value={formData.title}
                      name={'title'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    <Input
                      label={'Version'}
                      value={formData.version}
                      name={'version'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    <Input
                      label={'Released'}
                      value={formData.released}
                      name={'released'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Metadata</Label>
                <div className="flex w-full max-w-[350px] flex-col items-center justify-center gap-4 rounded-lg bg-[#1C1C1E] p-4 lg:max-w-max">
                  <div className=" flex max-w-96  flex-col  gap-4 px-4 lg:px-0 ">
                    <Input
                      label={'Publisher'}
                      defaultValue={formData.publishers.join(', ')}
                      value={formData.publisherString}
                      name={'publisherString'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    <Input
                      label={'Developer'}
                      defaultValue={formData.developers.join(', ')}
                      value={formData.developerString}
                      name={'developerString'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    <Input
                      label={'Repack'}
                      value={formData.repack}
                      name={'repack'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    <Input
                      label={'Size'}
                      value={formData.size}
                      name={'size'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                    />
                    {/* <MultiSelector
                      label={`Platforms`}
                      options={[
                        { name: 'Steam', value: 'Steam' },
                        { name: 'Epic Games', value: 'Epic Games' }
                      ]}
                    ></MultiSelector> */}
                    <Input
                      label={'Platforms'}
                      value={formData.platforms}
                      name={'platforms'}
                      onChange={handleInputFieldChange}
                      type={'text'}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            <Section sectionTitle={'System Requirements'}>
              <SystemRequirements
                handleInputFieldChange={handleInputFieldChange}
              ></SystemRequirements>
            </Section>

            <div className=" flex flex-col gap-2">
              <Label>Poster</Label>
              <img src={formData.posterURL} alt="" className="max-w-96 rounded-md border" />
            </div>

            <div className=" flex flex-col gap-2">
              <Label>Description</Label>
              <textarea
                onChange={handleInputFieldChange}
                name="desc"
                value={formData.desc}
                className="h-64 resize-none rounded-md border border-neutral-700 bg-[#1c1c1e] bg-opacity-50 p-2  outline-none"
              ></textarea>
            </div>

            <Input
              label={'Trailer'}
              value={formData.trailerURL}
              name={'trailerURL'}
              onChange={handleInputFieldChange}
              placeholder={'Embed URL'}
              type={'text'}
            />

            <div className="flex max-w-96 flex-col gap-2 lg:max-w-xl">
              <Label>Fields: {formData.fields.length}</Label>

              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
                  <Input
                    label={'URL'}
                    type={'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={'File or Folder URL'}
                  ></Input>
                  <button
                    onClick={handleAddFieldBtn}
                    className="flex items-center gap-1 rounded-md bg-[#0A84FF] px-4 py-2 transition-all duration-300 hover:bg-blue-700"
                  >
                    Add Field
                  </button>
                </div>
                <div
                  className={`rounded-xl ${formData.fields.length >= 1 ? 'bg-[#1C1C1E]' : ''} p-4 pr-0`}
                >
                  {formData.fields.map((field, i) => (
                    <div key={i} className="relative flex max-w-xl flex-col">
                      <Field key={i} fieldIndex={i + 1} data={field}></Field>
                      {i < formData.fields.length - 1 && (
                        <div className="py-4">
                          <Divider />
                        </div>
                      )}
                      <div className="absolute right-0 top-0 flex gap-4 pr-4 ">
                        {formData.fields.length > 1 && i === 0 ? (
                          <button
                            onClick={() => moveFieldDown(i)}
                            className=" text-lg text-neutral-400 transition-all duration-200 "
                          >
                            <ChevronDown size={30} />
                          </button>
                        ) : formData.fields.length > 1 && i === formData.fields.length - 1 ? (
                          <button
                            onClick={() => moveFieldUp(i)}
                            className=" text-lg text-neutral-400 transition-all duration-200 "
                          >
                            <ChevronUp size={30} />
                          </button>
                        ) : (
                          formData.fields.length > 1 && (
                            <div className="flex items-center">
                              <button
                                onClick={() => moveFieldUp(i)}
                                className=" text-lg text-neutral-400 transition-all duration-200 "
                              >
                                <ChevronUp size={30} />
                              </button>
                              <button
                                onClick={() => moveFieldDown(i)}
                                className=" text-lg text-neutral-400 transition-all duration-200 "
                              >
                                <ChevronDown size={30} />
                              </button>
                            </div>
                          )
                        )}

                        <button
                          onClick={() => removeField(i)}
                          className="  text-lg text-neutral-400 transition-all duration-200 hover:text-red-700"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-4 lg:h-screen lg:overflow-y-auto lg:p-0">
            <Title />
            <EmbedCode formData={formData}></EmbedCode>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBuilder;
