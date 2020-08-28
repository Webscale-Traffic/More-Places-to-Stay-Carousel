DROP KEYSPACE IF EXISTS more_places_to_stay;

CREATE KEYSPACE more_places_to_stay
             WITH replication = {'class':'SimpleStrategy', 'replication_factor': 2};

USE more_places_to_stay;

CREATE TABLE property (
  id uuid,
  title text,
  image text,
  description text,
  rates smallint,
  ratings smallint,
  number_of_reviews smallint,
  location text,
  superhost boolean,
  PRIMARY KEY (id)
);

CREATE TABLE saved_list (
  list_name text,
  property_id list<int>,
  stays smallint,
  PRIMARY KEY (list_name)
);