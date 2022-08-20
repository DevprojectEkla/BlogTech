from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class ChessView(TemplateView):
    template_name = 'chess/chess.html'
    