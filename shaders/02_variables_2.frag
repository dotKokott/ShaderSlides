precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

vec3 getColor(in float a, in float b) {
 return vec3(1.0, a, b);  
}

void main() {
    float a = sin(0.5 + u_time);
    float b = cos(1.0);

    vec3 color = getColor(a, b);
    
    gl_FragColor = vec4(color, 1.0);
}