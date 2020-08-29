DROP KEYSPACE IF EXISTS more_places_to_stay;

CREATE KEYSPACE more_places_to_stay
             WITH replication = {'class':'SimpleStrategy', 'replication_factor': 2};

USE more_places_to_stay;

CREATE TABLE property (
  id uuid,
  location text,
  title text,
  image text,
  description text,
  rates smallint,
  ratings smallint,
  number_of_reviews smallint,
  superhost boolean,
  related_listing map<text,text>
  PRIMARY KEY (id, location )
);

CREATE TABLE saved_list (
  list_name text,
  property map<text,text>,
  stays smallint,
  PRIMARY KEY (list_name)
);