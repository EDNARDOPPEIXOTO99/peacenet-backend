export interface Post {
  id?: number;
  user_id: number;
  content: string;
  module: 'PAZ' | 'SOLIDARIEDADE' | 'RELACOES_HUMANAS';
  conflict_tag?: string;
  created_at?: Date;
}