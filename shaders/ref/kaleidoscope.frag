precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;

  // normalize to the center
  vec2 p = position - 0.5;

  // cartesian to polar coordinates
  float r = length(p);
  float a = atan(p.y, p.x);

  // kaleidoscope
  float sides = 6.;
  float tau = 2. * 3.1416;
  a = mod(a, tau/sides);
  a = abs(a - tau/sides/2.);

  // polar to cartesian coordinates
  p = r * vec2(cos(a), sin(a));

  // sample the webcam
  vec4 color = texture2D(u_webcam, p + 0.5);
  gl_FragColor = color;
}
