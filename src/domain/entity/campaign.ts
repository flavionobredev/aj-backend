import { Product } from './products';

/**
 * Esta entidade está relacionada ao modelo de dados de uma campanha.
 * Cada distribuidora possuí seu modelo de campanha, mas existem dados
 * que são comuns entre todas elas, como: periodo de vigência, produtos,
 * valor total, etc
 */
export interface Campaign {
  /**
   * Titulo da campanha
   */
  title: string;

  /**
   * Descrição da campanha
   */
  description: string;

  /**
   * Periodo da campanha
   */
  period: {
    start: string;
    end: string;
  };

  /**
   * Ids dos produtos da campanha
   */
  products: Campaing.CampaingProduct[];

  /**
   * Estados possíveis da campanha:
   * - ACTIVE: campanha ativa e recebendo pedidos
   * - INACTIVE: campanha inativa e não recebendo pedidos, pronta para fechar
   */
  state: Campaing.States;

  /**
   * Fornecedor/distribuidora da campanha
   */
  supplierid: string;
}

export namespace Campaing {
  export enum States {
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
  }

  export type CampaingProduct = Omit<Product, 'description'>;
}
