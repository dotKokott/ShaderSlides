precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 center, in float radius, in vec2 st) {    
  float dist = distance(st, center);
  float smooth_distance = smoothstep(radius, radius - 0.01, dist);

  return smooth_distance;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    //Centering the coordinate system
    st *= 2.0 - 1.0;

    vec3 resultingColor;

    gl_FragColor = vec4(resultingColor, 1.0);
}