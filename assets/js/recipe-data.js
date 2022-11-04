// Author: Robin Warner
// Recipe Data object for Culinary Delight
const weeklyRecipes = [
    {
        weekNumber: 1,
        article: `This week's recipes consist of a good old-fashioned main course
            spiced-up and re-presented - 
            <a href="recipe.html?week_num=1&course=main" title="Main Course Page">"Special Cottage Pie"</a> 
            followed by a delicious dessert to satisfy any craving - 
            <a href="recipe.html?week_num=1&course=dessert" title="Dessert Page">"Apple Tarte Tatin"</a>`,
        courses: [
            {
                course: "main",
                title: "Special Cottage Pie"
            },
            {
                course: "dessert",
                title: "Apple Tarte Tatin"
            }
        ]
    }
];

// Recipes
/* Recipe Template
    {
        title: "", // String the name of the dish
        course: "main", // String, "main", "dessert" or "starter"
        description: "", // String, 1 to three sentences describing the meal
        credits: "", // String, where the recipe came from, "" if not applicable
        ingredients: [
            "", // String, ingredient item
        ],
        utensils: [
            "", // String, utensil item
        ],
        steps: [
            [
                "", // String one or more paragraphs for recipe step
            ]
        ]
    }
*/
const recipes = [
    {
        title: "Special Cottage Pie",
        course: "main",
        description: "An extra tasty version of the home standard with some posh finishing touches",
        credits: "Our wonderful in-house chef - Invisible Alice",
        ingredients: [
            "1/2 tin chopped tomatoes",
            "1 large onion",
            "2 medium-sized carrots",
            "1/2 garlic bulb",
            "1 teaspoon dried mixed herbs",
            "1/2 teaspoon ground black pepper",
            "100g cheddar cheese",
            "450g minced beef",
            "3 or 4 average-sized potatoes",
            "1 fresh tomato",
            "Salt",
            "Knob of margarine or butter",
            "Two tablespoons of cooking oil",
            "1 medium-sized cauliflower (accompaniment)"
        ],
        utensils: [
            "2 medium-sized saucepans",
            "Large frying pan",
            "1 9-inch baking tin"
        ],
        steps: [
            [
                "Peel and halve the potatoes"
            ],
            [
                "Peel/scrape the carrots and cut into small (1cm) chunks"
            ],
            [
                "Place carrots and potatoes in a saucepan and cover with water. Add a sprinkle of salt. Simmer on the hob for 30 minutes",
                "Do next while this is cooking .."
            ],
            [
                "Peel and cut the onion into small pieces"
            ],
            [
                "Pour a little cooking oil into the frying pan and heat for one minute"
            ],
            [
                "Put the onion into the frying-pan. Stir occasionally and cook until glazed and soft.",
                "Do next while this is cooking .."
            ],
            [
                "Split the garlic bulb in half and use the pieces from one half. Peel the pieces and then cut as small as you reasonably can"
            ],
            [
                "Once the onion is cooked, add the minced beef and the garlic to the onion in the frying-pan and mix-in well. Stir and cook until all the red of the meat is gone"
            ],
            [
                "When the minced beef is ready, put it all into a saucepan and add 1/2 tin of chopped tomatoes. Add 1/3 mug of water. Cook on the hob for 30 minutes, stirring occasionally.",
                "Do next while this is cooking .."
            ],
            [
                "Add a sprinkle of salt, 1/2 teaspoon ground black pepper and 1 teaspoon dried mixed herbs to the meat in the saucepan and stir-in"
            ],
            [
                "Once the potatoes are soft, drain the saucepan and separate the potatoes to mash. Add the carrots to the meat in the saucepan and stir-in"
            ],
            [
                "Add a generous knob of butter/margarine to the potatoes and mash"
            ],
            [
                "Once the meat etc. has been cooked for 30 minutes transfer the mix to a suitable baking tin (9 inch). Spread to cover the base evenly"
            ],
            [
                "Split the cauliflower into it's florettes"
            ],
            [
                "Put the cauliflower in a saucepan and cover with water, simmer for 25 minutes, until slightly tender",
                "Do next while this is cooking .."
            ],
            [
                "Grate the 100g cheese"
            ],
            [
                "Cover the meat mix in the baking tin evenly with the mashed potato. Best to put it on in small amounts"
            ],
            [
                "Sprinkle the cheese evenly onto the mashed potato"
            ],
            [
                "Cut the tomato in two and then into about a dozen small slivers"
            ],
            [
                "Arrange the tomato pieces evenly on top of the grated cheese"
            ],
            [
                "Place the meat dish in the oven at 200 degrees C and bake for 15 minutes or until a little golden brown"
            ],
            [
                "When all is cooked - dish-up - Bon Appetit!"
            ]
        ]
    },
    {
        title: "Apple Tarte Tatin",
        course: "dessert",
        description: "A delicious \"upside-down\" apple medley. Excellent as a follow-on to traditional English meals. You can prepare this before the main and serve warm or cold.",
        credits: "Recipe Courtesy - CLASSIC Mary Berry (BBC Books)",
        ingredients: [
            "175g granulated sugar",
            "Butter, for greasing",
            "2 or 3 bramley apples, to make 200g when peeled and cut",
            "2 tablespoons caster sugar",
            "4 large eating apples",
            "Plain flour for dusting",
            "375g block all butter puff pastry"
        ],
        utensils: [
            "9 inch fixed-base deep-sided cake tin",
            "Stainless steel saucepan"
        ],
        steps: [
            [
                "Make caramel as follows: put 175g granulated sugar and 6 tablespoons of water into the saucepan",
            ],
            [
                "Heat the sugar solution gently and stir until dissolved. Boil until a golden straw colour"
            ],
            [
                "Once the caramel is a golden straw colour pour to spread evenly over the base of the cake tin and stand aside to set for 30 minutes.",
                "Do next while waiting .. "
            ],
            [
                "Core, peel and cut the bramley apples into 2cm chunks"
            ],
            [
                "Put the bramley apples, 2 tablespoons of caster sugar and 2 tablespoons of water into the saucepan and simmer on the hob until the apple is soft"
            ],
            [
                "Once the bramley apples are soft, take off the heat and mash to a puree with a fork"
            ],
            [
                "Peel and core the eating apples and cut into slivers about 5mm thick"
            ],
            [
                "When the caramel in the tin has set butter the sides of the tin then arrange a layer of the eating apple slices over it, to cover"
            ],
            [
                "Scatter the remaining eating apple pieces evenly over the arranged layer"
            ],
            [
                "Spread the bramley apple puree evenly over the top of the eating apple pieces"
            ],
            [
                "Dust a board with plain flour and use it to roll-out a circle of puff pastry about 2cm wider than the cake tin"
            ],
            [
                "Cover the apple in the tin with the circle of pastry and tuck-in to the sides around the edges. Cut a small cross in the centre of the pastry to let the steam out"
            ],
            [
                "Pre-heat the oven (if necessary) to 220 degrees C, place the tin in the oven and bake for 35-40 minutes or until light golden brown"
            ],
            [
                "Take the tin from the oven and place a dinner-plate upside-down over it, then turn the tin and the plate over, so that the fruit and caramel are on top"
            ],
            [
                "Serve with cream and enjoy - Bon Appetit!"
            ]
        ]
    }
];