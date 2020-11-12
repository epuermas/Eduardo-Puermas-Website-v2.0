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
					title: "SuperGig",
					description:
						"Website that allows users to post short-term gigs. Job seekers can then go on the website and review the jobs available and contact the posting user if they wish to complete them.",
					url: "https://github.com/epuermas/SuperGig-FrontEnd"
				},
				// TO-DO LIST
				{
					title: "Personal Website",
					description:
						"Personal website shows skills, projects, and contact info. Built using ReactJs, Bootstrap, CSS & npm Libraries.",
					url: "https://github.com/epuermas/Eduardo-Puermas-Website-v2.0"
				},
				// TRAFFIC LIGHT
				{
					title: "Basic Website Template",
					description:
						"Code that prints a basic-website layout, allowing users to edit and personalize for future deployment.",
					url: "https://github.com/epuermas/Basic-Website-Template"
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
