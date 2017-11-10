precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

float wave(vec2 p, float angle) {
  vec2 direction = vec2(cos(angle), sin(angle));
  return cos(dot(p, direction));
}

float wrap(float x) {
  return abs(mod(x, 2.)-1.);
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;

    vec2 p = (position - 0.5) * 50.;

    float brightness = 0.;
    for (float i = 1.; i <= 11.; i++) {
    	brightness += wave(p, u_time / i);
    }

    brightness = wrap(brightness);

    gl_FragColor.rgb = vec3(brightness);
    gl_FragColor.a = 1.;
}
