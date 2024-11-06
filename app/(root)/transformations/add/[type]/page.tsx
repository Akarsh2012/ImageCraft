import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import React from 'react';

interface SearchParamProps {
  params: Promise<{
    type: keyof typeof transformationTypes;
  }>;
}

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { type } = await params;

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
};

export default AddTransformationTypePage;

