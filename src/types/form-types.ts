import { ReactNode } from 'react';
import { z } from 'zod';
import { Locale } from '@/locales/server';

export type FieldType = 'text' | 'number' | 'textarea' | 'select' | 'dynamicTable';

export interface FieldOption {
  value: string;
  label: string;
  default?: boolean;
}

export type InputOption = {
  label: string;
  type: 'number' | 'percent';
  value: number;
};

export type DynamicTableColumnType = 'text' | 'number' | 'percent' | 'select';

export interface DynamicTableColumn {
  name: string;
  label: string;
  type: DynamicTableColumnType;
  options?: FieldOption[]; // For select type
}

export interface Field {
  name: string;
  label: string;
  icon: ReactNode;
  type?: FieldType;
  placeholder?: string;
  options?: FieldOption[] | InputOption[];
  columns?: DynamicTableColumn[]; // For dynamicTable type
  addButtonLabel?: string; // For dynamicTable type
}

export interface Step {
  title: keyof Locale['pages']['report']['create']['steps'];
  fields: Field[];
}

export type StepSchema = z.ZodObject<any>;

export interface MultiStepFormProps<T extends z.ZodObject<any>> {
  steps: Step[];
  schemas: T[];
  onSubmit: (data: z.infer<T>) => void | Promise<void>;
}

export type FormData = Record<string, unknown>;
