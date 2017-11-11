precision mediump float;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    st.y = st.y * 2.0;

    float transition;
    
    transition = step(0.5, st.y);
    // transition = step(1.0, st.y + st.x);
    
    vec3 color = vec3(transition);
    gl_FragColor = vec4(color, 1.0);
}