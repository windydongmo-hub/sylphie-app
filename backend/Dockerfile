# Image de base
FROM python:3.10-slim

# Définir le dossier de travail
WORKDIR /app

# Copier et installer les dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code de l'app
COPY . .

# Exposer le port 8000 pour l’API
EXPOSE 8000

# Lancer l’API
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
