export interface Database {
  public: {
    Tables: {
      inventory_items: {
        Row: {
          id: string;
          name: string;
          description: string;
          quantity: number;
          category: string;
          price: number;
          sku: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string;
          quantity?: number;
          category: string;
          price?: number;
          sku?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          quantity?: number;
          category?: string;
          price?: number;
          sku?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

export type InventoryItem = Database['public']['Tables']['inventory_items']['Row'];
