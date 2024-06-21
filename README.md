# Django Blog Application

## Description

This project is a Django application designed as a tech blog. It displays articles, includes a pseudo-shop, and offers features such as chess puzzle visualization from Lichess and the implementation of CryptoNet, an online message encryption tool. The backend uses Django and PostgreSQL, while the frontend is built with vanilla JavaScript, GSAP for animations, Bootstrap with Sass for styles, and the Django template engine for rendering templates. It also includes all Django features for user management.

## Features

- **Tech Blog**: Display and manage articles about technology.
- **Pseudo Shop**: A basic shop feature for demonstration purposes.
- **Chess Puzzle Visualization**: Integrate and display chess puzzles from Lichess.
- **CryptoNet**: Encrypt and decrypt messages online using CryptoNet.
- **User Management**: Full-featured user management using Django's built-in features.

## Dependencies

To run this project, you need to install the following main dependencies:

```python

cryptography==41.0.4
Django==4.1.12
```

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YourUsername/YourDjangoBlog.git
    cd YourDjangoBlog
    ```

2. **Set Up the Virtual Environment**:
    ```bash
    python -m venv env
    source env/bin/activate
    ```

3. **Install the Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Set Up the Database**:
    - Make sure you have PostgreSQL installed and running.
    - Create a new PostgreSQL database.
    - Update the `DATABASES` settings in your `settings.py` file with your database credentials.

5. **Apply Migrations**:
    ```bash
    python manage.py migrate
    ```

6. **Create a Superuser**:
    ```bash
    python manage.py createsuperuser
    ```

7. **Collect Static Files**:
    ```bash
    python manage.py collectstatic
    ```

8. **Run the Development Server**:
    ```bash
    python manage.py runserver
    ```

## Usage

1. **Admin Interface**:
    - Access the Django admin interface at `http://localhost:8000/admin`.
    - Log in with the superuser credentials you created.

2. **Blog Management**:
    - Add and manage tech articles through the admin interface.
    - Articles will be displayed on the main blog page.

3. **Pseudo Shop**:
    - Demonstrate basic e-commerce features with a pseudo-shop interface.

4. **Chess Puzzle Visualization**:
    - Integrate chess puzzles from Lichess and visualize them on your site.

5. **CryptoNet**:
    - Use the CryptoNet feature to encrypt and decrypt messages online.

## Frontend

- **JavaScript**: Vanilla JS for basic interactions.
- **GSAP**: Used for animations.
- **Bootstrap with Sass**: For responsive and styled components.
- **Django Template Engine**: For rendering templates.

## Roadmap

- **Enhance Shop Feature**: Improve the pseudo-shop with more functionalities.
- **Advanced User Features**: Add more features for user interaction and engagement.
- **Improved Chess Integration**: Enhance the chess puzzle visualization and add more features.
- **Additional CryptoNet Options**: Expand CryptoNet with more encryption methods and features.

## Contribution

Contributions are welcome! Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the GPL-3.0 License. See the [GPL-3.0](https://github.com/DevprojectEkla/BlogTech/blob/main/LICENSE) file for details.
