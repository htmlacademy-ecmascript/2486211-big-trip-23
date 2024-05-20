import { getRandomElements } from '../utils/common.js';

const mockPoints = [
  {
    id: '13478420-d6f6-4e7c-b5fc-4402e9db8062',
    basePrice: 5973,
    dateFrom: '2024-04-22T07:42:07.283Z',
    dateTo: '2024-04-24T08:14:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: true,
    offers: [
      '11c3773a-228d-47be-ae58-63961842c467',
      '5187878e-9715-4dff-8b8a-c76ed11fe6c7',
      'd6f50303-e20a-4d5b-bb9c-754a1cff927b'
    ],
    type: 'bus'
  },
  {
    id: '0eb30cae-3d43-4d3d-b19f-1cc45d0a379b',
    basePrice: 3690,
    dateFrom: '2024-04-25T20:03:07.283Z',
    dateTo: '2024-04-26T13:13:07.283Z',
    destination: 'e4c577d2-a3f0-4750-b345-fb12ed7a881f',
    isFavorite: false,
    offers: [
      'f3fb10e2-5b45-422e-8080-9edb04453635',
      'ef1a8bb1-c1ea-4daa-9967-c6b99f902986',
      'f58e084e-1d11-4db2-9c17-0499ef5c8a24',
      'db891858-8a2c-4afe-be6a-cd5eb5c10f7f'
    ],
    type: 'check-in'
  },
  {
    id: '9bba0c4b-2fd1-4d9d-b65f-4d82a1212ef8',
    basePrice: 5261,
    dateFrom: '2024-04-27T17:47:07.283Z',
    dateTo: '2024-04-29T16:26:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: true,
    offers: [
      'aa0c58a3-b51b-4fbe-affd-3eef397c65c3',
      'af9b6c79-1078-4b6c-be27-0f8d02f1a2fd',
      'e30252e9-7bcc-4c1f-a4b5-c62ef1fd1aa8',
      '42796162-3fba-4dde-81d4-4db8ffd25f7e',
      'c10af2af-6fc2-4c63-a3fc-7bafa8147d25',
      '82b128ae-7358-44f7-9465-a213f536c4bc'
    ],
    type: 'ship'
  },
  {
    id: 'd5cce924-c8d6-471b-83b4-b0eb9e3edbdb',
    basePrice: 602,
    dateFrom: '2024-04-30T22:16:07.283Z',
    dateTo: '2024-05-02T16:02:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: false,
    offers: [
      'd6f50303-e20a-4d5b-bb9c-754a1cff927b'
    ],
    type: 'bus'
  },
  {
    id: 'f3953904-97cc-4ed4-8937-33ed30a9a309',
    basePrice: 1259,
    dateFrom: '2024-05-03T16:49:07.283Z',
    dateTo: '2024-05-04T23:46:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: true,
    offers: [
      '0354fbfc-de2d-4b50-9da8-597ee5554ca9',
      'afcbb72a-7b35-4b16-84e2-04cb078ffd70',
      '205a1233-58bd-4cea-829e-0f48e0fc8de6',
      '1180de3d-4e93-4d86-9b6b-eb30951ddf18',
      '07fad9b8-76f2-42a8-826e-85d0e045a21b'
    ],
    type: 'flight'
  },
  {
    id: 'c55d6856-d4af-475f-9638-c6caf27dfd69',
    basePrice: 1086,
    dateFrom: '2024-05-06T19:45:07.283Z',
    dateTo: '2024-05-07T07:16:07.283Z',
    destination: 'd38732da-b1dc-44ee-b139-541c722f9e13',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '79b5abc9-976e-4b61-a45b-bc4c5f6632f9',
    basePrice: 4090,
    dateFrom: '2024-05-08T10:03:07.283Z',
    dateTo: '2024-05-09T06:18:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: true,
    offers: [
      '82009787-deca-4eee-a426-bc83b497a6e6',
      'e0fd3848-6eed-4e81-9cd6-8b8108314f02'
    ],
    type: 'restaurant'
  },
  {
    id: 'ed1b082c-a6c0-4f25-b79d-7c5b3270ea28',
    basePrice: 7209,
    dateFrom: '2024-05-10T14:37:07.283Z',
    dateTo: '2024-05-12T02:34:07.283Z',
    destination: 'ad6c5c6a-9b1a-4666-a993-11e1e7096ba8',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: 'f7bba54b-0479-4f87-855a-4a8110cda428',
    basePrice: 874,
    dateFrom: '2024-05-13T09:05:07.283Z',
    dateTo: '2024-05-13T20:24:07.283Z',
    destination: '2857178d-6f63-48a3-8871-5e81577bc39a',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: '402a73dc-00a9-4fd8-b3b2-6e775f8edcc7',
    basePrice: 4720,
    dateFrom: '2024-05-15T05:25:07.283Z',
    dateTo: '2024-05-16T02:31:07.283Z',
    destination: '5282e5ca-e345-4cd3-b34f-870599815323',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'eec67911-6234-4f26-8837-8f9905602973',
    basePrice: 3307,
    dateFrom: '2024-05-16T13:01:07.283Z',
    dateTo: '2024-05-17T21:32:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'ae9cf386-5021-4215-a2a9-b3cf90252cbb',
    basePrice: 6309,
    dateFrom: '2024-05-19T03:57:07.283Z',
    dateTo: '2024-05-20T00:19:07.283Z',
    destination: 'ad6c5c6a-9b1a-4666-a993-11e1e7096ba8',
    isFavorite: false,
    offers: [
      'd6f50303-e20a-4d5b-bb9c-754a1cff927b'
    ],
    type: 'bus'
  },
  {
    id: '8d92e94a-7e68-4ead-8822-7075125911a8',
    basePrice: 7936,
    dateFrom: '2024-05-21T06:53:07.283Z',
    dateTo: '2024-05-22T22:22:07.283Z',
    destination: 'e4c577d2-a3f0-4750-b345-fb12ed7a881f',
    isFavorite: false,
    offers: [
      '58063ad8-405d-4ff2-9e5d-d17820cfbcbd'
    ],
    type: 'drive'
  },
  {
    id: '4fe8b429-7e74-4622-903e-92b6d0022e2d',
    basePrice: 8163,
    dateFrom: '2024-05-24T16:16:07.283Z',
    dateTo: '2024-05-25T05:30:07.283Z',
    destination: 'ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: 'bf235c00-2026-4b6e-ab30-23d315888e0a',
    basePrice: 4963,
    dateFrom: '2024-05-26T10:13:07.283Z',
    dateTo: '2024-05-28T07:56:07.283Z',
    destination: 'd38732da-b1dc-44ee-b139-541c722f9e13',
    isFavorite: false,
    offers: [
      'f58e084e-1d11-4db2-9c17-0499ef5c8a24',
      'db891858-8a2c-4afe-be6a-cd5eb5c10f7f'
    ],
    type: 'check-in'
  },
  {
    id: '2806f782-41b7-4f06-a1d9-3ac34074136b',
    basePrice: 457,
    dateFrom: '2024-05-28T17:15:07.283Z',
    dateTo: '2024-05-29T02:54:07.283Z',
    destination: 'e3141dc4-c08b-4a46-8f3c-ed52c1349f4a',
    isFavorite: true,
    offers: [
      '1d6b077f-5ca8-4f77-9afb-14a405b1c5e4'
    ],
    type: 'train'
  },
  {
    id: '58597bd3-ccfd-49be-8a09-ad36aa7c4428',
    basePrice: 3169,
    dateFrom: '2024-05-30T07:00:07.283Z',
    dateTo: '2024-05-31T23:34:07.283Z',
    destination: 'e3141dc4-c08b-4a46-8f3c-ed52c1349f4a',
    isFavorite: false,
    offers: [
      '82009787-deca-4eee-a426-bc83b497a6e6',
      'e0fd3848-6eed-4e81-9cd6-8b8108314f02'
    ],
    type: 'restaurant'
  },
  {
    id: '31be6f48-88ed-4961-b9fc-897652dfc2af',
    basePrice: 9350,
    dateFrom: '2024-06-01T17:22:07.283Z',
    dateTo: '2024-06-02T01:55:07.283Z',
    destination: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '7e38c638-b6d9-4193-a7d6-cde5d1448630',
    basePrice: 1813,
    dateFrom: '2024-06-02T13:23:07.283Z',
    dateTo: '2024-06-03T23:17:07.283Z',
    destination: 'ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09',
    isFavorite: true,
    offers: [
      'f3fb10e2-5b45-422e-8080-9edb04453635',
      'ef1a8bb1-c1ea-4daa-9967-c6b99f902986',
      'f58e084e-1d11-4db2-9c17-0499ef5c8a24',
      'db891858-8a2c-4afe-be6a-cd5eb5c10f7f'
    ],
    type: 'check-in'
  },
  {
    id: '3fc5a43a-aab2-47dd-bfd4-b7dff5a38380',
    basePrice: 6340,
    dateFrom: '2024-06-05T11:45:07.283Z',
    dateTo: '2024-06-07T01:43:07.283Z',
    destination: '47016e78-d41a-40a9-986a-14f1b5630a6d',
    isFavorite: true,
    offers: [
      '5187878e-9715-4dff-8b8a-c76ed11fe6c7',
      'd6f50303-e20a-4d5b-bb9c-754a1cff927b'
    ],
    type: 'bus'
  },
  {
    id: '3c053bd6-4910-49ca-820a-e346d8549e8e',
    basePrice: 9298,
    dateFrom: '2024-06-07T16:03:07.283Z',
    dateTo: '2024-06-09T05:33:07.283Z',
    destination: 'efdc3a59-a5eb-425f-9fa0-f22204146e05',
    isFavorite: true,
    offers: [
      '11c3773a-228d-47be-ae58-63961842c467',
      '5187878e-9715-4dff-8b8a-c76ed11fe6c7',
      'd6f50303-e20a-4d5b-bb9c-754a1cff927b'
    ],
    type: 'bus'
  },
  {
    id: '36ad7eca-e869-4a8f-b86e-386d85736fc4',
    basePrice: 6044,
    dateFrom: '2024-06-10T18:10:07.283Z',
    dateTo: '2024-06-12T18:40:07.283Z',
    destination: 'e3141dc4-c08b-4a46-8f3c-ed52c1349f4a',
    isFavorite: true,
    offers: [
      '58063ad8-405d-4ff2-9e5d-d17820cfbcbd'
    ],
    type: 'drive'
  },
  {
    id: '43dcbd1f-9948-49ce-a139-837b96553fa6',
    basePrice: 3473,
    dateFrom: '2024-06-14T05:21:07.283Z',
    dateTo: '2024-06-15T12:34:07.283Z',
    destination: '2857178d-6f63-48a3-8871-5e81577bc39a',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'fbf65d1f-ec66-40a7-b9cb-3b0fcaabd5b2',
    basePrice: 7852,
    dateFrom: '2024-06-17T08:59:07.283Z',
    dateTo: '2024-06-18T07:53:07.283Z',
    destination: '5282e5ca-e345-4cd3-b34f-870599815323',
    isFavorite: false,
    offers: [
      '3542e217-78bb-407c-a27a-4e0082634a0f',
      'dbd7cb5c-d974-433e-a1e2-7498c143d296',
      '64da6b2f-43e6-4aae-a52f-1503cf0e6f9a'
    ],
    type: 'taxi'
  },
  {
    id: '5328cfe2-c9f8-47b8-b958-ff35c7680d8d',
    basePrice: 2921,
    dateFrom: '2024-06-19T13:19:07.283Z',
    dateTo: '2024-06-20T18:26:07.283Z',
    destination: 'ad6c5c6a-9b1a-4666-a993-11e1e7096ba8',
    isFavorite: true,
    offers: [
      '205a1233-58bd-4cea-829e-0f48e0fc8de6',
      '1180de3d-4e93-4d86-9b6b-eb30951ddf18',
      '07fad9b8-76f2-42a8-826e-85d0e045a21b'
    ],
    type: 'flight'
  }
];

const getRandomPoints = getRandomElements(mockPoints);

export { getRandomPoints };

