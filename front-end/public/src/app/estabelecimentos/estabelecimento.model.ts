export interface Estabelecimento {
    id: string,
    nomeFantasia: string
    razaoSocial: string   
    categorias: string[],
    endereço: string,
    bairro: string,
    cep: string,
    logo: string,
    anuncios: string[],
    whatsapp: string,
    telefones: string[],
    ifood: boolean,
    uberEats: boolean,
    rappi: boolean,
    exibirEndereco: boolean
  }
  