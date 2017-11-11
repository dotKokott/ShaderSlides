precision mediump float;

uniform vec2 u_resolution;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;

    float random = fract(sin(pos.x)*1000000.0);

    //Try to generate a random field instead of just columns

    gl_FragColor = vec4(vec3(random),1.0);
}
