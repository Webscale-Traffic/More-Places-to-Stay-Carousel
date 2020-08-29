DROP DATABASE IF EXISTS more_places_to_stay;

CREATE DATABASE more_places_to_stay;

\c more_places_to_stay

-- CREATE TABLE properties (
--   id SERIAL PRIMARY KEY,
--   title varchar(256),
--   rates smallint,
--   rating numeric,
--   superhost boolean,
--   location varchar(50)
-- );


CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title varchar(256),
  image varchar(100),
  description varchar(75),
  rating numeric,
  rates smallint,
  number_of_reviews smallint,
  location_id smallint,
  superhost boolean,
  saved_list varchar(100),
  FOREIGN KEY (location_id) REFERENCES locations(id)
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

-- CREATE TABLE images (
--   id SERIAL PRIMARY KEY,
--   home_id int NOT NULL,
--   image varchar,
--   description varchar,
--   CONSTRAINT fk_homes
--   FOREIGN KEY (home_id)
--   REFERENCES properties(id)
-- );

-- CREATE TABLE ratings (
--   id SERIAL PRIMARY KEY,
--   home_id int NOT NULL,
--   number_of_reviews int,
--    CONSTRAINT fk_homes
--   FOREIGN KEY (home_id)
--   REFERENCES homes(id)
-- );
