# 🎭 SentimentScope

**SentimentScope** es una aplicación web para análisis de sentimientos que determina si un texto expresa emociones positivas o negativas. Combina un backend potente basado en ML.NET con una interfaz de usuario intuitiva desarrollada en Angular.

<p align="center">
  <img 
    src="https://res.cloudinary.com/dcldzjq9s/image/upload/v1745687074/ckkit6yceralsvybnplk.png" 
    alt="SentimentScope Banner"
    width="300"
  />
</p>



## ✨ Características

- Análisis de sentimientos para textos en español
- Clasificación binaria (Positivo/Negativo)
- Interfaz de usuario intuitiva y atractiva
- API REST para integraciones con otros sistemas

## 🧠 Tecnologías

### Backend
- ASP.NET Core para la API REST
- ML.NET para el modelo de machine learning
- Algoritmo de regresión logística (SDCA)
- Técnicas de procesamiento de lenguaje natural

### Frontend
- Angular con Material Design
- Componentes reactivos
- Diseño responsive
- Visualización intuitiva de resultados

## 📊 Cómo funciona

1. El usuario ingresa un texto en la interfaz web
2. La aplicación envía el texto al backend mediante una llamada API
3. El modelo de machine learning procesa el texto y clasifica su sentimiento
4. El resultado se muestra en la interfaz con un formato visual adecuado

## 🚀 Endpoints API

### POST /api/Sentiment/analyze
```json
{
  "comment": "La atención al cliente fue excelente"
}
```

Respuesta:
```json
{
  "sentiment": "Positivo"
}
```

## 📋 Requisitos

- .NET 7.0 o superior
- Node.js y Angular CLI
- Base de datos de entrenamiento (CSV con formato: `Comment,Sentiment`)

## 🛠️ Instalación

### Backend
```bash
cd Backend
dotnet restore
dotnet run
```

### Frontend
```bash
cd Frontend
npm install
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 👨‍💻 Sobre el proyecto

Desarrollé SentimentScope como parte de mi aprendizaje en inteligencia artificial, siendo mi primera implementación práctica después de comenzar el curso de AI Practitioner. Elegí la combinación de .NET Core y Angular para aprovechar lo mejor de ambos mundos: un backend potente con capacidades de ML y un frontend moderno y reactivo.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
