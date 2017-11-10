precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_webcam;

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    position.x *= u_resolution.x / u_resolution.y;

    vec2 p = position - 0.5;;
    // cartesian to polar coordinates
    float r = length(p);
    float a = atan(p.y, p.x);

    // distort
    r = sqrt(r); // pinch
    r = r*r*r; // bulge

    // polar to cartesian coordinates
    p = r * vec2(cos(a), sin(a));

    vec4 color = texture2D(u_webcam, p + 0.5);
    gl_FragColor = color;
}
