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
   * Valor do produto
   */
  price: number;

  /**
   * Tamanho do produto no caso de roupas
   */
  size?: Product.Sizes;

  /**
   * Referencia do produto
   */
  ref: string;
}

export namespace Product {
  export type ClothingSize = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'XG';
  export type BootSize =
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46;

  export type Sizes = ClothingSize | BootSize;
}
