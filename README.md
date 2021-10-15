# songs-api

This is a CRUD API built with Node.js and PostgreSQL.

Using this API, you can:
* get all the songs
* get a particular song by the ID
* get all the songs of one artist
* add a new song
* update an existing song
* delete an existing song

The API is live and you can access it here - [API link](https://songs-api-cp.herokuapp.com/songs).

**Note**: The `:id` should always be an integer, and `:name` should always be a string in the URLs.

## Routes

Here are the routes:

**Get all songs**

Make a GET request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/songs
```

---

**Retrieve one song**

Make a GET request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/songs/:id
```

`:id` represents the ID of the song. An example endpoint would be "*https://songs-api-cp.herokuapp.com/songs/1*". 

Replace the `:id` with the ID of the song you want to retrieve.

---

**Get all the songs from one artist**

Make a GET request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/artist/:name
```

`:name` represents the name of the artist. An example endpoint would be "*https://songs-api-cp.herokuapp.com/artist/Catalin Pit*".

Replace `:name` with the name of the artist you want to retrieve.

**Note**: See the space between "Catalin" and "Pit". Copy the URL and run it in the browser, rathern than clicking it directly.

---

**Add a new song**

Make a POST request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/songs
```

With the following data:

```
{
    "name": "My song title",
    "genre": "My song genre",
    "released": "2021",
    "artists": ["artist1", "artist2", "artistN"]
}
```

Feel free to change the song details as you like.

---

**Update an existing song**

Make a PUT request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/songs/:id
```

`:id` represents the ID of the song. An example endpoint would be "*https://songs-api-cp.herokuapp.com/songs/1*".

With the following data:

```
{
    "name": "My song title",
    "genre": "My song genre",
    "released": "2021",
    "artists": ["artist1", "artist2", "artistN"]
}
```

Feel free to change the song details as you like.

---

**Delete an existing song**

Make a DELETE request to the following endpoint:

```
https://songs-api-cp.herokuapp.com/songs/:id
```

`:id` represents the ID of the song. An example endpoint would be "*https://songs-api-cp.herokuapp.com/songs/1*". 

Replace the `:id` with the ID of the song you want to delete.

## Run the project locally

If you want to run the project locally, create an `.env` file with the information from `.env.sample`. Then add your database details.

Once you have the database and `.env` file ready, create a table with the following fields:
1. ID - PRIMARY KEY
2. name VARCHAR(30)
3. genre VARCHAR(30)
4. released INTEGER
5. artists TEXT[]

Lastly, after everything's set up, run:

```
node index.js
```

To start the application.