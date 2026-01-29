
export type CondoType = 'nascente' | 'aguas';

export interface CondoConfig {
  id: CondoType;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    button: string;
    buttonHover: string;
  };
  details: {
    totalLots: number;
    lotSize: number;
    headline: string;
    subheadline: string;
  };
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  benefit: string;
  image: string;
  category: 'natureza' | 'lazer' | 'conveniencia';
}

export type InstitutionalTab = 'historia' | 'filosofia' | 'projeto';
