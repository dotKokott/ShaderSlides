precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

float wave(float x, float amount) {
    return (sin(x * amount) + 1.) * .5;
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;
	vec2 p = position;
    p.x = p.x + sin(p.y * 80. + u_time * 6.) * 0.03;

    gl_FragColor = texture2D(u_webcam, p);
}
