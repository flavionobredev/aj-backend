import { Size } from '../models/sizes.model'
/**
 * Entidade para produtos dos fornecedores.
 * Esta entidade contém dados que são comuns a todos os fornecedores,
 */
export interface Product {
  /**
   * Nome do produto
   */
  name: string;

  /**
   * Descrição do produto
   */
  description: string;

  /**
   * Id do fornecedor/distribuidora
   */
  supplier: string;

  /**
   * Tamanho do produto no caso de roupas
   */
  size?: Size.AllSizes;

  /**
   * Referencia do produto
   */
  ref: string;
}
