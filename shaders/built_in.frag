precision mediump float;

uniform vec2 u_resolution;

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution.xy;
	vec4 color;

	//PLAYGROUND

	gl_FragColor = color;
}
