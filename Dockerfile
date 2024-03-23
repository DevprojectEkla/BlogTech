
# Use the official Python base image
FROM python:3.9-slim

RUN apt-get update \
    && apt-get install -y postgresql-client libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*
# Set the working directory in the container
WORKDIR /MyBlog

# Copy the current directory contents into the container at /app
COPY . /MyBlog

# Install any needed dependencies specified in requirements.txt
# RUN pip install --no-cache-dir -r requirements.txt
RUN pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV SECRET_KEY="d57deb52ed42cfe0ab9f03ae7b4cf18f"
ENV DJANGO_ENV="development"
ENV DJANGO_SUPERUSER_PASSWORD="24ff9c4e5caeabab0c905335ca9964b8"
ENV DJANGO_SUPERUSER_USERNAME="admin"
ENV DJANGO_SUPERUSER_EMAIL="barlavigabriel@gmail.com"

# Run app.py when the container launches
RUN ["python", "manage.py", "makemigrations"]
RUN ["python", "manage.py", "migrate"]
RUN ["python", "manage.py", "createsuperuser", "--noinput"]

CMD ["gunicorn", "--config", "gunicorn.conf.py", "Blog.wsgi:application"]

