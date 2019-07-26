import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
    {
    title: 'Update Form',
    icon: 'nb-gear',
    link: '/pages/updateForm',
    home: true,
  },
  {
    title: 'Logout',
    icon: 'nb-locked',
    link: '/auth/logout',
  },
  {
    title: 'PowerCARD API',
    group: true,
  },
  {
    title: 'PowerCARD-Issuer',
    icon: 'nb-menu',
    children: [
      {
        title: 'TransferAccoutToAccount API',
        link: '/pages/transfer',
      },
     {
        title: 'GetCardDetails API',
        link: '/pages/getCardDetails',
      },
    {
        title: 'CreateDebitCard API',
        link: '/pages/createDebitCard',
    },
    {
        title: 'GetAppDocuments API',
        link: '/pages/getAppDocuments',
    },
    ],
  }
];
