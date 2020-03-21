const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cards: [
				// DISCOVERLAW
				{
					title: "DiscoverLaw",
					description:
						"Website that allows users to directly ask attorneys legal questions and locate Law Firms based on legal needs.",
					url: "https://github.com/epuermas/DiscoverLaw"
				},
				// CONTACT LIST
				{
					title: "Interactive Contact List",
					description:
						"Code that prints an interactive contact list allowing the user to add, edit, and delete contacts using an API.",
					url: "https://github.com/epuermas/Functional-ContactList"
				},
				// TO-DO LIST
				{
					title: "Interactive To-Do List",
					description:
						"Code that prints an interactive to-do list allowing the user to add and delete tasks.",
					url: "https://github.com/epuermas/To-do-List"
				},
				// TRAFFIC LIGHT
				{
					title: "Interactive Traffic Light",
					description: "Code that prints an interactive traffic light, onlick user can turn on lights.",
					url: "https://github.com/epuermas/Interactive-Traffic-Light"
				},
				// SECONDS COUNTER
				// {
				// 	title: "Seconds Counter",
				// 	description: "Code that triggers a seconds counter as soon as the page refreshes.",
				// 	url: "https://github.com/epuermas/Seconds-Counter"
				// },
				// RANDOM CARD GENERATOR
				{
					title: "Random-Card Generator",
					description:
						"Code that prints a random card any time the uses refreshes the page/button is pressed.",
					url: "https://github.com/epuermas/Random-Card-Generator"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
