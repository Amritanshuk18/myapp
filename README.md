# Full-Stack To-Do List Application
This repository hosts a full-stack to-do list application, built with a React frontend and a Django backend using Django REST Framework (DRF). The app allows users to manage their to-dos with basic CRUD functionality: adding, updating, deleting, and marking tasks as completed. This project demonstrates a complete integration of frontend and backend for a modern, responsive, and functional to-do application.



Repository Structure

Back Branch: Contains the code for the backend (Django) application.

Master Branch: Contains the code for the frontend (React) application.



Features

Add to-do items with a description

Edit to-do items in-place

Delete to-do items



Tech Stack

Frontend: React, Axios

Backend: Django, Django REST Framework (DRF)

Database: SQLite (default) or PostgreSQL (optional)



Setup Instructions

To run this application locally, follow these steps:



Backend Setup

Navigate to the backend directory:

cd backend



Create a virtual environment and activate it:

python -m venv venv

venv\Scripts\activate      



Install the required Python packages:

pip install -r requirements.txt



Run migrations to set up the database:

python manage.py makemigrations

python manage.py migrate



Start the Django development server:

python manage.py runserver

The API should now be running at http://localhost:8000/api/my_todo/.



Frontend Setup

Navigate to the frontend directory:

cd ../frontend



Install the dependencies:

npm install



Configure the proxy to backend in package.json:

"proxy": "http://localhost:8000"



Start the React development server:

npm start

The frontend should now be accessible at http://localhost:3000/.



Usage

Adding To-Do: Use the input form to add a new to-do.

Editing To-Do: Click on the "Edit" button next to a to-do to modify it.

Deleting To-Do: Click on the "Delete" button to remove a to-do.

