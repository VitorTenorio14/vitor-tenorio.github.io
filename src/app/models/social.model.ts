export interface Social {
  /** Nome da rede */
  name: 'GitHub' | 'LinkedIn' | 'Email' | 'Instagram' | 'Twitter';

  /** URL ou mailto */
  url: string;

  /** Ícone (classe, SVG ou emoji) */
  icon: string;

  /** Abrir em nova aba */
  external?: boolean;
  
  ariaLabel?: string;
}
