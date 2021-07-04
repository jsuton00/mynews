import moment from 'moment';

export const formatDateFromNow = (dateTimeValue) => {
	let dateTime = dateTimeValue;
	let dateDiff = '';

	moment.updateLocale('en-GB', {
		longDateFormat: {
			LT: 'h:mm A',
			LTS: 'h:mm:ss A',
			L: 'DD/MM/YYYY',
			LL: 'Do MMMM YYYY',
			LLL: 'Do MMMM YYYY LT',
			LLLL: 'dddd, Do MMMM YYYY LT',
		},
	});

	if (dateTime) {
		dateDiff = moment(dateTime).calendar(null, {
			lastDay: '[Yesterday], LT',
			sameDay: '[Today], LT',
			sameElse: 'LL, LT',
		});
		return dateDiff;
	}
};
