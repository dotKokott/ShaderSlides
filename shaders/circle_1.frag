precision mediump float;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 center = vec2(0.0, 0.0);
    
    float dist = distance(st, center);
    vec3 color = vec3(dist);
    
    gl_FragColor = vec4(color, 1.0);
}