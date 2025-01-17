import type { LucideIcon } from 'lucide-react';
import type { Locale } from '@/locales/client';

export type MenuItemType =
  | 'link'
  | 'button'
  | 'drawer'
  | 'auth'
  | 'sign-in'
  | 'sign-out'
  | 'separator'
  | 'country'
  | 'header';

export interface BaseMenuItem {
  type: MenuItemType;
  name?: keyof Locale['menu'];
  icon?: LucideIcon;
  href?: string;
  primary?: boolean;
}

export interface HeaderMenuItem extends BaseMenuItem {
  type: 'header';
  header: string;
  children: SubmenuItem[];
}

export interface SubmenuItem extends BaseMenuItem {
  published?: boolean;
}

export interface DrawerMenuItem extends BaseMenuItem {
  type: 'drawer';
  children: (HeaderMenuItem | SeparatorMenuItem | CountryMenuItem | SubmenuItem)[];
}

export interface SeparatorMenuItem {
  type: 'separator';
}

export interface CountryMenuItem extends Omit<BaseMenuItem, 'name'> {
  type: 'country';
  code: string;
  name: string;
  nativeName: string;
  image: string;
}

export type MenuItem =
  | BaseMenuItem
  | HeaderMenuItem
  | DrawerMenuItem
  | SeparatorMenuItem
  | CountryMenuItem;

export type MenuStructure = MenuItem[];
