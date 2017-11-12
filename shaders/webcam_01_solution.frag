precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_webcam;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;

    pos.x = 1.0 - pos.x;

    gl_FragColor = texture2D(u_webcam, pos);
}
