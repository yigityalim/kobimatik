import { ReactNode } from 'react';
import { z } from 'zod';

export type FieldType = 'text' | 'number' | 'textarea' | 'select';

export interface FieldOption {
    value: string;
    label: string;
    default?: boolean;
}

export interface Field {
    name: string;
    label: string;
    icon: ReactNode;
    type?: FieldType;
    placeholder?: string;
    options?: FieldOption[];
}

export interface Step {
    title: string;
    fields: Field[];
}

export type StepSchema = z.ZodObject<any>;

export interface MultiStepFormProps<T extends z.ZodObject<any>> {
    steps: Step[];
    schemas: T[];
    onSubmit: (data: z.infer<T>) => void | Promise<void>;
}

export type FormData = Record<string, unknown>;