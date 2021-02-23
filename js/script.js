Vue.config.devtools = true;

new Vue ({
	el: '#page-container',

	data: {

		// Link della navbar superiore
		navLinks: [
			{
				name: 'Home',
				hasDropdown: true
			},

			{
				name: 'Courses',
				hasDropdown: true
			},

			{
				name: 'About Us',
				hasDropdown: false
			},

			{
				name: 'News',
				hasDropdown: true
			},

			{
				name: 'Pages',
				hasDropdown: true
			},

			{
				name: 'Contact',
				hasDropdown: false
			},

			{
				name: 'Purchase',
				hasDropdown: false
			}
		],

		eduprimeLinks: [
			'Request a website',
			'Browse Themes',
			'Payment options',
			'Support System',
			'Checkout',
			'Purchase Theme'
		],

		networkingLinks: [
			'Purchase Theme',
			'Our Benefits',
			'Our Team',
			'Our Services',
			'Other Products',
			'My Account'
		],

		categories: [
			'ECONOMY',
			'DESIGN',
			'COACHING',
			'BUSINESS',
			'MEDICINE',
			'LAW',
			'FITNESS'
		]
	}
});
