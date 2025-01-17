'use client';

import React, { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { Field, DynamicTableColumn, InputOption, FieldOption } from '@/types/form-types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Drawer } from 'vaul';
import { cn } from '@/lib/utils';
import { ChevronDown, Plus, Trash2 } from 'lucide-react';
import type { Locale } from '@/locales/server';
import { useScopedI18n } from '@/locales/client';

export function DynamicTable({ name, label, columns, addButtonLabel }: Readonly<Field>) {
  const { control, register, setValue, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const t = useScopedI18n('pages.report.create.fields');
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleSelectOption = (columnName: string, optionValue: string) => {
    if (editingIndex !== null) {
      setValue(`${name}.${editingIndex}.${columnName}`, optionValue);
    }
  };

  const renderCell = (column: DynamicTableColumn, rowIndex: number) => {
    const fieldName = `${name}.${rowIndex}.${column.name}`;
    const fieldValue = watch(`${name}.${rowIndex}.${column.name}`);

    switch (column.type) {
      case 'select':
        return (
          <Drawer.Root>
            <Drawer.Trigger className="w-full text-left">
              <Button variant="default" className="w-full">
                {t(fieldValue as any)}
                <ChevronDown className="ml-auto" />
              </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-background fixed right-0 bottom-0 left-0 mt-24 flex h-[50vh] flex-col rounded-t-[10px]">
                <div className="bg-background flex-1 overflow-y-auto rounded-t-[10px] p-4">
                  <Drawer.Title className="mb-4 text-lg font-medium">{column.label}</Drawer.Title>
                  <div className="space-y-2">
                    {(column.options as FieldOption[])?.map((option) => (
                      <Drawer.Close key={option.value} asChild>
                        <Button
                          onClick={() => handleSelectOption(column.name, option.value)}
                          className="w-full justify-start"
                          variant={fieldValue === option.value ? 'secondary' : 'default'}
                        >
                          {t(option.label as any)}
                        </Button>
                      </Drawer.Close>
                    ))}
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        );
      case 'percent':
        return (
          <Input
            type="number"
            min="0"
            max="100"
            step="0.01"
            {...register(fieldName, { valueAsNumber: true })}
          />
        );
      case 'number':
        return (
          <Input type="number" step="0.01" {...register(fieldName, { valueAsNumber: true })} />
        );
      default:
        return <Input type="text" {...register(fieldName)} />;
    }
  };

  const renderMobileRow = (rowIndex: number) => {
    return (
      <div
        key={rowIndex}
        className="border-offgray-100 mb-4 rounded border p-4 dark:border-gray-600/40"
      >
        {columns?.map((column) => (
          <div key={column.name} className="mb-2">
            <label className="mb-1 block text-sm font-medium">{column.label}</label>
            {renderCell(column, rowIndex)}
          </div>
        ))}
        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={() => remove(rowIndex)}
          className="mt-2"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Remove
        </Button>
      </div>
    );
  };

  const addNewRow = () => {
    append(Object.fromEntries(columns?.map((col) => [col.name, '']) || []));
    if (isMobile) {
      setEditingIndex(fields.length);
      setOpenDrawer(true);
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-offgray-700 font-lora dark:text-offgray-300 block text-sm font-medium">
        {label}
      </label>
      {isMobile ? (
        <div>
          <Button onClick={() => setOpenDrawer(true)} className="mb-4">
            View/Edit Data
          </Button>
          <Drawer.Root open={openDrawer} onOpenChange={setOpenDrawer}>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-background fixed right-0 bottom-0 left-0 mt-24 flex h-[80vh] flex-col rounded-t-[10px]">
                <div className="flex-1 overflow-y-auto p-4">
                  {fields.length > 0 ? (
                    <Drawer.Title className="mb-4 text-lg font-medium">{label}</Drawer.Title>
                  ) : (
                    <Drawer.Title className="sr-only">{label}</Drawer.Title>
                  )}
                  {fields.length === 0 && (
                    <p className="text-offgray-500 dark:text-offgray-400 inline-flex size-full items-center justify-center">
                      No data available
                    </p>
                  )}
                  {fields.map((field, index) => renderMobileRow(index))}
                </div>
                <div className="border-t p-4">
                  <Button onClick={addNewRow} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    {addButtonLabel ?? 'Add Row'}
                  </Button>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                {columns?.map((column) => <TableHead key={column.name}>{column.label}</TableHead>)}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, index) => (
                <TableRow key={field.id}>
                  {columns?.map((column) => (
                    <TableCell key={column.name}>{renderCell(column, index)}</TableCell>
                  ))}
                  <TableCell>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button type="button" onClick={addNewRow}>
            <Plus className="mr-2 h-4 w-4" />
            {addButtonLabel ?? 'Add Row'}
          </Button>
        </>
      )}
    </div>
  );
}
