precision mediump float;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st = st * 2.0 - 1.0;

    float r = 0.5;
    vec2 center = vec2(0.0, 0.0);
    
    float dist = distance(st, center);
    vec3 color;
    
    color = vec3(step(r, dist));
  
    gl_FragColor = vec4(color, 1.0);
}