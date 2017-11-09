precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_webcam;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    gl_FragColor = texture2D(u_webcam, st);
}
