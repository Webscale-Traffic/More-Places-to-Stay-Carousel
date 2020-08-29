## Server API

## Get Home Listing info

  **Gets all Home Listings**

  * GET `/api/homelistings/`

  **Gets Home Listing by id**

  * GET `/api/homelistings/20`

    #Gets the home listing with id 20


**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "title": "String",
      "image": "String",
      "description": "String",
      "avg_rating": "Number",
      "rates": "Number",
      "number_of_reviews": "Number",
      "location": "String",
      "superhost": "boolean",
      "saved_list": "String",
    }
```
  **Gets Similar Homes by id**

  * GET `/api/homelistings/20/similar`

    #Gets similar home listing with id 20

```json
    {
      "property_id": "Number",
      "related_id": "Number"
    }
```

### Add Home Listing
  * POST `/api/homelistings`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
       "id": "Number",
      "title": "String",
      "image": "String",
      "description": "String",
      "avg_rating": "Number",
      "rates": "Number",
      "number_of_reviews": "Number",
      "location": "String",
      "superhost": "boolean",
      "saved_list": "String"
    }
```

### Update Home Listing
  * PATCH `/api/homelistings/25`

    #updates homelisting with id 25

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
       "id": "Number",
      "title": "String",
      "image": "String",
      "description": "String",
      "avg_rating": "Number",
      "rates": "Number",
      "number_of_reviews": "Number",
      "location": "String",
      "superhost": "boolean",
      "saved_list": "String"
    }
```

### Delete Home Listing
  * DELETE `/api/homelisting/33`

    #Deletes home listing with id 33

**Success Status Code:** `204`

### Add saved list to property

  * PATCH `/api/homelistings/22`

    #Adds an list to home listing id 22

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "saved_list": "Number",
    }
```

### Add list to saved_list

  * POST `/api/saved_list/22`

    #Adds an property 22 to saved list

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "property_id": "String",
      "list_id": "Number"
    }
```