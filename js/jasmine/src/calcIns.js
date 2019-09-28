function calcInsAustria(age,horse_power) {

	return Math.round(Number(horse_power * 100 / age + 50));
};

function calcInsHungary(age,horse_power) {

	return Math.round(Number(horse_power * 120 / age + 100));
};

function calcInsGreece(age,horse_power) {

	return Math.round(Number(horse_power * 150 / (age + 3) + 50));
};

function calcIns(age,horse_power,country) {
switch (country) {
		case "Austria":
			return Math.round(Number(horse_power * 100 / age + 50));
			break;
	 	case "Hungary":
			return Math.round(Number(horse_power * 120 / age + 100));
			break;
	 	case "Greece":
			return Math.round(Number(horse_power * 150 / (age + 3) + 50));
			break;
		default:
			return "no country selected"
			break;
}
};