-- Create a new table 'products' with a primary key and columns
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT NOT NULL
);
-- Insert sample data into the 'products' table
INSERT INTO products (name, price, description) VALUES
('Producto 1', 19.99, 'Descripción del producto 1'),
('Producto 2', 29.99, 'Descripción del producto 2'),
('Producto 3', 39.99, 'Descripción del producto 3');
