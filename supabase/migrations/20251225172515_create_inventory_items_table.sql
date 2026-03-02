/*
  # Create Inventory Management System

  1. New Tables
    - `inventory_items`
      - `id` (uuid, primary key) - Unique identifier for each item
      - `name` (text) - Name of the inventory item
      - `description` (text) - Detailed description of the item
      - `quantity` (integer) - Current stock quantity
      - `category` (text) - Item category (e.g., Electronics, Furniture, etc.)
      - `price` (numeric) - Price per unit
      - `sku` (text) - Stock Keeping Unit identifier
      - `created_at` (timestamptz) - Timestamp when item was added
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `inventory_items` table
    - Add policy for authenticated users to read all inventory items
    - Add policy for authenticated users to insert new inventory items
    - Add policy for authenticated users to update inventory items
    - Add policy for authenticated users to delete inventory items
*/

CREATE TABLE IF NOT EXISTS inventory_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  quantity integer NOT NULL DEFAULT 0,
  category text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  sku text UNIQUE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inventory_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view all inventory items"
  ON inventory_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert inventory items"
  ON inventory_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update inventory items"
  ON inventory_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete inventory items"
  ON inventory_items FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_inventory_items_category ON inventory_items(category);
CREATE INDEX IF NOT EXISTS idx_inventory_items_created_at ON inventory_items(created_at DESC);