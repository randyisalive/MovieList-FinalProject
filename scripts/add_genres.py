import requests

url = "http://127.0.0.1:5000/api/genres/add"

genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi (Science Fiction)",
    "Sport",
    "Thriller",
    "War",
    "Western",
]
print(genres)


requests.post(url, json=genres)
