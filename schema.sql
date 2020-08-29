DROP DATABASE IF EXISTS more_places_to_stay;

CREATE DATABASE more_places_to_stay;

\c more_places_to_stay

CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title varchar(256),
  image varchar(100),
  description varchar(75),
  avg_rating numeric,
  rates varchar(5),
  number_of_reviews smallint,
  location varchar(100),
  superhost boolean,
  saved_list smallint
);

CREATE TABLE similiar_properties (
property_id int NOT NULL,
related_id int NOT NULL,
FOREIGN KEY (property_id) REFERENCES properties(id),
FOREIGN KEY (related_id) REFERENCES properties(id)
);

CREATE TABLE saved_list (
  id SERIAL PRIMARY KEY,
  list_name varchar(60),
  list_id smallint,
  FOREIGN KEY (list_id) REFERENCES properties(id)
);

