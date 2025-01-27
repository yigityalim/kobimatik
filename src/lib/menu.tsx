import {
  ArrowRight,
  Award,
  Blocks,
  Calendar,
  ClipboardMinus,
  GitPullRequestCreate,
  Home,
  Languages,
  Laptop,
  LayoutDashboard,
  Lightbulb,
  ListTodo,
  LucideProps,
  Newspaper,
  Plus,
  Rocket,
  Scale,
  Settings,
  User,
  Users,
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import countries from './countries';
import type { Locale } from '@/locales/client';
import Image from 'next/image';

export interface MenuItem {
  readonly name?: keyof Locale['menu'];
  component?: React.ElementType<React.ComponentProps<'div'>, 'div'>;
  type?: 'link' | 'button' | 'drawer' | 'authDrawer';
  icon?: React.ElementType<LucideProps, 'svg'>;
  href?: string;
  primary?: boolean;
  title?: string;
  drawer?: boolean;
  seperator?: boolean;
  published?: boolean;
  children?: MenuItem[];
  header?: string;
}

const ComponentWrapper = ({
  icon: Icon,
  image,
  children,
  suffix: Suffix,
}: React.PropsWithChildren<{
  icon?: React.ComponentType<LucideProps> | ((props: LucideProps) => React.JSX.Element);
  image?: string;
  suffix?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
}>) => (
  <div className="group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 my-4 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50">
    {Icon && <Icon className="size-[14px] text-blue-400" />}
    {image && (
      <div className="h-[36px] w-[36px] shrink-0 rounded-sm bg-blue-50 p-0.5 outline-1 outline-blue-300 outline-dashed dark:bg-blue-100/20 dark:outline-blue-300/50">
        <Image
          width={32}
          height={32}
          src={image}
          className="h-[32px] w-[32px] rounded-sm"
          alt="image"
        />
      </div>
    )}
    {children}
    {Suffix && <Suffix className="ml-auto" />}
  </div>
);

export const menu = [
  {
    name: 'home',
    icon: ({ ...props }: LucideProps) => <Home className={cn(props.className)} {...props} />,
    href: '/',
  },
  {
    component: (props) => (
      <ComponentWrapper image="/mock-user.png" suffix={(props) => <span {...props}>Profil</span>}>
        {props.children}
      </ComponentWrapper>
    ),
    icon: Users,
    drawer: true,
    type: 'authDrawer',
  },
  {
    name: 'recap',
    icon: Calendar,
    href: '/recap/2024',
    primary: true,
  },
  {
    seperator: true,
  },
  {
    name: 'mainNav',
    children: [
      {
        name: 'howItWorks',
        icon: Rocket,
        href: '/how-it-works',
      },
      {
        name: 'solutions',
        icon: Blocks,
        href: '/solutions',
      },
      {
        name: 'try',
        icon: Award,
        href: '/try',
      },
      {
        name: 'pricing',
        title: 'title',
        icon: ({ ...props }: LucideProps) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="-3 5 215 287.5"
            className={cn('fill-blue-400 text-[14px]', props.className)}
          >
            <path d="M54.3355 9.3092c16.0514,0 25.3755,0 27.972,0 0,2.8326 0,14.9893 0,36.4699 0,21.4807 0,33.5193 0,36.1159l84.9785 -30.8047c0,8.2618 0,15.6974 0,22.3068l-84.9785 30.8047c0,0.9442 0,2.9507 0,6.0193 0,3.0687 0,5.0751 0,6.0193l46.03 -16.2875 38.9485 -14.5171c0,1.4163 0,5.016 0,10.7993 0,5.7833 0,9.265 0,10.4453 0,0.9442 -0.2361,1.4163 -0.7082,1.4163l-81.7917 29.3884c-0.9442,0.4721 -1.7704,0.9442 -2.4786,1.4163 0,14.3991 0,34.2864 0,59.6619 0,25.3755 0,45.2629 0,59.662 0,0 0,0.118 0,0.3541 0,0.236 0,0.354 0,0.354 21.4807,-2.5965 40.4828,-10.7403 57.0064,-24.4313 18.176,-14.8712 30.3326,-33.4012 36.4699,-55.59 2.5966,-10.1502 3.8949,-20.3004 3.8949,-30.4507 0,0 9.442,0 28.3261,0 0,22.897 -5.5472,44.4957 -16.6416,64.7961 -7.7897,15.5794 -18.412,29.0343 -31.8669,40.3648 -12.5107,11.0944 -26.5558,19.5922 -42.1352,25.4935 -20.3004,7.7897 -41.3089,10.5043 -63.0256,8.1438 0,-15.3433 0,-38.3583 0,-69.045 0,-30.6867 0,-53.8197 0,-69.3991 0,0 -1.5344,0.5902 -4.603,1.7704l-48.5086 17.3498c0,-7.0816 0,-14.5172 0,-22.3069l53.1116 -19.1201c0,-1.4163 0,-5.5472 0,-12.3927 -2.5966,1.1802 -6.0784,2.5966 -10.4453,4.2489 -4.367,1.6524 -7.1406,2.5966 -8.3208,2.8326l-27.9721 10.2683c0,0 -0.7672,0.236 -2.3015,0.7081 -1.5343,0.4721 -2.8916,0.8262 -4.0719,1.0622 0,-11.3304 0,-18.766 0,-22.3068l53.1116 -18.7661c0,-10.3862 0,-24.1952 0,-41.427 0,-17.2317 0,-31.0407 0,-41.427z" />
          </svg>
        ),
        href: '/pricing',
      },
      {
        name: 'blog',
        icon: Newspaper, //
        href: '/blog',
      },
    ],
  },
  { seperator: true },
  {
    name: 'moreResources',
    title: '',
    icon: Plus,
    drawer: true, // This will open a drawer with the children
    children: [
      {
        header: 'Şirket',
        children: [
          {
            name: 'team',
            icon: Users,
            href: '/team',
          },
          {
            name: 'values',
            icon: ListTodo,
            href: '/values',
          },
          {
            name: 'jobs',
            icon: Laptop,
            href: '/jobs',
          },
          {
            name: 'brand',
            icon: Home, // use brand logo
            href: '/brand',
          },
        ],
      },
      { seperator: true },
      {
        header: 'Tablolar',
        children: [
          {
            published: false,
            name: 'create',
            icon: Plus,
            href: '/report/create',
          },
          {
            name: 'project',
            icon: GitPullRequestCreate,
            href: '/report/create',
          },
          {
            name: 'feasibilityReport',
            icon: Scale,
            href: '/report/feasibility-report',
          },
          {
            name: 'financialReport',
            icon: ClipboardMinus,
            href: '/report/financial-report',
          },
          {
            name: 'businessIdea',
            icon: Lightbulb,
            href: '/report/business-idea',
          },
        ],
      },
    ],
  },
  { seperator: true },
  {
    name: 'language',
    title: 'countrySelect',
    icon: Languages,
    drawer: true,
    children: countries as unknown as MenuItem[], //FIXME: fix this
  },
  { seperator: true },
] satisfies MenuItem[];

export const footerMenu = [
  {
    title: 'Sayfa Menüsü',
    children: [
      {
        name: 'home',
        href: '/',
      },
      {
        name: 'howItWorks',
        href: '/how-it-works',
      },
      {
        name: 'solutions',
        href: '/solutions',
      },
      {
        name: 'pricing',
        href: '/pricing',
      },
      {
        name: 'blog',
        href: '/blog',
      },
      {
        name: 'status.title' as keyof Locale['menu'],
        href: 'https://status.acme.com',
      },
    ],
  },
  {
    title: 'Şirket',
    children: [
      {
        name: 'team',
        href: '/team',
      },
      {
        name: 'values',
        href: '/values',
      },
      {
        name: 'jobs',
        href: '/jobs',
      },
      {
        name: 'brand',
        href: '/brand',
      },
    ],
  },
  {
    title: 'Tablolar',
    children: [
      {
        name: 'project',
        href: '/report/projects',
      },
      {
        name: 'feasibilityReport',
        href: '/report/fizibility-report',
      },
      {
        name: 'financialReport',
        href: '/report/financial-report',
      },
      {
        name: 'businessIdea',
        href: '/report/business-idea',
      },
    ],
  },
  {
    title: 'Sosyal',
    children: [
      {
        name: 'Twitter' as keyof Locale['menu'],
        href: 'https://twitter.com/kobimatik',
      },
      {
        name: 'LinkedIn' as keyof Locale['menu'],
        href: 'https://linkedin.com/company/kobimatik',
      },
    ],
  },
] satisfies MenuItem[];

export const authMenu = [
  {
    name: 'dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    primary: true,
  },
  {
    icon: ClipboardMinus,
    name: 'reports',
    href: '/reports',
  },
  {
    icon: User,
    name: 'profile',
    href: '/profile',
  },
  {
    icon: Settings,
    name: 'settings',
    href: '/settings',
  },
] satisfies {
  name: keyof Locale['menu']['auth']['values'];
  icon: React.ElementType<LucideProps, 'svg'>;
  href: string;
  primary?: boolean;
}[];

export function flattenMenu(menuItems: MenuItem[], parentPath: string = ''): MenuItem[] {
  return menuItems.reduce((acc: any, item) => {
    const currentPath = item.href
      ? `${parentPath}/${item.href}`.replace(/\/+/g, '/').replace(/\/$/, '')
      : parentPath;

    const flatItem = { ...item, href: currentPath };

    if ('children' in item && Array.isArray(item.children)) {
      return [...acc, flatItem, ...flattenMenu(item.children as any, currentPath)];
    }

    return [...acc, flatItem];
  }, []);
}
