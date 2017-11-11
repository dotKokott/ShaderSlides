precision mediump float;

uniform vec2 u_resolution;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;

    float random = random(pos);

    gl_FragColor = vec4(vec3(random),1.0);
}
