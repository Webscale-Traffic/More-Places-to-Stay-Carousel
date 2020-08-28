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
      "property_id": "Number",
      "description": "String",
      "title": "String",
      "rate": "Number",
      "avgRating": "Number",
      "image": "String",
      "ratings": "Number",
      "superHost": "boolean",
      "savedList": "String",
      "location": "String"
    }
```

### Add Home Listing
  * POST `/api/homelistings`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "property_id": "Number",
      "description": "String",
      "title": "String",
      "rate": "Number",
      "avgRating": "Number",
      "image": "String",
      "ratings": "Number",
      "superHost": "boolean",
      "savedList": "String",
      "location": "String"
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
      "property_id": "Number",
      "description": "String",
      "title": "String",
      "rate": "Number",
      "avgRating": "Number",
      "image": "String",
      "ratings": "Number",
      "superHost": "boolean",
      "savedList": "String",
      "location": "String"
    }
```

### Delete Home Listing
  * DELETE `/api/homelisting/33`

    #Deletes home listing with id 33

**Success Status Code:** `204`

### Add image to Home listing
  * POST `/api/homelistings/22/image`

    #Adds an image url to the image table with home listing id 22

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "homeListing_id": "Number",
      "description": "String",
      "posted": "YYYY-MM-MM",
    }
```

### Add saved list to property

  * POST `/api/homelistings/22/saved_list`

    #Adds an list to home listing id 22

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "list_name": "String",
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
    }
```