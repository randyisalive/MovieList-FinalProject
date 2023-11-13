import bcrypt


def verify_password(input_password, hashed_password):
    return bcrypt.checkpw(
        input_password.encode("utf-8"), hashed_password.encode("utf-8")
    )


def generate_hash(input_password):
    password = input_password.encode("utf-8")
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password, salt)
    return hashed_password
