import ClassNameGenerator from './classNameGenerator';

const globalStateClassesMapping: Record<string, string> = {
  active: 'KylinUI-active',
  checked: 'KylinUI-checked',
  completed: 'KylinUI-completed',
  disabled: 'KylinUI-disabled',
  error: 'KylinUI-error',
  expanded: 'KylinUI-expanded',
  focused: 'KylinUI-focused',
  focusVisible: 'KylinUI-focusVisible',
  required: 'KylinUI-required',
  selected: 'KylinUI-selected',
};

export default function generateUtilityClass(componentName: string, slot: string): string {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${ClassNameGenerator.generate(componentName)}-${slot}`;
}
