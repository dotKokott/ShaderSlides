precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

float wrap(float x) {
  return abs(mod(x, 2.)-1.);
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;

    vec2 p = position;
    float size = 0.1;
    p.x = mod(p.x, size);
    p.x = abs(p.x - size/2.);
    p.x = wrap(p.x + u_time/6.);

	gl_FragColor = texture2D(u_webcam, p);
}
