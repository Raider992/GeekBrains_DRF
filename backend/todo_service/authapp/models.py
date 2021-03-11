from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    avatar = models.ImageField(upload_to='users_avatars', blank=True)
    birthdate = models.DateField(auto_now=False, blank=True, null=True)

    def __str__(self):
        return self.username
