from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.task_list, name='task_list'),
    path('tasks/<str:task_id>/', views.task_detail, name='task_detail'),
    path('tasks/<str:task_id>/toggle/', views.toggle_task, name='toggle_task'),
    path('stats/', views.task_stats, name='task_stats'),
]