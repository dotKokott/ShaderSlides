precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float random (float x) {
    return fract(sin(x)*1e4);
}

vec3 circle(vec2 st, vec2 center, float radius) {
    float dist = distance(st, center);

    return vec3(step(radius, dist));
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color;

    gl_FragColor = vec4(vec3(color),1.0);
}
