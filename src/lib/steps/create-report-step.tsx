import React from 'react';
import {
  Briefcase,
  Lightbulb,
  PieChart,
  Search,
  Table,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Locale } from '@/locales/server';

export type FieldBase = {
  name: string;
  label: keyof Locale['pages']['report']['create']['fields'];
  icon: React.ReactNode;
};

export type TextField = FieldBase & {
  type?: React.HTMLInputTypeAttribute;
  placeholder: keyof Locale['pages']['report']['create']['placeholders'];
};

export type SelectField = FieldBase & {
  type: 'select';
  options: {
    value: string;
    label: keyof Locale['pages']['report']['create']['fields'];
    default?: boolean;
  }[];
};

export type FieldSchema = TextField | SelectField;

export type StepSchema = {
  title: keyof Locale['pages']['report']['create']['steps'];
  fields: FieldSchema[];
};

export const create_report_step = [
  {
    title: 'entrepreneurInfo', // Girişimci Bilgileri
    fields: [
      {
        name: 'startupName',
        label: 'startupName', // Girişim Adı
        icon: <Search className="size-4 text-gray-400" />,
        placeholder: 'startupName',
      },
      {
        name: 'userType',
        label: 'userType.value', // Kullanıcı Tipi
        icon: <Search className="size-4 text-gray-400" />,
        type: 'select',
        placeholder: 'userType.value',
        options: [
          { value: '1', label: 'userType.advisor', default: true },
          { value: '2', label: 'userType.entrepreneur' },
          { value: '3', label: 'userType.investor' },
          { value: '4', label: 'userType.other' },
        ],
      },
      {
        name: 'businessType',
        label: 'businessType.value',
        icon: <Search className="size-4 text-gray-400" />,
        type: 'select',
        placeholder: 'businessType.value',
        options: [
          { value: '1', label: 'businessType.real', default: true },
          { value: '2', label: 'businessType.legal' },
        ],
      },
      {
        name: 'ideaStatus',
        label: 'ideaStatus.value',
        icon: <Search className="size-4 text-gray-400" />,
        type: 'select',
        placeholder: 'ideaStatus.value',
        options: [
          { value: '1', label: 'ideaStatus.raw' }, // Ham
          { value: '2', label: 'ideaStatus.conceptualized' }, // Kurgulanmış
          { value: '3', label: 'ideaStatus.modeled' }, // Modelleştirilmiş
          { value: '4', label: 'ideaStatus.ready' }, // Hazır
          { value: '5', label: 'ideaStatus.validityPeriod' }, // Geçerlilik Süresi
        ],
      },
    ],
  },
  {
    title: 'startupDetails', // Girişim Detayları
    fields: [
      {
        name: 'Bina-İnşaat Gideri',
        label: 'Bina-İnşaat Gideri', // Girişim Adı
        type: 'select',
        placeholder: 'Giriniz:',
        options: [
          { label: 'Tutar', type: 'number', value: 0 },
          { label: 'Yüzde', type: 'percent', value: 0 },
        ],
      },
      {
        name: 'foundingYear',
        label: 'foundingYear', // Kuruluş Yılı
        icon: <TrendingUp className="size-4 text-gray-400" />,
        type: 'number',
        placeholder: 'foundingYear',
      },
    ],
  },
  {
    title: 'financialProjections',
    fields: [
      // ... other fields ...
      {
        name: 'yearlyFinancials',
        label: 'yearlyFinancials',
        icon: <Table className="size-4 text-gray-400" />,
        type: 'dynamicTable',
        columns: [
          {
            name: 'year',
            label: 'Year',
            type: 'number',
          },
          {
            name: 'revenue',
            label: 'Revenue',
            type: 'number',
          },
          {
            name: 'expenses',
            label: 'Expenses',
            type: 'number',
          },
          {
            name: 'profitMargin',
            label: 'Profit Margin',
            type: 'percent',
          },
          {
            name: 'category',
            label: 'Category',
            type: 'select',
            options: [
              { value: 'product', label: 'Product' },
              { value: 'service', label: 'Service' },
              { value: 'mixed', label: 'Mixed' },
            ],
          },
        ],
        addButtonLabel: 'Add Year',
      },
    ],
  },
  {
    title: 'teamAndFunding', // Ekip ve Finansman
    fields: [
      {
        name: 'teamSize',
        label: 'teamSize', // Ekip Büyüklüğü
        icon: <Users className="size-4 text-gray-400" />,
        type: 'number',
        placeholder: 'teamSize',
      },
      {
        name: 'fundingStage',
        label: 'fundingStage', // Finansman Aşaması
        icon: <Target className="size-4 text-gray-400" />,
        type: 'select',
        options: [
          { value: 'pre-seed', label: 'Pre-Seed' },
          { value: 'seed', label: 'Seed' },
          { value: 'series-a', label: 'Seri A' },
          { value: 'series-b', label: 'Seri B' },
          { value: 'series-c', label: 'Seri C' },
        ],
      },
    ],
  },
  {
    title: 'productAndMarket', // Ürün ve Pazar
    fields: [
      {
        name: 'productDescription',
        label: 'productDescription', // Ürün Açıklaması
        icon: <Lightbulb className="size-4 text-gray-400" />,
        type: 'textarea',
        placeholder: 'productDescription',
      },
      {
        name: 'targetMarket',
        label: 'targetMarket', // Hedef Pazar
        icon: <Target className="size-4 text-gray-400" />,
        placeholder: 'targetMarket',
      },
    ],
  },
  {
    title: 'financialInfo', // Finansal Bilgiler
    fields: [
      {
        name: 'revenue',
        label: 'revenue', // Yıllık Gelir
        icon: <PieChart className="size-4 text-gray-400" />,
        type: 'number',
        placeholder: 'revenue',
      },
      {
        name: 'growthRate',
        label: 'growthRate', // Büyüme Oranı
        icon: <TrendingUp className="size-4 text-gray-400" />,
        type: 'number',
        placeholder: 'growthRate',
      },
    ],
  },
  {
    title: 'challengesAndOpportunities', // Zorluklar ve Fırsatlar
    fields: [
      {
        name: 'challenges',
        label: 'challenges', // Zorluklar
        icon: <Target className="size-4 text-gray-400" />,
        type: 'textarea',
        placeholder: 'challenges',
      },
      {
        name: 'opportunities',
        label: 'opportunities', // Fırsatlar
        icon: <Lightbulb className="size-4 text-gray-400" />,
        type: 'textarea',
        placeholder: 'opportunities',
      },
    ],
  },
  {
    title: 'advantageAndGoals', // Rekabet Avantajı ve Hedefler
    fields: [
      {
        name: 'competitiveAdvantage',
        label: 'competitiveAdvantage', // Rekabet Avantajı
        icon: <TrendingUp className="size-4 text-gray-400" />,
        type: 'textarea',
        placeholder: 'competitiveAdvantage',
      },
      {
        name: 'futureGoals',
        label: 'futureGoals', // Gelecek Hedefleri
        icon: <Target className="size-4 text-gray-400" />,
        type: 'textarea',
        placeholder: 'futureGoals',
      },
    ],
  },
]; /* satisfies StepSchema[];*/
