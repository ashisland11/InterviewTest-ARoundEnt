# Project Name

This project is a simple product management app that includes a **Frontend** built with React and Material-UI, and a **Backend** built with Node.js and Express.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

---

## Step-by-Step Instructions

### 1. Clone the Repository

First, clone the repository to your local system:
```bash
git clone git@github.com:ashisland11/InterviewTest-ARoundEnt.git
cd StarterCode

```
## 2. Configure Environment Variables

1. **Navigate to the root of the `backend` folder**.
2. **Create a `.env` file** by copying the example file:

    ```bash
    cp .env.example .env
    ```

3. **Open the `.env` file** and update the variables as needed. Below is an example:

    ```env
    PORT=5000
    NODE_ENV=development
    ```

4. **Save the file**.

---

## 3. Backend Setup

1. **Navigate to the `backend` folder**:

    ```bash
    cd backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the backend server**:

    ```bash
    node index.js
    ```

   The backend server will start on the port specified in `.env` (default is `5000`).

---

## 4. Frontend Setup

1. **Open a new terminal** and navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the frontend development server**:

    ```bash
    npm start
    ```

   The frontend application will start at `http://localhost:3000` by default.

4. If port `3000` is already in use, start the frontend on another port:

    ```bash
    PORT=3001 npm start
    ```

---

## API Endpoints (Backend)

### 1. `GET /api/products`

**Description**: Fetch all products with dynamically generated images.

**Response Example**:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "description": "description 1",
    "price": 100,
    "imageUrl": "https://picsum.photos/200/200?random=1"
  }
]

```
## 2. DELETE /api/products/:id

### Description:
Delete a product by its ID.

### Response Example:
```json
{
  "message": "Product deleted successfully"
}
```
# Troubleshooting

## Backend

If the backend fails to start with an error like `EADDRINUSE`, ensure no other processes are using port 5000:

```bash
lsof -i :5000 s
kill -9 <PID>

```
## Frontend

If the frontend fails to start due to port conflicts, use an alternative port:

```bash
PORT=3001 npm start
```

## .env.example

Below is an example of the .env file:

```bash
PORT=5000
NODE_ENV=development
```

