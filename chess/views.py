from django.shortcuts import render
from django.views.generic import TemplateView, CreateView

# Create your views here.
class ChessView(TemplateView):
    template_name = 'chess/chess.html'

class ChessCreate(CreateView):
   pass 
    
