import { Layers, Box, Lock } from 'lucide-react';
import React from 'react';

const features = [
  {
    Icon: Layers,
    title: 'Custom Crop Models',
    description: "AI models trained on your fields—sensor data, imagery, and records—to deliver practical, field-ready recommendations.",
  },
  {
    Icon: Box,
    title: 'On‑Farm or Private Cloud Deployments',
    description: 'Deploy on your terms—edge devices, co‑op servers, or private cloud—aligned with your data and compliance needs.',
  },
  {
    Icon: Lock,
    title: 'Team Roles & Permissions',
    description: 'Granular roles for growers, agronomists, and ops teams with audit trails and governance suited for large operations.',
  },
];

const EnterpriseFeatures = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Built for Farm Operations
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FarmAI protects your data and scales from a single farm to multi‑region enterprises.
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