precision mediump float;

uniform vec2 u_resolution;

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution.xy;
	vec4 color;
	color.a = 1.0;
    color.r = mod(position.x, .3);
	color.b = mod(1.0 - position.x, .3);

    gl_FragColor = color;
}
