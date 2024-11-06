import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import React from 'react';

interface SearchParamProps {
  params: {
    type: keyof typeof transformationTypes; // Ensure type is valid by limiting to transformation keys
  };
}

const AddTransformationTypePage = ({ params }: SearchParamProps) => {
  const { type } = params;

  // Access transformation type directly
  const transformation = transformationTypes[type];

  return (
    <>
      <Header
        title={transformation?.title || 'Default Title'}
        subtitle={transformation?.subTitle || 'Default Subtitle'}
      />
      <TransformationForm />
    </>
  );
}

export default AddTransformationTypePage;

