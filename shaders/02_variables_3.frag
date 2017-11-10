precision mediump float;

void main() {
    // gl_FragCoord vec2(x, y) in screen space

    float a = sin(gl_FragCoord.x);
    float b = 0.5;

    vec3 color = vec3(a, b, a + b);
    
    gl_FragColor = vec4(color, 1.0);
}
