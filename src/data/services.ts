export interface Service {
  key: string;
  titleKey: string;
  iconName: string;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  benefitsKey?: string;
  processKey?: string;
}

export const services: Service[] = [
  {
    key: 'darmsanierung',
    titleKey: 'services.colonHydro.title',
    iconName: 'Spa',
    shortDescriptionKey: 'services.colonHydro.short',
    fullDescriptionKey: 'services.colonHydro.full',
    benefitsKey: 'services.colonHydro.benefits',
    processKey: 'services.colonHydro.process',
  },
  {
    key: 'fastenkurse',
    titleKey: 'services.fasting.title',
    iconName: 'Groups',
    shortDescriptionKey: 'services.fasting.short',
    fullDescriptionKey: 'services.fasting.full',
    benefitsKey: 'services.fasting.benefits',
    processKey: 'services.fasting.process',
  },
  {
    key: 'vegaCheck',
    titleKey: 'services.vegaCheck.title',
    iconName: 'Description',
    shortDescriptionKey: 'services.vegaCheck.short',
    fullDescriptionKey: 'services.vegaCheck.full',
    benefitsKey: 'services.vegaCheck.benefits',
    processKey: 'services.vegaCheck.process',
  },
  {
    key: 'infusionstherapie',
    titleKey: 'services.infusion.title',
    iconName: 'Vaccines',
    shortDescriptionKey: 'services.infusion.short',
    fullDescriptionKey: 'services.infusion.full',
    benefitsKey: 'services.infusion.benefits',
    processKey: 'services.infusion.process',
  },
  {
    key: 'bioresonanz',
    titleKey: 'services.bioresonance.title',
    iconName: 'MonitorHeart',
    shortDescriptionKey: 'services.bioresonance.short',
    fullDescriptionKey: 'services.bioresonance.full',
    benefitsKey: 'services.bioresonance.benefits',
    processKey: 'services.bioresonance.process',
  },
  {
    key: 'labordiagnostik',
    titleKey: 'services.lab.title',
    iconName: 'Biotech',
    shortDescriptionKey: 'services.lab.short',
    fullDescriptionKey: 'services.lab.full',
    benefitsKey: 'services.lab.benefits',
    processKey: 'services.lab.process',
  },
  {
    key: 'gesprächstherapie',
    titleKey: 'services.therapy.title',
    iconName: 'Forum',
    shortDescriptionKey: 'services.therapy.short',
    fullDescriptionKey: 'services.therapy.full',
    benefitsKey: 'services.therapy.benefits',
    processKey: 'services.therapy.process',
  },
  {
    key: 'kuraufenthalte',
    titleKey: 'services.retreat.title',
    iconName: 'Hotel',
    shortDescriptionKey: 'services.retreat.short',
    fullDescriptionKey: 'services.retreat.full',
    benefitsKey: 'services.retreat.benefits',
    processKey: 'services.retreat.process',
  },
];
