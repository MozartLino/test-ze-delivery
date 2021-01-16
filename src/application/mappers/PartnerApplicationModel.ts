export type PartnerApplicationModel = {
  id?: string;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: {
    type: string;
    coordinates: number[][][][];
  };
  address: {
    type: string;
    coordinates: number[];
  };
};

export type PartnerApplicationModelId = {
  id: string;
};
