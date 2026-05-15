export interface PersonalizedIcon {
	icon: string;
	colorClass: string;
}

export const PersonalizedIcons: Record<string, PersonalizedIcon> = {

    linkedin: {
        icon: "simple-icons:linkedin" ,
		colorClass: "text-theme-lightblue" ,
    },
    github: {
        icon: "simple-icons:github",
		colorClass: "text-theme-gray",
    }, 
    instagram: {
        icon: "simple-icons:instagram",
		colorClass: "text-theme-lightpink",
    },
    leftArrow: {
        icon:"material-symbols:arrow-circle-left",
        colorClass: "text-theme-accent1",
    },
    folder: {
        icon:"material-symbols:folder-copy-rounded",
        colorClass: "text-theme-yellow",
    }
}
