precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

vec3 circle(vec2 st, vec2 center, float radius) {
    float dist = distance(st, center);

    return vec3(step(radius, dist));
}

void main() {
    vec2 position = gl_FragCoord.xy/u_resolution.xy;
    position.x *= u_resolution.x/u_resolution.y;

    vec2 circle_position = vec2(0.5);

    //Lets use sin and cos to move this guy around

    

    vec3 color = circle(position, circle_position, 0.1);
    gl_FragColor = vec4(color, 1.0);
}
