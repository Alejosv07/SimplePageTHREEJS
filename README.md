# SimplePageTHREEJS (Interactive Cel-Shaded Portfolio)


This is a modern, interactive web experience built using **Three.js** for 3D rendering. It showcases a simple scrolling portfolio/landing page that features cel-shaded geometric objects, a dynamic galaxy background, and real-time color controls.

---

## 🌐 Live Demo

You can visit and interact with the live deployed version of this project here:
`https://alejosv07.github.io/SimplePageTHREEJS/`*

---

## ✨ Features

* **Cel-Shaded Styling:** Uses `THREE.MeshToonMaterial` along with a custom gradient map (`img/gradients/3.jpg`) to achieve a distinct, cartoon-like, cel-shaded look on the 3D models.
* **Interactive Scroll Navigation:** The camera's vertical position moves seamlessly as the user scrolls the page, creating a "fly-through" effect between the different 3D meshes (Dodecahedron, Torus, Cone).
* **Mouse Interaction:** The camera features subtle parallax movement based on the mouse position, adding depth and responsiveness to the scene.
* **Dynamic Galaxy Background:** A starfield is generated using `THREE.Points` for a space/sci-fi aesthetic.
* **Real-time Color Control:** Integration of the `lil-gui` library allows users to dynamically change the main color of the 3D meshes and the starfield in real-time.

---

## ⚙️ Technologies Used

* **Three.js:** The core 3D graphics library.
* **lil-gui:** A lightweight graphical user interface library for easy debugging and real-time parameter control.
* **Vanilla JavaScript (ES6+):** For core logic and DOM interaction.
* **HTML/CSS:** For the basic page structure and canvas container.

---

## 🛠️ Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Alejosv07/SimplePageTHREEJS
    cd SimplePageTHREEJS
    ```

2.  **Install dependencies (if using a modern setup like Vite):**
    ```bash
    # If you used npm
    npm install
    # If you used yarn
    yarn install
    ```

3.  **Run the local server:**
    ```bash
    # Using Vite
    npm run dev
    ```
    Your project should now be accessible at `http://localhost:5173` (or the port specified by your development server).

---

## 📦 Project Structure

The main logic resides in your JavaScript file, where the three core meshes (`Dodecahedron`, `Torus`, and `Cone`) are created and animated.

| File/Folder | Description |
| :--- | :--- |
| `index.html` | The main entry point and canvas container. |
| `script.js` | **The main Three.js scene logic, camera movement, and animation loop.** |
| `img/gradients/3.jpg` | The 1-pixel height color ramp used for the cel-shading effect. **(CRITICAL)** |
| `package.json` | Project metadata and dependency list. |

---
    npm run deploy
    ```
    *(Note: The deployment method uses `git subtree push --prefix dist origin gh-pages` as suggested in previous steps.)*
