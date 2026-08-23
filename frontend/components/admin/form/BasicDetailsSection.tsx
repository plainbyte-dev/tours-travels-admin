import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DURATION_VALUES } from '../../../constants/duration';
import { CATEGORY_VALUES, DESTINATION_VALUES, type PackageInput } from '../../../schemas/package.schema';
import { inputClass, labelClass } from '../../../lib/formStyles';
import { FieldError } from './FieldError';
import { SectionCard } from './SectionCard';

interface BasicDetailsSectionProps {
  register: UseFormRegister<PackageInput>;
  errors: FieldErrors<PackageInput>;
}

const DURATION_LABELS: Record<(typeof DURATION_VALUES)[number], string> = {
  '3-4': '3–4 days',
  '5-7': '5–7 days',
  '8-10': '8–10 days',
  '10-12': '10–12 days',
};

export function BasicDetailsSection({ register, errors }: BasicDetailsSectionProps) {
  return (
    <SectionCard title="Basic details">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="title" className={labelClass}>
            Title
          </label>
          <input id="title" className={inputClass} {...register('title')} />
          <FieldError message={errors.title?.message} />
        </div>

        <div>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <select id="category" className={inputClass} {...register('category')}>
            {CATEGORY_VALUES.map((value) => (
              <option key={value} value={value}>
                Nepal Tours
              </option>
            ))}
          </select>
          <FieldError message={errors.category?.message} />
        </div>

        <div>
          <label htmlFor="destination" className={labelClass}>
            Destination
          </label>
          <select id="destination" className={inputClass} {...register('destination')}>
            {DESTINATION_VALUES.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <FieldError message={errors.destination?.message} />
        </div>

        <div>
          <label htmlFor="duration" className={labelClass}>
            Duration
          </label>
          <select id="duration" className={inputClass} {...register('duration')}>
            {DURATION_VALUES.map((value) => (
              <option key={value} value={value}>
                {DURATION_LABELS[value]}
              </option>
            ))}
          </select>
          <FieldError message={errors.duration?.message} />
        </div>
      </div>
    </SectionCard>
  );
}
