import React, { useState } from 'react';
import { z } from 'zod';

export function useFormStep<T extends z.ZodType<any, any>>(schema: T, initialData: z.infer<T>) {
    const [data, setData] = useState<z.infer<T>>(initialData);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = (): boolean => {
        try {
            schema.parse(data);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    return { data, handleChange, errors, validate };
}
