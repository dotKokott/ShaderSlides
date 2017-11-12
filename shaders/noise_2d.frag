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

float noise2D(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = smoothstep(0.,1.,f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color;

	pos *= 6.0;

	color = vec3(noise2D(pos));

    gl_FragColor = vec4(vec3(color),1.0);
}
