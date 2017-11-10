precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_webcam;

float wave(float x, float amount) {
    return (sin(x * amount) + 1.) * .5;
}

void main() {
    vec2 position = gl_FragCoord.xy/u_resolution.xy;
    position.x *= u_resolution.x/u_resolution.y;

    vec4 color = texture2D(u_webcam, position);
    gl_FragColor.r = wave(color.r, 10.);
    gl_FragColor.g = wave(color.g, 20.);
    gl_FragColor.b = wave(color.b, 40.);
    gl_FragColor.a = 1.;
}
