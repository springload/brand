const createCSSVariablesFromObject = require("./createCSSVariablesFromObject");

describe("createCSSVariablesFromObject", () => {
	it("renders a flat object into CSS variable definitions", () => {
		expect(createCSSVariablesFromObject({ colorGreen: "#00FF00" })).toEqual(
			`--colorGreen: #00FF00;`
		);
	});

	it("flattens objects into camcelCased CSS variable definitions", () => {
		expect(
			createCSSVariablesFromObject({
				themes: { dark: { colorText: "#00FF00" } }
			})
		).toEqual(`--themesDarkColorText: #00FF00;`);
	});

	it("collapses multiple variables into multiple CSS declaration across multiple lines", () => {
		expect(
			createCSSVariablesFromObject({
				colorGreen: "#00FF00",
				colorRed: "#FF0000"
			})
		).toEqual(
			`--colorGreen: #00FF00;
--colorRed: #FF0000;`
		);
	});

	it("works with mixed value types (flat and deep)", () => {
		expect(
			createCSSVariablesFromObject({
				colorGreen: "#00FF00",
				themes: {
					dark: {
						colorText: "#FFFFFF"
					}
				}
			})
		).toEqual(
			`--colorGreen: #00FF00;

--themesDarkColorText: #FFFFFF;`
		);
	});

	it("uses the optional symbol argument if provided", () => {
		expect(
			createCSSVariablesFromObject(
				{
					colorGreen: "#00FF00"
				},
				"$"
			)
		).toEqual(`$colorGreen: #00FF00;`);
	});
});
