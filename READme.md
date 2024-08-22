# Task Management Application

## Overview

This is a simple Task Management application built with a React frontend and a Django backend. It allows users to create, read, update, and delete tasks, as well as view basic statistics about their tasks.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Delete tasks
- View total number of tasks and completed tasks
- Responsive design using Material-UI

## Tech Stack

- Frontend: React, Material-UI
- Backend: Django
- API: Django Rest Framework
- State Management: React Hooks
- HTTP Client: Axios

## Project Structure

```
task-management-project/
│
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   └── index.js         # React entry point
│   ├── package.json
│   └── .env                 # Environment variables
│
└── backend/                 # Django backend
    ├── task_management/     # Django project directory
    │   └── settings.py      # Django settings
    ├── tasks/               # Django app directory
    │   ├── views.py         # API views
    │   └── urls.py          # API URL configurations
    └── manage.py            # Django management script
```

## Setup and Installation

### Backend (Django)

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install django djangorestframework django-cors-headers
   ```

4. Run the Django development server:
   ```
   python manage.py runserver
   ```

The backend server should now be running at `http://localhost:8000`.

### Frontend (React)

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Create a `.env` file in the frontend directory and add:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```

4. Start the React development server:
   ```
   npm start
   ```

The frontend application should now be running at `http://localhost:3000`.

## Usage

- To add a task, type the task title in the input field and click "Add Task" or press Enter.
- To mark a task as complete or incomplete, click the checkbox next to the task.
- To delete a task, click the delete icon next to the task.
- The total number of tasks and completed tasks are displayed at the bottom of the task list.

## API Endpoints

- `GET /api/tasks/`: Retrieve all tasks
- `POST /api/tasks/`: Create a new task
- `DELETE /api/tasks/<id>/`: Delete a specific task
- `POST /api/tasks/<id>/toggle/`: Toggle the completion status of a task
- `GET /api/stats/`: Get task statistics (total and completed counts)

## Development

- The backend uses in-memory storage for tasks, so data will be lost when the server restarts. This is suitable for development but not for production use.
- For production deployment, consider implementing proper database storage and security measures.

## Contributing

Feel free to fork the project, create a feature branch, and send us a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).