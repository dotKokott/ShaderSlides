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

float noise(float x) {
    float i = floor(x);  // integer
    float f = fract(x);  // fraction

    return mix(random(i), random(i + 1.0), smoothstep(0.,1.,f));
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color;

    color.r = circle(pos, vec2(.5), noise(pos.x * pos.y * (5.680 + cos(u_time * 2.)* 2.)) * noise(u_time * 5.) * .2).r;
    color.g = circle(pos, vec2(.5), noise(pos.x * pos.y * (6.568 + cos(u_time * 2.) * 2.)) * 0.2).r;
	color.b = circle(pos, vec2(.5), noise(pos.x * pos.y * (5.680 + cos(u_time * 2.)* 2.)) * 0.2).r;

    gl_FragColor = vec4(vec3(color),1.0);
}
