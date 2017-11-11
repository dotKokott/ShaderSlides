precision mediump float;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    // Multiplying y coordinate by 2.
    st.y = st.y * 2.0;
    st.y = fract(st.y);


    // Uncomment to multiply x coordinate by 2 as well!
    // st.x = st.x * 2.0;
    // st.x = fract(st.x);

    float transition;
    
    transition = step(1.0, st.x + st.y);
    
    vec3 color = vec3(transition);
    gl_FragColor = vec4(color, 1.0);
}