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
    st *= 2.0 - 1.0;

    vec3 resultingColor;

    st.x += sin(u_time);
    
    float isFirstCircle = circle(vec2(0.65, 0.65), 0.25, st);
    vec3 coloredCircle = vec3(1.0, 0.15, 0.75) * isFirstCircle;
    
    resultingColor = coloredCircle;

    gl_FragColor = vec4(resultingColor, 1.0);
}