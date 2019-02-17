from django.db import models
from datetime import datetime, timedelta, timezone
from django.contrib.auth.models import User

class Thing(models.Model):
    name = models.CharField(max_length= 45)
