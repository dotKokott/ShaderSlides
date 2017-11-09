precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_webcam;

void main() {
    //Normalize coordinates from 0.0 to 1.0
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st.x = 1.0 - st.x;

    gl_FragColor = texture2D(u_webcam, st);
}
