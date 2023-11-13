from db import db_connection


def getAllActors():
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM actors")
    actors = cur.fetchall()
    db.close()
    cur.close()
    return actors


def getActors(movie_id):
    db = db_connection()
    cur = db.cursor()
    limit = 6
    cur.execute(
        "SELECT * FROM actors INNER JOIN casts ON actors.id = casts.actor_id WHERE movie_id = ? LIMIT ?",
        (
            movie_id,
            limit,
        ),
    )
    actors = cur.fetchall()
    cur.close()
    db.close()
    return actors
