import { Layers, Box, Lock } from 'lucide-react';
import React from 'react';

const features = [
  {
    Icon: Layers,
    title: 'Custom-Trained Models',
    description: "LLMs built for finance, using professionally labeled data tailored to the standards of your firm's best analysts.",
  },
  {
    Icon: Box,
    title: 'Single Tenant Deployments',
    description: 'Flexible deployment options to meet the security & infrastructure needs for the most conscious firms.',
  },
  {
    Icon: Lock,
    title: 'Admin Governance & Permissions',
    description: 'Granular permission controls, role-based access management, comprehensive audit trails, & customizable governance policies.',
  },
];

const EnterpriseFeatures = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Built for Enterprise Deployment
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rogo keeps your data safe with world-class security and data privacy measures.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-none sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center bg-[#1a1a1a]">
                  <feature.Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-6 text-[#1a1a1a]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseFeatures;