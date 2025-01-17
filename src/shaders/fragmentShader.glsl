void main() {
    // Set the color based on the time of day
    vec3 dayColor = vec3(0.5, 0.7, 1.0); // Light blue for daytime
    vec3 nightColor = vec3(0.1, 0.1, 0.3); // Dark blue for nighttime
    vec3 color = mix(nightColor, dayColor, smoothstep(0.0, 1.0, sin(time * 0.5 + 3.14))); // Smooth transition

    // Apply seasonal color changes
    float seasonFactor = abs(sin(time * 0.1)); // Simulate seasonal changes
    color *= mix(vec3(1.0, 0.5, 0.5), vec3(0.5, 1.0, 0.5), seasonFactor); // Blend colors for seasons

    gl_FragColor = vec4(color, 1.0); // Set the final color
}