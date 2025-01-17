/*
{  "id": "yzugzlxshymr62c2k19wuapy",  "name": "Mehmet Yiğit",  "slug": "mehmet-yigit-wcl1af98",  "logo": null,  "createdAt": "2025-01-10T20:33:40.000Z",  "metadata": null,  "invitations": [],  "members": [    {      "id": "ho1kszo5hy59ojeduqdve54n",      "organizationId": "yzugzlxshymr62c2k19wuapy",      "userId": "Hd2Wo1AG1V1qmGsxEZCyE1YnfpPWNR2I",      "role": "owner",      "createdAt": "2025-01-10T20:33:40.000Z",      "user": {        "id": "Hd2Wo1AG1V1qmGsxEZCyE1YnfpPWNR2I",        "name": "Mehmet Yiğit",        "email": "mehmet@gmail.com",        "image": null      }    }  ]}
 */

import type { User } from 'better-auth';

export type Organization = {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  createdAt: string;
  metadata: string | null;
  invitations: Invitations[];
  members: Member[];
};

export type Member = {
  id: string;
  organizationId: string;
  userId: string;
  role: string;
  createdAt: string;
  user: User;
};

export type Invitations = {
  id: string;
  organizationId: string;
  email: string;
  role: string;
  status: string;
  expiresAt: string;
  createdAt: string;
};
