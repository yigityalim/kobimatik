import React from 'react';
import { Briefcase, Lightbulb, PieChart, Search, Target, TrendingUp, Users } from 'lucide-react';

export type FieldBase = {
    name: string;
    label: string;
    icon: React.ReactNode;
};

export type TextField = FieldBase & {
    type?: React.HTMLInputTypeAttribute;
    placeholder: string;
};

export type SelectField = FieldBase & {
    type: 'select';
    options: { value: string; label: string; default?: boolean }[];
};

export type FieldSchema = TextField | SelectField;

export type StepSchema = {
    title: string;
    fields: FieldSchema[];
};

export const create_report_step = [
    {
        title: 'steps.entrepreneurInfo', // Girişimci Bilgileri
        fields: [
            {
                name: 'startupName',
                label: 'fields.startupName', // Girişim Adı
                icon: <Search className="size-4 text-gray-400" />,
                placeholder: 'startupName',
            },
            {
                name: 'userType',
                label: 'fields.userType', // Kullanıcı Tipi
                icon: <Search className="size-4 text-gray-400" />,
                type: 'select',
                placeholder: 'userType',
                options: [
                    { value: '1', label: 'Girişimci', default: true },
                    { value: '2', label: 'Yatırımcı' },
                    { value: '3', label: 'Danışman' },
                ],
            },
        ],
    },
    {
        title: 'steps.startupDetails', // Girişim Detayları
        fields: [
            {
                name: 'industry',
                label: 'fields.industry', // Sektör
                icon: <Briefcase className="size-4 text-gray-400" />,
                placeholder: 'Sektörünüzü Girin',
            },
            {
                name: 'foundingYear',
                label: 'fields.foundingYear', // Kuruluş Yılı
                icon: <TrendingUp className="size-4 text-gray-400" />,
                type: 'number',
                placeholder: 'YYYY',
            },
        ],
    },
    {
        title: 'steps.teamAndFunding', // Ekip ve Finansman
        fields: [
            {
                name: 'teamSize',
                label: 'fields.teamSize', // Ekip Büyüklüğü
                icon: <Users className="size-4 text-gray-400" />,
                type: 'number',
                placeholder: 'Ekip Üyesi Sayısı',
            },
            {
                name: 'fundingStage',
                label: 'fields.fundingStage', // Finansman Aşaması
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
        title: 'steps.productAndMarket', // Ürün ve Pazar
        fields: [
            {
                name: 'productDescription',
                label: 'fields.productDescription', // Ürün Açıklaması
                icon: <Lightbulb className="size-4 text-gray-400" />,
                type: 'textarea',
                placeholder: 'Ürününüzü Açıklayın',
            },
            {
                name: 'targetMarket',
                label: 'fields.targetMarket', // Hedef Pazar
                icon: <Target className="size-4 text-gray-400" />,
                placeholder: 'Hedef Pazarınızı Tanımlayın',
            },
        ],
    },
    {
        title: 'steps.financialInfo', // Finansal Bilgiler
        fields: [
            {
                name: 'revenue',
                label: 'fields.revenue', // Yıllık Gelir
                icon: <PieChart className="size-4 text-gray-400" />,
                type: 'number',
                placeholder: 'Yıllık Gelirinizi Girin (TL)',
            },
            {
                name: 'growthRate',
                label: 'fields.growthRate', // Büyüme Oranı
                icon: <TrendingUp className="size-4 text-gray-400" />,
                type: 'number',
                placeholder: 'Yıllık Büyüme Oranını Girin (%)',
            },
        ],
    },
    {
        title: 'steps.challengesAndOpportunities', // Zorluklar ve Fırsatlar
        fields: [
            {
                name: 'challenges',
                label: 'fields.challenges', // Zorluklar
                icon: <Target className="size-4 text-gray-400" />,
                type: 'textarea',
                placeholder: 'Karşılaştığınız Zorlukları Açıklayın',
            },
            {
                name: 'opportunities',
                label: 'fields.opportunities', // Fırsatlar
                icon: <Lightbulb className="size-4 text-gray-400" />,
                type: 'textarea',
                placeholder: 'Gördüğünüz Fırsatları Açıklayın',
            },
        ],
    },
    {
        title: 'steps.advantageAndGoals', // Rekabet Avantajı ve Hedefler
        fields: [
            {
                name: 'competitiveAdvantage',
                label: 'fields.competitiveAdvantage', // Rekabet Avantajı
                icon: <TrendingUp className="size-4 text-gray-400" />,
                type: 'textarea',
                placeholder: 'Rekabet Avantajınızı Açıklayın',
            },
            {
                name: 'futureGoals',
                label: 'fields.futureGoals', // Gelecek Hedefleri
                icon: <Target className="size-4 text-gray-400" />,
                type: 'textarea',
                placeholder: 'Gelecek Hedeflerinizi Açıklayın',
            },
        ],
    },
] satisfies StepSchema[];
