precision mediump float;

uniform vec2 u_resolution;

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution.xy;

	vec4 color;
	if(position.x > 0.5) {
		color = vec4(1., 1., 1., 1.);
	} else {
		color = vec4(0., 0., 0., 1.);
	}

	gl_FragColor = color;
}
