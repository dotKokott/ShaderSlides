precision mediump float;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    float transition;
    
    
    transition = step(0.5, st.y);
    // transition = smoothstep(0.25, 0.5, st.y);

    
    vec3 color = vec3(transition);
    gl_FragColor = vec4(color, 1.0);
}