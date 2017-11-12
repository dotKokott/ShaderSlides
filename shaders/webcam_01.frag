precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_webcam;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;

    //How would we flip the image horizontally?

    gl_FragColor = texture2D(u_webcam, pos);
}
