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
		]


	}
});
