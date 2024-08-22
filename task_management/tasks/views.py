from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime
import uuid

# In-memory storage
tasks = []

@api_view(['GET', 'POST'])
def task_list(request):
    if request.method == 'GET':
        return Response(tasks)
    elif request.method == 'POST':
        task = {
            'id': str(uuid.uuid4()),
            'title': request.data.get('title'),
            'completed': False,
            'created_at': datetime.now().isoformat()
        }
        tasks.append(task)
        return Response(task, status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def task_detail(request, task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return Response(status=status.HTTP_404_NOT_FOUND)

    tasks.remove(task)
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def toggle_task(request, task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return Response(status=status.HTTP_404_NOT_FOUND)

    task['completed'] = not task['completed']
    return Response(task)

@api_view(['GET'])
def task_stats(request):
    total_tasks = len(tasks)
    completed_tasks = sum(1 for task in tasks if task['completed'])
    return Response({"total": total_tasks, "completed": completed_tasks})