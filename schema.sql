DROP DATABASE IF EXISTS more_places_to_stay;

CREATE DATABASE more_places_to_stay;

\c more_places_to_stay

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  location varchar(100)
);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title varchar(256),
  image varchar(100),
  description varchar(75),
  avg_rating numeric,
  rates varchar(5),
  number_of_reviews smallint,
  location_id smallint,
  superhost boolean,
  saved_list smallint NULL,
  FOREIGN KEY (location_id) REFERENCES locations(id)
);

CREATE TABLE similiar_properties (
property_id int NOT NULL,
related_id int NOT NULL
-- related_id int NOT NUll,
-- FOREIGN KEY (property_id) REFERENCES properties(id),
-- FOREIGN KEY (location_id) REFERENCES locations(id)
-- FOREIGN KEY (related_id) REFERENCES properties(id)
);

CREATE TABLE saved_list (
  id smallint,
  list_name varchar(60),
  pop_id int,
  FOREIGN KEY (pop_id) REFERENCES properties(id)
);

-- copy location csv into location table
COPY locations
FROM '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/location.csv'
DELIMITER ',' CSV HEADER;

-- copy properties csv into properties table
COPY properties (id, title, image, description, avg_rating, rates, number_of_reviews, location_id, superhost)
FROM '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/property.csv'
DELIMITER ',' CSV HEADER;

-- copy saved_list csv into saved_list table
COPY saved_list
FROM '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/list.csv'
DELIMITER ',' CSV HEADER;


-- copy similiar_properties csv into similiar_properties table
COPY similiar_properties
FROM '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/sim.csv'
DELIMITER ',' CSV HEADER;

-- add forign key to similiar_properties
ALTER TABLE similiar_properties ADD CONSTRAINT fk_links_propertyId FOREIGN KEY (property_id) REFERENCES properties(id);

ALTER TABLE similiar_properties ADD CONSTRAINT fk_links_property_related FOREIGN KEY (related_id) REFERENCES properties(id);



