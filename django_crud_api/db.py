MYSQL = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "HOST": "localhost",
        "PORT": "3306", 
        "USER": "root",
        "PASSWORD": "",
        "NAME": "test",
        "OPTIONS": {
            "init_command": "SET sql_mode='STRICT_TRANS_TABLES'"
        },
    }
}