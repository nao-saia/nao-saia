export interface Establishment {
  id: string,
  fantasyName: string
  companyName: string
  phones: string[],
  ads: string[],
  address: string,
  cnpj: string,
  createdAt: Date,
  updateAt: Date,
  acceptTerms: boolean,
  active: boolean,
  logo: string,
  whatsapp: string,
  ifood: boolean,
  uberEats: boolean,
  rappi: boolean,
  ownDelivery: true,
  displayAddress: boolean,
  note: string
}
