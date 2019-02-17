from django.http import HttpResponse
from .models import Thing
from django.shortcuts import render


def index(request):
    thing = Thing.objects.all()
    context = {'thing': thing}
    return render(request, 'personalsite/base.html', context)
