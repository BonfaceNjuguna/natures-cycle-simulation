# Nature's Cycle Simulation

This project simulates natural transitions such as day to night, seasonal changes, and the water cycle using Three.js. The simulation aims to provide an interactive and visually appealing representation of these natural phenomena.

## Project Structure

```
natures-cycle-simulation
├── public/
│   ├── images/
│   ├── models/
│   ├── shaders/
│   └── index.html
│── src/
│   ├── assets/ 
│   │   ├── textures/
│   │   ├── sounds/          
│   │   └── models/          
│   │
│   ├── components/          
│   │   ├── camera.js        
│   │   ├── lights.js        
│   │   ├── skybox.js        
│   │   ├── ground.js        
│   │   ├── weather.js       
│   │   └── transformations/ 
│   │       ├── trees.js     
│   │       ├── sunMoon.js   
│   │       └── house.js
|   |       └── character.js   
│   │
│   ├── scenes/              
│   │   └── mainScene.js        
│   │
│   ├── ui/             
│   │   ├── seasonDropdown.js      
│   │   ├── timeDisplay.js    
│   │   ├── timeSlider.js       
│   │   └── weatherCheckboxes.js
│   │
│   ├── utils/                    
│   │   └── seasonUtils.js        
│   │
│   ├── styles/              
│   │   └── main.css       
│   │
│   ├── main.js              
│   └── app.js               
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/BonfaceNjuguna/natures-cycle-simulation.git
   cd natures-cycle-simulation
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the simulation.

## Features

- **Day to Night Transition:** Experience the gradual change in lighting and colors as the simulation transitions from day to night.
- **Seasonal Changes:** Observe the changes in the environment as seasons shift, affecting colors, weather, and scenery.
- **Water Cycle Simulation:** Visualize the processes of evaporation, condensation, and precipitation in an interactive manner.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.