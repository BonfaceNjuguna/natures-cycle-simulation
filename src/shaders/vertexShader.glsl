# Vertex Shader for Nature's Cycle Simulation

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1.0; // Adjust point size if needed
}