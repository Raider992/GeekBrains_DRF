from django.core.management.base import BaseCommand
from authapp.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser('admin', 'a123@mail.ru', 'P@ssw0rd')

        for i in range(3):
            user = User.objects.create_user(username=f'test_user{i}', password='a1234321', email=f'testuser{i}@mail.ru')
            user.is_superuser = False
            user.is_staff = False
            user.save()