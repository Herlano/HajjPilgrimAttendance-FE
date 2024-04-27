import ComponentsJamaah from '@/components/jamaah/ComponentsJamaah';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Jamaah',
};

const Jamaah = () => {
    return <ComponentsJamaah />;
};

export default Jamaah;
