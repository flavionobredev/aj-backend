
/**
 * Fornecedor/distribuidora da campanha
 */
export interface Supplier {

  /**
   * Código do usuário
   */
  userCode: string;

  /**
   * Nome do fornecedor/distribuidora
   */
  name: string;

  /**
   * Descrição
   */
  description: string;

  /**
   * Ids dos produtos do fornecedor/distribuidora
   */
  products: string[]

  /**
   * Link da imagem do fornecedor/distribuidora
   */
  banner?: string;
}