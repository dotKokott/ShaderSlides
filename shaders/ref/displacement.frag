precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

float stripes(vec2 p, float steps) {
  return fract(p.x*steps);
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;

    vec2 p = position;
    vec4 color = texture2D(u_webcam, p);

    p.x += color.r * 0.1 * sin(u_time);

    float brightness = stripes(p, 10.);
    gl_FragColor.rgb = vec3(brightness);
    gl_FragColor.a = 1.;
}
