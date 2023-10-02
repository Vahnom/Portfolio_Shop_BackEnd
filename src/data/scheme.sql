CREATE TABLE products (
  id integer PRIMARY KEY auto_increment not null ,
  title varchar(255),
  price integer,
  description varchar(255),
  product_format varchar(255),
  user_id integer
);

CREATE TABLE users (
  id integer PRIMARY KEY  auto_increment not null,
  username varchar(255),
  surname varchar(255),
  phone varchar(255),
  paying_method_id integer,
  created_at timestamp
);

CREATE TABLE paying_methods (
  id integer PRIMARY KEY  auto_increment not null,
  bank_account integer,
  pay_pal varchar(255),
  cash_on_delivery char(1)
);

CREATE TABLE relation_product_category (
  product_id integer,
  category_id integer
);

CREATE TABLE style_category (
  id integer PRIMARY KEY  auto_increment not null,
  type varchar(255),
  state char(1)
);

CREATE TABLE shopping_chart (
  cart_id int PRIMARY KEY  auto_increment not null,
  user_id int,
  product_id int,
  product_quantity int,
  paying_method_id int
);
